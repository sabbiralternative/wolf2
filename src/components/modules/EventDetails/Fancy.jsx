import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useExposure } from "../../../hooks/exposure";
import { useGetLadderMutation } from "../../../redux/features/events/events";
import {
  setPlaceBetValues,
  setRunnerId,
} from "../../../redux/features/events/eventSlice";
import { setShowLoginModal } from "../../../redux/features/global/globalSlice";
import images from "../../../assets/images";
import Ladder from "../../UI/Ladder/Ladder";
import isOddSuspended from "../../../utils/isOddSuspended";

const Fancy = ({ data }) => {
  const fancyData = data?.filter(
    (fancy) =>
      fancy.btype === "FANCY" &&
      fancy.tabGroupName === "Normal" &&
      fancy?.visible == true,
  );
  const [marketName, setMarketName] = useState("");
  const [ladderData, setLadderData] = useState([]);
  const { eventId } = useParams();

  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  // const { runnerId } = useSelector((state) => state.event);
  const { data: exposure } = useExposure(eventId);
  const [getLadder] = useGetLadderMutation();

  const handleBetSlip = (betType, games, runner, price, bottomValue) => {
    if (token) {
      let selectionId;
      let runnerId;
      let eventTypeId;
      if (!price) {
        return;
      }

      let pnlBySelection;
      const updatedPnl = [];

      if (exposure?.pnlBySelection) {
        const obj = exposure?.pnlBySelection;
        pnlBySelection = Object?.values(obj);
      }

      if (games?.btype == "FANCY") {
        selectionId = games?.id;
        runnerId = games?.id;
        eventTypeId = games?.eventTypeId;
      } else if (games?.btype && games?.btype !== "FANCY") {
        selectionId = runner?.id;
        runnerId = games.runners.map((runner) => runner.id);
        eventTypeId = games?.eventTypeId;
        games?.runners?.forEach((runner) => {
          const pnl = pnlBySelection?.find((p) => p?.RunnerId === runner?.id);
          if (pnl) {
            updatedPnl.push(pnl?.pnl);
          }
        });
      } else {
        selectionId = runner?.selectionId;
        eventTypeId = games?.marketId;
        games?.runners?.forEach((runner) => {
          const pnl = pnlBySelection?.find(
            (p) => p?.RunnerId === runner?.selectionId,
          );
          if (pnl) {
            updatedPnl.push(pnl?.pnl);
          }
        });
      }

      const betData = {
        price,
        side: betType === "back" ? 0 : 1,
        selectionId,
        btype: games?.btype,
        eventTypeId,
        betDelay: games?.betDelay,
        marketId: games?.id,
        lay: betType === "lay",
        back: betType === "back",
        selectedBetName: runner?.name,
        name: games.runners.map((runner) => runner.name),
        runnerId,
        isWeak: games?.isWeak,
        maxLiabilityPerMarket: games?.maxLiabilityPerMarket,
        isBettable: games?.isBettable,
        maxLiabilityPerBet: games?.maxLiabilityPerBet,
        pnl: updatedPnl,
        marketName: games?.name,
        eventId: games?.eventId,
        totalSize: 0,
        bottomValue,
      };
      if (games?.btype == "FANCY") {
        dispatch(setRunnerId(games?.id));
      } else if (games?.btype && games?.btype !== "FANCY") {
        dispatch(setRunnerId(runner?.id));
      } else {
        dispatch(setRunnerId(runner?.selectionId));
      }

      dispatch(setPlaceBetValues(betData));
    } else {
      dispatch(setShowLoginModal(true));
    }
  };

  let pnlBySelection;
  if (exposure?.pnlBySelection) {
    const obj = exposure?.pnlBySelection;
    pnlBySelection = Object?.values(obj);
  }

  const handleGetLadder = async (pnl, name) => {
    if (name === marketName) {
      setMarketName(null);
      setLadderData([]);
    } else {
      if (!pnl?.MarketId) {
        return;
      }
      setMarketName(name);
      const res = await getLadder({ marketId: pnl?.MarketId }).unwrap();

      if (res.success) {
        setLadderData(res.result);
      }
    }
  };

  return (
    <Fragment>
      {fancyData?.length > 0 && (
        <div className="card-outer f-order-8 fancy-card ng-star-inserted">
          <div className="head-wrap">
            <h2 className="card-heading">Fancy</h2>
          </div>
          <div className="fancybody-header">
            <h3 className="card-title"> Min: 100 | Max: Upto 3L</h3>
            <div className="fb-stitle">
              <h3 className="lay-bg">No</h3>
              <h3 className="back-bg">Yes</h3>
            </div>
          </div>
          <div className="card-body">
            {fancyData?.map((game) => {
              const pnl =
                pnlBySelection?.find((pnl) => pnl?.MarketId === game?.id) || {};

              return (
                <div
                  key={game?.id}
                  className="data-wrap ng-star-inserted"
                  id="15.3OverPRS"
                >
                  <div className="teamlist-info">
                    <h3 className="team-title">
                      {" "}
                      {game?.name}
                      <p></p>
                    </h3>
                  </div>
                  {pnl?.pnl && (
                    <button
                      onClick={() => handleGetLadder(pnl, game?.name)}
                      className="bar-btn mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base ng-star-inserted"
                    >
                      <span className="mat-mdc-button-persistent-ripple mdc-button__ripple"></span>
                      <span className="mdc-button__label">
                        <img
                          alt=""
                          className="ladder-img"
                          src={images.ladder}
                        />
                      </span>
                      <span className="mat-mdc-focus-indicator"></span>
                      <span className="mat-mdc-button-touch-target"></span>
                      <span className="mat-ripple mat-mdc-button-ripple"></span>
                    </button>
                  )}
                  {pnl?.pnl && ladderData?.length > 0 && (
                    <Ladder
                      ladderData={ladderData}
                      marketName={marketName}
                      setLadderData={setLadderData}
                      setMarketName={setMarketName}
                    />
                  )}

                  <div className="ladder-datawrap dropdown-content">
                    <p className="fancy-head"> 15.3 Over PRS</p>
                    <div className="ld-header">
                      <div className="ld-data">
                        <h3>Figure</h3>
                        <h3>Win/Loss</h3>
                      </div>
                    </div>
                    <div className="ld-body" />
                    <div className="fancy-loader ng-star-inserted">
                      <div className="loader" />
                    </div>
                  </div>
                  <div className="flex-row-right rt-wrap">
                    {/* <div className="ball-running ng-star-inserted" style={{}}>
                      <h4>Ball Running</h4>
                    </div> */}
                    {isOddSuspended(game) && (
                      <div className="suspended-wrap ng-star-inserted">
                        <h4>Suspended</h4>
                      </div>
                    )}

                    <div className="count-v-wrap ng-star-inserted">
                      <button
                        onClick={() =>
                          handleBetSlip(
                            "lay",
                            game,
                            game?.runners?.[0],
                            game?.runners?.[0]?.lay?.[0]?.line,
                            game?.runners?.[0]?.lay?.[0]?.price,
                          )
                        }
                        className="mdc-button mdc-button--unelevated mat-mdc-unelevated-button count-value lay-count mat-unthemed mat-mdc-button-base"
                      >
                        <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                        <span className="mdc-button__label">
                          <h4 className="ng-star-inserted">
                            {" "}
                            {game?.runners?.[0]?.lay?.[0]?.line}
                          </h4>
                          <p className="ng-star-inserted">
                            {game?.runners?.[0]?.lay?.[0]?.price}
                          </p>
                        </span>
                        <span className="mat-mdc-focus-indicator" />
                        <span className="mat-mdc-button-touch-target" />
                      </button>
                      <button
                        onClick={() =>
                          handleBetSlip(
                            "back",
                            game,
                            game?.runners?.[0],
                            game?.runners?.[0]?.back?.[0]?.line,
                            game?.runners?.[0]?.back?.[0]?.price,
                          )
                        }
                        className="mdc-button mdc-button--unelevated mat-mdc-unelevated-button back-count count-value mat-unthemed mat-mdc-button-base"
                      >
                        <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                        <span className="mdc-button__label">
                          <h4 className="ng-star-inserted">
                            {" "}
                            {game?.runners?.[0]?.back?.[0]?.line}
                          </h4>
                          <p className="ng-star-inserted">
                            {" "}
                            {game?.runners?.[0]?.back?.[0]?.price}
                          </p>
                        </span>
                        <span className="mat-mdc-focus-indicator" />
                        <span className="mat-mdc-button-touch-target" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Fancy;
