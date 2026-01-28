const OpenBets = ({ currentBets }) => {
  return (
    <div className="mat-mdc-tab-body-wrapper" style={{}}>
      <div
        role="tabpanel"
        className="mat-mdc-tab-body ng-tns-c737557735-2 ng-star-inserted mat-mdc-tab-body-active"
        id="mat-tab-content-0-1"
        aria-labelledby="mat-tab-label-0-1"
        aria-hidden="false"
      >
        <div
          className="mat-mdc-tab-body-content ng-tns-c737557735-2 ng-trigger ng-trigger-translateTab"
          style={{ transform: "none" }}
        >
          <div
            className="mat-tab-group mat-mdc-tab-group bethistory-tabs mat-primary mat-mdc-tab-group-stretch-tabs ng-star-inserted"
            style={{ "-matTabAnimationDuration": "0ms" }}
          >
            <div className="mat-mdc-tab-body-wrapper" style={{}}>
              <div
                role="tabpanel"
                className="mat-mdc-tab-body ng-tns-c737557735-5 ng-star-inserted mat-mdc-tab-body-active"
                id="mat-tab-content-1-0"
                aria-labelledby="mat-tab-label-1-0"
                aria-hidden="false"
              >
                <div
                  className="mat-mdc-tab-body-content ng-tns-c737557735-5 ng-trigger ng-trigger-translateTab"
                  style={{ transform: "none" }}
                >
                  <div
                    id="betSlipAcc"
                    className="card-accordion card-outer betslip-card matched-unmatched ng-star-inserted"
                    style={{}}
                  >
                    <div className="card-body">
                      <div className="betslip-data-wrap">
                        <div className="betslip-title">
                          <h3>Matched Bets</h3>
                          <div className="odds-stake-wrap">
                            <h3>Odds</h3>
                            <h3>Stake</h3>
                          </div>
                        </div>
                        <div className="betslip-databody lfBets">
                          {currentBets?.map((bet) => {
                            return (
                              <div
                                key={bet?.betId}
                                className={`${bet?.betType === "Back" ? "back-unmatched" : "lay-unmatched"} row-wrap ng-star-inserted`}
                              >
                                <div
                                  className={`betslip-datalist  ${bet?.betType === "Back" ? "back-list-row" : "lay-list-row"}`}
                                >
                                  <div className="bs-gameinfo">
                                    <div className="game-type">
                                      <p className="icon-bookmaker ng-star-inserted">
                                        O{" "}
                                      </p>
                                    </div>
                                    <div className="bs-content">
                                      <h3>{bet?.eventName}</h3>
                                      <h3 className="ng-star-inserted">
                                        {bet?.marketName}
                                      </h3>
                                      <p>{bet?.placeDate}</p>
                                    </div>
                                  </div>
                                  <div className="odds-stake-wrap">
                                    <h3>{bet?.userRate}</h3>
                                    <h3>{bet?.amount}</h3>
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
              </div>
              <div
                role="tabpanel"
                className="mat-mdc-tab-body ng-tns-c737557735-6 ng-star-inserted"
                id="mat-tab-content-1-1"
                aria-labelledby="mat-tab-label-1-1"
                aria-hidden="true"
              >
                <div
                  className="mat-mdc-tab-body-content ng-tns-c737557735-6 ng-trigger ng-trigger-translateTab"
                  style={{
                    transform: "translate3d(100%, 0px, 0px)",
                    minHeight: "1px",
                    visibility: "hidden",
                  }}
                ></div>
              </div>
              <div
                role="tabpanel"
                className="mat-mdc-tab-body ng-tns-c737557735-7 ng-star-inserted"
                id="mat-tab-content-1-2"
                aria-labelledby="mat-tab-label-1-2"
                aria-hidden="true"
              >
                <div
                  className="mat-mdc-tab-body-content ng-tns-c737557735-7 ng-trigger ng-trigger-translateTab"
                  style={{
                    transform: "translate3d(100%, 0px, 0px)",
                    minHeight: "1px",
                    visibility: "hidden",
                  }}
                ></div>
              </div>
            </div>
          </div>
          <div className="shiftBetCont ng-star-inserted" style={{}}>
            <div className="betDialog"></div>
            <div className="footerbtn"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenBets;
