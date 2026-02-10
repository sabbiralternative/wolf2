import { useState } from "react";
import { useCurrentBets } from "../../hooks/currentBets";

const ActiveBets = () => {
  const [activeEventName, setActiveEventName] = useState(null);
  const { data } = useCurrentBets();

  const categoryByEvent = Array.from(
    new Set(data?.map((item) => item?.eventName)),
  );

  const handleEventName = (name) => {
    if (name === activeEventName) {
      setActiveEventName(null);
    } else {
      setActiveEventName(name);
    }
  };
  return (
    <div className="page-body">
      <div className="passbook-page-wrap">
        <div
          className="mat-mdc-tab-group passbook-tabs-group mat-primary mat-mdc-tab-group-stretch-tabs"
          style={{ "--mat-tab-animation-duration": "0ms" }}
        >
          <div className="mat-mdc-tab-body-wrapper">
            <div
              role="tabpanel"
              className="mat-mdc-tab-body ng-tns-c737557735-8 mat-mdc-tab-body-active ng-star-inserted"
              id="mat-tab-content-0-1"
              aria-labelledby="mat-tab-label-0-1"
              aria-hidden="false"
            >
              <div
                className="mat-mdc-tab-body-content ng-tns-c737557735-8 ng-trigger ng-trigger-translateTab"
                style={{ transform: "none" }}
              >
                <div className="ng-star-inserted" style={{}}>
                  <div
                    role="main"
                    className="md content-ltr hydrated"
                    style={{ "--offset-top": "0px", "--offset-bottom": "0px" }}
                  >
                    <div
                      slot="fixed"
                      className="md refresher-md hydrated refresher-native"
                    >
                      <div className="md hydrated">
                        <div className="refresher-pulling">
                          <div className="refresher-pulling-icon">
                            <div className="spinner-arrow-container">
                              <div className="arrow-container">
                                <div
                                  aria-hidden="true"
                                  role="img"
                                  className="md hydrated"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="refresher-refreshing">
                          <div className="refresher-refreshing-icon"></div>
                        </div>
                      </div>
                    </div>
                    <div className="cricket-bets-wrap">
                      <div
                        className="mat-mdc-tab-group betstatement-tabs mat-primary mat-mdc-tab-group-stretch-tabs"
                        style={{ "--mat-tab-animation-duration": "0ms" }}
                      >
                        <div className="mat-mdc-tab-body-wrapper" style={{}}>
                          <div
                            role="tabpanel"
                            className="mat-mdc-tab-body ng-tns-c737557735-14 ng-star-inserted"
                            id="mat-tab-content-1-0"
                            aria-labelledby="mat-tab-label-1-0"
                            aria-hidden="true"
                          >
                            <div
                              className="mat-mdc-tab-body-content ng-tns-c737557735-14 ng-trigger ng-trigger-translateTab"
                              style={{
                                transform: "translate3d(-100%, 0px, 0px)",
                                minHeight: "1px",
                                visibility: "hidden",
                              }}
                            ></div>
                          </div>
                          <div
                            role="tabpanel"
                            className="mat-mdc-tab-body ng-tns-c737557735-15 ng-star-inserted mat-mdc-tab-body-active"
                            id="mat-tab-content-1-1"
                            aria-labelledby="mat-tab-label-1-1"
                            aria-hidden="false"
                          >
                            <div
                              className="mat-mdc-tab-body-content ng-tns-c737557735-15 ng-trigger ng-trigger-translateTab"
                              style={{ transform: "none" }}
                            >
                              <div className="bet-statement ng-star-inserted">
                                <div className="top-filter">
                                  <div className="title">
                                    <h3>Bet History</h3>
                                  </div>
                                </div>
                                <div className="betslip-card ng-star-inserted">
                                  <div className="betslip-data-wrap ng-star-inserted">
                                    <div className="betslip-title">
                                      <h3>Event</h3>
                                      <div className="odds-stake-wrap">
                                        <h3>Odds</h3>
                                        <h3>Stake</h3>
                                      </div>
                                    </div>
                                    {data?.length > 0 &&
                                      categoryByEvent?.map((eventName) => {
                                        const filteredData = data?.filter(
                                          (item) =>
                                            item?.eventName === eventName,
                                        );
                                        return (
                                          <div
                                            style={{ marginTop: "5px" }}
                                            onClick={() =>
                                              handleEventName(eventName)
                                            }
                                            key={eventName}
                                            className="mat-accordion bet-history-accordion ng-star-inserted"
                                          >
                                            <div
                                              style={{ boxShadow: "none" }}
                                              className="mat-expansion-panel ng-tns-c1859850774-22 ng-star-inserted mat-expanded mat-expansion-panel-spacing"
                                            >
                                              <div
                                                role="button"
                                                className="mat-expansion-panel-header mat-focus-indicator ng-tns-c2690051721-23 ng-tns-c1859850774-22 mat-expansion-toggle-indicator-after ng-star-inserted mat-expanded"
                                                id="mat-expansion-panel-header-1"
                                                tabIndex={0}
                                                aria-controls="cdk-accordion-child-1"
                                                aria-expanded="true"
                                                aria-disabled="false"
                                              >
                                                <span className="mat-content ng-tns-c2690051721-23 mat-content-hide-toggle">
                                                  <div className="mat-expansion-panel-header-title ng-tns-c2690051721-23">
                                                    <h3>{eventName}</h3>
                                                  </div>
                                                  <div className="mat-expansion-panel-header-description ng-tns-c2690051721-23">
                                                    {eventName ===
                                                    activeEventName ? (
                                                      <div
                                                        role="img"
                                                        className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color ng-star-inserted"
                                                        aria-hidden="true"
                                                        data-mat-icon-type="font"
                                                        style={{}}
                                                      >
                                                        arrow_drop_down
                                                      </div>
                                                    ) : (
                                                      <div
                                                        role="img"
                                                        className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color ng-star-inserted"
                                                        aria-hidden="true"
                                                        data-mat-icon-type="font"
                                                        style={{}}
                                                      >
                                                        arrow_right
                                                      </div>
                                                    )}
                                                  </div>
                                                </span>
                                              </div>
                                              {eventName ===
                                                activeEventName && (
                                                <div
                                                  role="region"
                                                  className="mat-expansion-panel-content ng-tns-c1859850774-22 ng-trigger ng-trigger-bodyExpansion"
                                                  id="cdk-accordion-child-1"
                                                  aria-labelledby="mat-expansion-panel-header-1"
                                                  style={{}}
                                                >
                                                  <div className="mat-expansion-panel-body ng-tns-c1859850774-22">
                                                    <div className="betslip-databody ng-tns-c1859850774-22">
                                                      {filteredData?.map(
                                                        (item, index) => {
                                                          return (
                                                            <div
                                                              key={index}
                                                              className={`betslip-datalist ${item?.betType === "Back" ? "forback" : "forlay"} ng-star-inserted`}
                                                              style={{}}
                                                            >
                                                              <div className="bs-gameinfo">
                                                                <div className="game-type">
                                                                  <p className="icon-bookmaker">
                                                                    {item?.sports?.charAt(
                                                                      0,
                                                                    )}
                                                                  </p>
                                                                </div>
                                                                <div className="bs-content">
                                                                  <h3>
                                                                    {
                                                                      item?.nation
                                                                    }
                                                                  </h3>
                                                                  <p className="game-title ng-star-inserted">
                                                                    <span className="ng-star-inserted">
                                                                      {
                                                                        item?.title
                                                                      }
                                                                    </span>
                                                                  </p>
                                                                </div>
                                                              </div>
                                                              <div className="odds-stake-wrap">
                                                                <h3>
                                                                  {
                                                                    item?.userRate
                                                                  }
                                                                </h3>
                                                                <h3>
                                                                  {item?.amount}
                                                                </h3>
                                                              </div>
                                                            </div>
                                                          );
                                                        },
                                                      )}
                                                    </div>
                                                  </div>
                                                </div>
                                              )}
                                            </div>
                                          </div>
                                        );
                                      })}

                                    {data?.length === 0 && (
                                      <div
                                        style={{
                                          display: "flex",
                                          alignItems: "center",
                                          justifyContent: "center",
                                          color: "#4e4e4e",
                                          fontSize: "12px",
                                          marginTop: "50px",
                                        }}
                                      >
                                        No bets placed yet, Place your bet now!
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActiveBets;
