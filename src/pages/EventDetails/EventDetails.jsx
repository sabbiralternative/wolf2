import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useGetEventDetailsQuery } from "../../redux/features/events/events";
import { setPredictOdd } from "../../redux/features/events/eventSlice";
import TeamTitlebar from "../../components/modules/EventDetails/TeamTitlebar";
import TabHeader from "../../components/modules/EventDetails/TabHeader";
import LiveMatchScreen from "../../components/modules/EventDetails/LiveMatchScreen";
import ScoreBoard from "../../components/modules/EventDetails/ScoreBoard";
import MatchOdds from "../../components/modules/EventDetails/MatchOdds";
import Bookmaker from "../../components/modules/EventDetails/Bookmaker";
import Fancy from "../../components/modules/EventDetails/Fancy";
import BetSlip from "../../components/modals/BetSlip/BetSlip";
import OpenBets from "../../components/modules/EventDetails/OpenBets";
import { useCurrentBets } from "../../hooks/currentBets";
import { useAccessTokenQuery } from "../../hooks/accessToken";
import { Settings } from "../../api";
import Premium from "../../components/modules/EventDetails/Premium";

const EventDetails = () => {
  const [eventTab, setEventTab] = useState("market");
  const [showLiveMatch, setShowLiveMatch] = useState(true);
  const [showScore, setShowScore] = useState(true);
  const { eventTypeId, eventId } = useParams();
  const { data: currentBets } = useCurrentBets(eventId);
  const { data: accessToken } = useAccessTokenQuery({
    eventTypeId: eventTypeId,
    eventId: eventId,
    type: "video",
    casino_currency: Settings.casino_currency,
  });
  const [profit, setProfit] = useState(0);
  const dispatch = useDispatch();
  const { placeBetValues, price, stake } = useSelector((state) => state.event);

  const { data } = useGetEventDetailsQuery(
    { eventTypeId, eventId },
    {
      pollingInterval: 1000,
    },
  );

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
      setProfit(formatNumber(1 + price / stake));
    }
  }, [price, stake, profit, placeBetValues, setProfit]);

  useEffect(() => {
    let total;
    if (
      placeBetValues?.btype === "MATCH_ODDS" ||
      placeBetValues?.btype === "BOOKMAKER"
    ) {
      if (placeBetValues?.back) {
        if (placeBetValues?.btype === "MATCH_ODDS") {
          total = price * stake - stake;
        }
        if (placeBetValues?.btype === "BOOKMAKER") {
          const bookmaker = 1 + price / 100;
          total = bookmaker * stake - stake;
        }

        // if (stake) {
        const currentExposure = placeBetValues?.exposure?.map((exp) => {
          return {
            updatedExposure: stake
              ? exp?.isBettingOnThisRunner
                ? formatNumber(exp?.exposure + total)
                : formatNumber(exp?.exposure + -1 * stake)
              : 0,
            id: exp?.id,
            isBettingOnThisRunner: exp?.isBettingOnThisRunner,
            name: exp?.name,
            exposure: exp?.exposure,
          };
        });

        dispatch(setPredictOdd(currentExposure));
        // }
      } else if (placeBetValues?.lay) {
        if (placeBetValues?.btype === "MATCH_ODDS") {
          total = -1 * (price * stake - stake);
        }
        if (placeBetValues?.btype === "BOOKMAKER") {
          const bookmaker = 1 + price / 100;
          total = -1 * (bookmaker * stake - stake);
        }

        // if (stake) {
        const currentExposure = placeBetValues?.exposure?.map((exp) => {
          return {
            updatedExposure: stake
              ? exp?.isBettingOnThisRunner
                ? formatNumber(exp?.exposure + total)
                : formatNumber(1 * exp?.exposure + 1 * stake)
              : 0,
            id: exp?.id,
            isBettingOnThisRunner: exp?.isBettingOnThisRunner,
            name: exp?.name,
            exposure: exp?.exposure,
          };
        });
        dispatch(setPredictOdd(currentExposure));
        // }
      }
    }
  }, [price, stake, placeBetValues, dispatch]);

  /* Format number */
  const formatNumber = (value) => {
    const hasDecimal = value % 1 !== 0;
    // value?.toFixed(2)
    return hasDecimal ? parseFloat(value?.toFixed(2)) : value;
  };

  const matchOdds = data?.result?.filter(
    (game) =>
      game.btype === "MATCH_ODDS" &&
      game?.visible == true &&
      game?.name !== "tied match",
  );
  const bookmaker = data?.result?.filter(
    (game) =>
      game.btype === "BOOKMAKER" &&
      game?.visible == true &&
      game?.name !== "tied match",
  );

  const tiedMatch = data?.result?.filter(
    (game) =>
      (game.btype === "MATCH_ODDS" || game.btype === "BOOKMAKER") &&
      game?.visible == true &&
      game?.name === "tied match",
  );

  return (
    <div
      className="page-body"
      style={{
        marginBottom: "0px",
        height: "100%",
        maxHeight: "100%",
        overflowY: "hidden",
      }}
    >
      {placeBetValues && <BetSlip />}
      <div className="placebetpage-wrap">
        <div className="game-tab ng-star-inserted">
          <TeamTitlebar data={data} />
          <div
            className="mat-mdc-tab-group mat-primary mat-mdc-tab-group-stretch-tabs mat-tab-group"
            style={{ "--mat-tab-animation-duration": "500ms" }}
          >
            <TabHeader
              setShowLiveMatch={setShowLiveMatch}
              setShowScore={setShowScore}
              eventTab={eventTab}
              setEventTab={setEventTab}
              currentBets={currentBets}
              accessToken={accessToken}
              iscore={data?.iscore}
              score={data?.score}
            />
            <div className="mat-mdc-tab-body-wrapper">
              <div
                role="tabpanel"
                className="mat-mdc-tab-body  mat-tab-body  ng-tns-c737557735-1 mat-mdc-tab-body-active ng-star-inserted"
                id="mat-tab-content-0-0"
                aria-labelledby="mat-tab-label-0-0"
                aria-hidden="false"
              >
                {eventTab === "market" && (
                  <div
                    className="mat-mdc-tab-body-content ng-tns-c737557735-1 ng-trigger ng-trigger-translateTab"
                    style={{ transform: "none" }}
                  >
                    <div className="tab-body sports-tab ng-star-inserted">
                      {showLiveMatch && (
                        <LiveMatchScreen
                          score={data?.score}
                          accessToken={accessToken}
                        />
                      )}

                      {data?.score?.tracker && (
                        <div
                          style={{
                            height: "125px",
                            width: "100%",
                            overflow: "hidden",
                          }}
                        >
                          <iframe
                            style={{
                              width: "100%",
                              border: "0px",
                            }}
                            src={data?.score?.tracker}
                          ></iframe>
                        </div>
                      )}
                      {eventTypeId == 4 && data?.iscore && showScore && (
                        <ScoreBoard iscore={data?.iscore} />
                      )}

                      <div
                        className="mkt-tab-section"
                        style={{ paddingBottom: "0px" }}
                      >
                        {matchOdds?.length > 0 && (
                          <MatchOdds order="3" data={matchOdds} />
                        )}
                        {data?.premium && data?.premium?.eventId && (
                          <Premium premium={data?.premium} />
                        )}
                        {bookmaker?.length > 0 && (
                          <Bookmaker data={bookmaker} />
                        )}
                        {data?.result?.length > 0 && (
                          <Fancy data={data?.result} />
                        )}
                        {tiedMatch?.length > 0 && (
                          <MatchOdds order="12" data={tiedMatch} />
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {eventTab === "open_bets" && (
                  <OpenBets currentBets={currentBets} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
