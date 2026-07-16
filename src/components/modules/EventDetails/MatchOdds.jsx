import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useExposure } from "../../../hooks/exposure";
import {
  setPlaceBetValues,
  setRunnerId,
} from "../../../redux/features/events/eventSlice";
import { setShowLoginModal } from "../../../redux/features/global/globalSlice";
import isOddSuspended from "../../../utils/isOddSuspended";
import { Settings } from "../../../api";
import { handleCashOutPlaceBet } from "../../../utils/handleCashoutPlaceBet";

const MatchOdds = ({ data }) => {
  const [speedCashOut, setSpeedCashOut] = useState(null);
  const { eventId } = useParams();
  const [teamProfit, setTeamProfit] = useState([]);
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const { data: exposure } = useExposure(eventId);

  const handleBetSlip = (betType, games, runner, price) => {
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
        games?.runners?.forEach((rnr) => {
          const pnl = pnlBySelection?.find((p) => p?.RunnerId === rnr?.id);
          if (pnl) {
            updatedPnl.push({
              exposure: pnl?.pnl,
              id: pnl?.RunnerId,
              isBettingOnThisRunner: rnr?.id === runner?.id,
              name: rnr?.name,
              updatedExposure: pnl?.pnl,
            });
          } else {
            updatedPnl.push({
              exposure: 0,
              id: rnr?.id,
              isBettingOnThisRunner: rnr?.id === runner?.id,
              name: rnr?.name,
            });
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
        exposure: updatedPnl,
        marketName: games?.name,
        eventId: games?.eventId,
        totalSize: 0,
        cashout: false,
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

  const computeExposureAndStake = (
    exposureA,
    exposureB,
    runner1,
    runner2,
    gameId,
  ) => {
    let runner,
      largerExposure,
      layValue,
      oppositeLayValue,
      lowerExposure,
      speedCashOut;

    const pnlArr = [exposureA, exposureB];
    const isOnePositiveExposure = onlyOnePositive(pnlArr);

    if (exposureA > exposureB) {
      // Team A has a larger exposure.
      runner = runner1;
      largerExposure = exposureA;
      layValue = runner1?.lay?.[0]?.price;
      oppositeLayValue = runner2?.lay?.[0]?.price;
      lowerExposure = exposureB;
    } else {
      // Team B has a larger exposure.
      runner = runner2;
      largerExposure = exposureB;
      layValue = runner2?.lay?.[0]?.price;
      oppositeLayValue = runner1?.lay?.[0]?.price;
      lowerExposure = exposureA;
    }
    if (exposureA > 0 && exposureB > 0) {
      const difference = Math.abs(exposureA - exposureB);
      if (difference <= 10) {
        speedCashOut = true;
      }
    }
    // Compute the absolute value of the lower exposure.
    let absLowerExposure = Math.abs(lowerExposure);

    // Compute the liability for the team with the initially larger exposure.
    let liability = absLowerExposure * (layValue - 1);

    // Compute the new exposure of the team with the initially larger exposure.
    let newExposure = largerExposure - liability;

    // Compute the profit using the new exposure and the lay odds of the opposite team.
    let profit = newExposure / layValue;

    // Calculate the new stake value for the opposite team by adding profit to the absolute value of its exposure.
    let newStakeValue = absLowerExposure + profit;

    // Return the results.
    return {
      runner,
      newExposure,
      profit,
      newStakeValue,
      oppositeLayValue,
      gameId,
      isOnePositiveExposure,
      exposureA,
      exposureB,
      runner1,
      runner2,
      speedCashOut,
    };
  };
  function onlyOnePositive(arr) {
    let positiveCount = arr?.filter((num) => num > 0).length;
    return positiveCount === 1;
  }
  useEffect(() => {
    let results = [];
    if (
      data?.length > 0 &&
      exposure?.pnlBySelection &&
      Object.keys(exposure?.pnlBySelection)?.length > 0
    ) {
      data.forEach((game) => {
        const runners = game?.runners || [];
        if (runners?.length === 2) {
          const runner1 = runners[0];
          const runner2 = runners[1];
          const pnl1 = pnlBySelection?.find(
            (pnl) => pnl?.RunnerId === runner1?.id,
          )?.pnl;
          const pnl2 = pnlBySelection?.find(
            (pnl) => pnl?.RunnerId === runner2?.id,
          )?.pnl;

          if (pnl1 && pnl2 && runner1 && runner2) {
            const result = computeExposureAndStake(
              pnl1,
              pnl2,
              runner1,
              runner2,
              game?.id,
            );
            results.push(result);
          }
        }
      });
      setTeamProfit(results);
    } else {
      setTeamProfit([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [eventId, data]);

  let pnlBySelection;
  if (exposure?.pnlBySelection) {
    const obj = exposure?.pnlBySelection;
    pnlBySelection = Object?.values(obj);
  }

  return (
    <Fragment>
      {data?.length > 0 &&
        data?.map((game, i) => {
          const teamProfitForGame = teamProfit?.find(
            (profit) =>
              profit?.gameId === game?.id && profit?.isOnePositiveExposure,
          );
          const speedCashOut = teamProfit?.find(
            (profit) => profit?.gameId === game?.id && profit?.speedCashOut,
          );
          return (
            <div key={i} className={` ng-star-inserted`}>
              <div className="ng-star-inserted">
                <div className="ng-star-inserted">
                  <div className="bookmaker-card card-outer" id="YBJVTEX">
                    <div className="head-wrap">
                      <h2 className="card-heading ng-star-inserted">
                        {game?.name?.toUpperCase()}
                      </h2>
                      <div className="btn-wrap">
                        {Settings.cashout &&
                          game?.runners?.length !== 3 &&
                          game?.status === "OPEN" &&
                          game?.name !== "toss" &&
                          !speedCashOut && (
                            <button
                              onClick={() =>
                                handleCashOutPlaceBet(
                                  game,
                                  "lay",
                                  dispatch,
                                  pnlBySelection,
                                  token,
                                  teamProfitForGame,
                                )
                              }
                              disabled={!teamProfitForGame}
                              className="mdc-button mat-mdc-button mat-unthemed mat-mdc-button-base ng-star-inserted"
                            >
                              <span className="mat-mdc-button-persistent-ripple mdc-button_ripple"></span>
                              <span className="mdc-button_label">
                                {" "}
                                Cashout{" "}
                                {teamProfitForGame?.profit &&
                                  `(${teamProfitForGame.profit.toFixed(0)})`}
                              </span>
                              <span className="mat-mdc-focus-indicator"></span>
                              <span className="mat-mdc-button-touch-target"></span>
                              <span className="mat-ripple mat-mdc-button-ripple"></span>
                            </button>
                          )}
                      </div>
                    </div>
                    <div className="card-header">
                      <h3 className="card-title">
                        {" "}
                        Min: {game?.minLiabilityPerBet} | Max:{" "}
                        {game?.maxLiabilityPerBet}{" "}
                      </h3>
                      <div className="lay-back-wrap">
                        <h3 className="back-bg">Back</h3>
                        <h3 className="lay-bg ng-star-inserted">Lay</h3>
                      </div>
                    </div>
                    <div className="card-body">
                      {game?.runners?.map((runner) => {
                        const pnl = pnlBySelection?.find(
                          (pnl) => pnl?.RunnerId === runner?.id,
                        );
                        // const predictOddValues = predictOdd?.find(
                        //   (val) => val?.id === runner?.id,
                        // );
                        return (
                          <div
                            key={runner?.id}
                            className="data-wrap ng-star-inserted"
                          >
                            <div className="teamlist-info flex-row-left">
                              <h3 className="team-title">{runner?.name}</h3>
                              {pnl && (
                                <p
                                  className={`${
                                    pnl?.pnl > 0
                                      ? "text-success"
                                      : "text-danger"
                                  } ng-star-inserted`}
                                >
                                  {pnl?.pnl}
                                </p>
                              )}
                            </div>
                            <div className="flex-row-right rt-wrap">
                              {isOddSuspended(runner) && (
                                <div className="suspended-wrap ng-star-inserted">
                                  <h4>Suspended</h4>
                                </div>
                              )}
                              <div className="count-v-wrap ng-star-inserted">
                                <button
                                  onClick={() =>
                                    handleBetSlip(
                                      "back",
                                      game,
                                      runner,
                                      runner?.back?.[0]?.price,
                                    )
                                  }
                                  className="mdc-button mdc-button--unelevated mat-mdc-unelevated-button back-count count-value mat-unthemed mat-mdc-button-base"
                                  id="20d49cbbd4a8e0d4ca6ebd4a8929c02c:d9a681ef6dffb8148c2f0f3e1ae433d5back1"
                                >
                                  <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                                  <span className="mdc-button__label">
                                    <h4> {runner?.back?.[0]?.price} </h4>
                                    <p className="ng-star-inserted">
                                      {runner?.back?.[0]?.size}
                                    </p>
                                  </span>
                                  <span className="mat-mdc-focus-indicator" />
                                  <span className="mat-mdc-button-touch-target" />
                                  <span className="mat-ripple mat-mdc-button-ripple" />
                                </button>
                                <button
                                  onClick={() =>
                                    handleBetSlip(
                                      "lay",
                                      game,
                                      runner,
                                      runner?.lay?.[0]?.price,
                                    )
                                  }
                                  className="mdc-button mdc-button--unelevated mat-mdc-unelevated-button count-value lay-count mat-unthemed mat-mdc-button-base ng-star-inserted"
                                  id="20d49cbbd4a8e0d4ca6ebd4a8929c02c:d9a681ef6dffb8148c2f0f3e1ae433d5lay1"
                                >
                                  <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                                  <span className="mdc-button__label">
                                    <h4> {runner?.lay?.[0]?.price} </h4>
                                    <p className="ng-star-inserted">
                                      {runner?.lay?.[0]?.size}
                                    </p>
                                  </span>
                                  <span className="mat-mdc-focus-indicator" />
                                  <span className="mat-mdc-button-touch-target" />
                                  <span className="mat-ripple mat-mdc-button-ripple" />
                                </button>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </Fragment>
  );
};

export default MatchOdds;
