import { Fragment, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import useBalance from "../../../hooks/balance";
import { useCurrentBets } from "../../../hooks/currentBets";
import { useExposure } from "../../../hooks/exposure";
import { useGetEventDetailsQuery } from "../../../redux/features/events/events";
import {
  setPlaceBetValues,
  setPredictOdd,
  setPrice,
  setStake,
} from "../../../redux/features/events/eventSlice";
import { API, Settings } from "../../../api";
import { v4 as uuidv4 } from "uuid";
import { AxiosJSEncrypt } from "../../../lib/AxiosJSEncrypt";
import toast from "react-hot-toast";
import useCloseModalClickOutside from "../../../hooks/closeModal";
import { isBetDelay, isDelay } from "../../../utils/isBetDelay";

const BetSlip = () => {
  const ref = useRef();
  const closePopupForForever = localStorage.getItem("closePopupForForever");
  const { pathname } = useLocation();
  const [isCashOut, setIsCashOut] = useState(false);
  const [profit, setProfit] = useState(0);
  const { eventId, eventTypeId } = useParams();
  const dispatch = useDispatch();
  const { price, stake, placeBetValues, predictOdd } = useSelector(
    (state) => state.event,
  );

  const { refetch: refetchBalance } = useBalance();
  const { refetch: refetchCurrentBets } = useCurrentBets(eventId);
  const { refetch: refetchExposure } = useExposure(eventId);
  const [betDelay, setBetDelay] = useState(null);
  const [loading, setLoading] = useState(false);
  const { data: eventData } = useGetEventDetailsQuery(
    { eventTypeId, eventId },
    {
      pollingInterval: 1000,
      skip: !pathname.includes("/event-details"),
    },
  );
  const currentPlaceBetEvent = eventData?.result?.find(
    (item) => item?.id === placeBetValues?.marketId,
  );

  const buttonValues = localStorage.getItem("buttonValue");
  let parseButtonValues = [];
  if (buttonValues) {
    parseButtonValues = JSON.parse(buttonValues);
  }

  useEffect(() => {
    dispatch(setPrice(placeBetValues?.price));
    dispatch(
      setStake(
        placeBetValues?.totalSize > 0
          ? placeBetValues?.totalSize.toFixed(2)
          : null,
      ),
    );

    setIsCashOut(placeBetValues?.cashout || false);
  }, [placeBetValues, dispatch]);

  useEffect(() => {
    if (betDelay <= 0) {
      setBetDelay(null);
    }
    dispatch(setPredictOdd([]));
  }, [placeBetValues, dispatch, betDelay]);

  let payload = {};
  if (price) {
    if (placeBetValues?.btype === "SPORTSBOOK") {
      payload = {
        price: price,
        side: placeBetValues?.side,
        selectionId: placeBetValues?.selectionId,
        btype: placeBetValues?.btype,
        placeName: placeBetValues?.placeName,
        eventTypeId: placeBetValues?.eventTypeId,
        betDelay: currentPlaceBetEvent?.betDelay,
        marketId: placeBetValues?.marketId,
        maxLiabilityPerMarket: placeBetValues?.maxLiabilityPerMarket,
        maxLiabilityPerBet: placeBetValues?.maxLiabilityPerBet,
        totalSize: stake,
        isBettable: placeBetValues?.isBettable,
        eventId: placeBetValues?.eventId,
        cashout: isCashOut,
        b2c: Settings.b2c,
      };
    } else {
      payload = {
        betDelay: currentPlaceBetEvent?.betDelay,
        btype: placeBetValues?.btype,
        eventTypeId: placeBetValues?.eventTypeId,
        marketId: placeBetValues?.marketId,
        price: price,
        selectionId: placeBetValues?.selectionId,
        side: placeBetValues?.side,
        totalSize: stake,
        maxLiabilityPerMarket: placeBetValues?.maxLiabilityPerMarket,
        isBettable: placeBetValues?.isBettable,
        maxLiabilityPerBet: placeBetValues?.maxLiabilityPerBet,
        eventId: placeBetValues?.eventId,
        cashout: placeBetValues?.cashout || false,
        b2c: Settings.b2c,
      };
    }
  }

  /* Handle bets */
  const handleOrderBets = async () => {
    const payloadData = [
      {
        ...payload,

        nounce: uuidv4(),
        isbetDelay: isBetDelay(placeBetValues),
        apk: closePopupForForever ? true : false,
      },
    ];
    setLoading(true);
    let delay = 0;
    if (isDelay(placeBetValues)) {
      if (
        eventTypeId == 4 &&
        placeBetValues?.btype === "MATCH_ODDS" &&
        price > 3 &&
        placeBetValues?.name?.length === 2
      ) {
        delay = 9000;
      }
      if (
        eventTypeId == 4 &&
        placeBetValues?.btype === "MATCH_ODDS" &&
        price > 7 &&
        placeBetValues?.name?.length === 3
      ) {
        delay = 9000;
      } else {
        setBetDelay(currentPlaceBetEvent?.betDelay);
        delay = Settings?.bet_delay ? currentPlaceBetEvent?.betDelay * 1000 : 0;
      }
    }

    setTimeout(async () => {
      const { data } = await AxiosJSEncrypt.post(API.order, payloadData);

      if (data?.success) {
        setLoading(false);
        refetchExposure();
        refetchBalance();
        refetchCurrentBets();
        setBetDelay("");
        toast.success(data?.result?.result?.placed?.[0]?.message);
        dispatch(setPlaceBetValues(null));
        dispatch(setStake(null));
      } else {
        setLoading(false);
        toast.error(
          data?.error?.status?.[0]?.description || data?.error?.errorMessage,
        );
        setBetDelay(null);
      }
    }, delay);
  };

  useEffect(() => {
    if (
      price &&
      stake &&
      placeBetValues?.back &&
      placeBetValues?.btype === "MATCH_ODDS"
    ) {
      const multiply = price * stake;
      setProfit(formatNumber(multiply - stake));
    } else if (
      price &&
      stake &&
      placeBetValues?.back &&
      (placeBetValues?.btype === "BOOKMAKER" ||
        placeBetValues?.btype === "BOOKMAKER2")
    ) {
      const bookmaker = 1 + price / 100;
      const total = bookmaker * stake - stake;

      setProfit(formatNumber(total));
    } else if (price && stake && placeBetValues?.btype === "FANCY") {
      const profit =
        (parseFloat(placeBetValues?.bottomValue) * parseFloat(stake)) /
        parseFloat(stake);
      setProfit(profit);
    } else if (placeBetValues?.lay) {
      const profit = (Number(price) - 1) * Number(stake);
      setProfit(profit?.toFixed(2));
    }
  }, [price, stake, profit, placeBetValues, setProfit]);

  /* Format number */
  const formatNumber = (value) => {
    const hasDecimal = value % 1 !== 0;
    // value?.toFixed(2)
    return hasDecimal ? parseFloat(value?.toFixed(2)) : value;
  };

  const handleButtonValue = (value) => {
    setIsCashOut(false);
    const buttonValue = Number(value);
    const prevStake = !stake ? null : Number(stake);

    if (prevStake === null) {
      dispatch(setStake(buttonValue));
    }
    if (prevStake >= 0) {
      dispatch(setStake(buttonValue + prevStake));
    }
  };

  // const selectedEvent = predictOdd?.find(
  //   (odd) => odd?.id === placeBetValues?.selectionId,
  // );

  const closeModal = () => {
    if (!loading) {
      dispatch(setPredictOdd([]));
      dispatch(setPlaceBetValues(null));
      dispatch(setStake(null));
    }
  };

  useCloseModalClickOutside(ref, () => {
    closeModal();
  });

  return (
    <Fragment>
      {loading && (
        <div className="page-loader-wrap ng-star-inserted">
          <div className="pageloader"></div>
        </div>
      )}

      <div>
        <div className="cdk-overlay-backdrop cdk-overlay-dark-backdrop cdk-overlay-backdrop-showing" />

        <div
          className="cdk-global-overlay-wrapper"
          dir="ltr"
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          <div
            id="cdk-overlay-1"
            className="cdk-overlay-pane betslip-dialog"
            style={{
              width: "100%",
              maxWidth: "400px",
              position: "fixed",
              bottom: "0px",
              marginBottom: "10px",
            }}
          >
            <div
              tabIndex={0}
              className="cdk-visually-hidden cdk-focus-trap-anchor"
              aria-hidden="true"
            />

            <div
              ref={ref}
              tabIndex={-1}
              className="mat-mdc-dialog-container mdc-dialog cdk-dialog-container mdc-dialog--open"
              id="mat-mdc-dialog-1"
              role="dialog"
              aria-modal="true"
              style={{ "-mat-dialog-transition-duration": "150ms" }}
            >
              <div className="mdc-dialog__container">
                <div className="mat-mdc-dialog-surface mdc-dialog__surface">
                  <div className="ng-star-inserted">
                    <div
                      className={`betslip-modal  ${
                        placeBetValues?.back ? "forback" : "forlay"
                      }`}
                    >
                      <div className="modal-header">
                        <h2 />
                        <h2 />
                        <h2> Place Bet | {placeBetValues?.marketName}</h2>
                        <div onClick={closeModal} className="action-btns">
                          <div className="change-position">
                            <button className="positon-icon mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base ng-star-inserted">
                              <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                              <div
                                role="img"
                                className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                aria-hidden="true"
                                data-mat-icon-type="font"
                              >
                                vertical_align_top
                              </div>
                              <span className="mdc-button__label" />
                              <span className="mat-mdc-focus-indicator" />
                              <span className="mat-mdc-button-touch-target" />
                              <span className="mat-ripple mat-mdc-button-ripple" />
                            </button>
                          </div>
                          <button
                            style={{ top: "unset", right: "unset" }}
                            className="modal-close-btn mdc-button mat-mdc-button mat-unthemed mat-mdc-button-base"
                            type="button"
                          >
                            <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                            <div
                              style={{ marginLeft: "4px" }}
                              role="img"
                              className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                              aria-hidden="true"
                              data-mat-icon-type="font"
                            >
                              close
                            </div>
                            <span className="mdc-button__label" />
                            <span className="mat-mdc-focus-indicator" />
                            <span className="mat-mdc-button-touch-target" />
                          </button>
                        </div>
                      </div>
                      <div className="modal-body">
                        <div
                          className={`betvalue-wrap  ${
                            placeBetValues?.back ? "forback" : "forlay"
                          }`}
                        >
                          <div className="betslip-toprow">
                            <h2>
                              {placeBetValues?.selectedBetName ||
                                placeBetValues?.placeName}
                            </h2>
                          </div>
                          <div className="bet-action-grid">
                            <div className="bet-action-item">
                              <label>ODDs</label>
                              <input
                                readOnly={placeBetValues?.isWeak}
                                type="number"
                                value={price}
                                onChange={(e) => {
                                  dispatch(setPrice(e.target.value));
                                  setIsCashOut(false);
                                }}
                                className="rate-inp"
                              />
                            </div>
                            <div className="bet-action-item">
                              <label>Stake</label>
                              <input
                                onChange={(e) => {
                                  dispatch(setStake(e.target.value));
                                  setIsCashOut(false);
                                }}
                                value={stake}
                                type="number"
                                name="betStake"
                                className="ng-untouched ng-pristine ng-valid"
                              />
                            </div>
                          </div>
                          <div className="error-wrap">
                            <p className="spacer" />
                          </div>
                          <div className="amt-chip-grid">
                            {parseButtonValues
                              ?.slice?.(0, 6)
                              ?.map((button, i) => (
                                <button
                                  key={i}
                                  onClick={() =>
                                    handleButtonValue(button?.value)
                                  }
                                  className="chip-grid-item mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base ng-star-inserted"
                                >
                                  <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                                  <span className="mdc-button__label">
                                    {button?.value}
                                  </span>
                                  <span className="mat-mdc-focus-indicator" />
                                  <span className="mat-mdc-button-touch-target" />
                                </button>
                              ))}
                          </div>
                          <div className="range-text-row">
                            <h2 style={{ textTransform: "none !important" }}>
                              {placeBetValues?.back ? (
                                <span>Profit : {profit}</span>
                              ) : (
                                <span>
                                  Liability : {profit}
                                  {/* {placeBetValues?.btype === "FANCY"
                                    ? profit
                                    : selectedEvent?.exposure} */}
                                </span>
                              )}
                            </h2>
                          </div>
                          <div className="bet-action-submit">
                            <button
                              onClick={handleOrderBets}
                              className="slip-btn notranslate mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base"
                            >
                              <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                              <span className="mdc-button__label">Submit </span>
                              <span className="mat-mdc-focus-indicator" />
                              <span className="mat-mdc-button-touch-target" />
                            </button>
                          </div>
                          {(placeBetValues?.btype === "MATCH_ODDS" ||
                            placeBetValues?.btype === "BOOKMAKER" ||
                            placeBetValues?.btype === "BOOKMAKER2") &&
                            predictOdd?.length > 0 && (
                              <div className="pred-pl-wrap ng-star-inserted">
                                {predictOdd?.map((predictOdd, i) => {
                                  return (
                                    <p
                                      key={i}
                                      className="pred-pl-row ng-star-inserted"
                                    >
                                      <strong> {predictOdd?.name}</strong>
                                      <span
                                        className={`${
                                          predictOdd?.exposure &&
                                          predictOdd?.exposure > 0
                                            ? "text-success"
                                            : "text-danger"
                                        }`}
                                      >
                                        {" "}
                                        {predictOdd?.exposure}
                                      </span>
                                      <span
                                        className={`${
                                          predictOdd?.updatedExposure &&
                                          predictOdd?.updatedExposure > 0
                                            ? "text-success"
                                            : "text-danger"
                                        }`}
                                      >
                                        {predictOdd?.updatedExposure}
                                      </span>
                                    </p>
                                  );
                                })}
                              </div>
                            )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default BetSlip;
