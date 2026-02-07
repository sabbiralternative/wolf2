import { useRef } from "react";
import { useMyMarketQuery } from "../../../hooks/myMarket";
import useCloseModalClickOutside from "../../../hooks/closeModal";
import { useNavigate } from "react-router-dom";

const MyMarket = ({ setShowMyMarket }) => {
  const navigate = useNavigate();
  const ref = useRef();
  const { data } = useMyMarketQuery();

  const closeModal = () => {
    setShowMyMarket(false);
  };

  useCloseModalClickOutside(ref, () => {
    closeModal();
  });

  const handleNavigate = (item) => {
    navigate(`/event-details/${item?.eventTypeId}/${item?.eventId}`);
  };

  return (
    <div className="cdk-overlay-container">
      <div className="cdk-overlay-backdrop cdk-overlay-dark-backdrop cdk-overlay-backdrop-showing" />
      <div
        className="cdk-global-overlay-wrapper"
        dir="ltr"
        style={{ justifyContent: "center", alignItems: "flex-end" }}
      >
        <div
          id="cdk-overlay-0"
          className="cdk-overlay-pane market-dialog"
          style={{
            width: "100%",
            minHeight: "calc(var(--vh, 1vh) * 50)",
            maxWidth: "500px",
            maxHeight: "calc(var(--vh, 1vh) * 80)",
            position: "static",
            marginBottom: "0px",
          }}
        >
          <div
            tabIndex={0}
            className="cdk-visually-hidden cdk-focus-trap-anchor"
            aria-hidden="true"
          />
          <div
            tabIndex={-1}
            className="mat-mdc-dialog-container mdc-dialog cdk-dialog-container mdc-dialog--open"
            id="mat-mdc-dialog-0"
            role="dialog"
            aria-modal="true"
            style={{ "-matDialogTransitionDuration": "150ms" }}
          >
            <div className="mdc-dialog__container" ref={ref}>
              <div className="mat-mdc-dialog-surface mdc-dialog__surface">
                <div className="ng-star-inserted" style={{ height: "100%" }}>
                  <div className="modal-header">
                    <h2>My Markets (Active Bets)</h2>
                    <button
                      onClick={closeModal}
                      className="modal-close-btn mdc-button mat-mdc-button mat-unthemed mat-mdc-button-base"
                      type="button"
                    >
                      <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                      <div
                        role="img"
                        className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                        aria-hidden="true"
                        data-mat-icon-type="font"
                      >
                        close{" "}
                      </div>
                      <span className="mdc-button__label" />
                      <span className="mat-mdc-focus-indicator" />
                      <span className="mat-mdc-button-touch-target" />
                      <span className="mat-ripple mat-mdc-button-ripple" />
                    </button>
                  </div>
                  <div className="modal-body">
                    <div className="mat-accordion bet-history-accordion">
                      {data?.result?.map((item, i) => {
                        return (
                          <div
                            onClick={() => handleNavigate(item)}
                            key={i}
                            className="header-wrap ng-star-inserted"
                          >
                            <div
                              style={{
                                boxShadow:
                                  "0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)",
                              }}
                              className="mat-expansion-panel ng-tns-c1859850774-1 ng-star-inserted"
                            >
                              <div
                                role="button"
                                className="mat-expansion-panel-header mat-focus-indicator ng-tns-c2690051721-2 ng-tns-c1859850774-1 mat-expansion-toggle-indicator-after ng-star-inserted"
                                id="mat-expansion-panel-header-0"
                                tabIndex={0}
                                aria-controls="cdk-accordion-child-0"
                                aria-expanded="false"
                                aria-disabled="false"
                              >
                                <span className="mat-content ng-tns-c2690051721-2 mat-content-hide-toggle">
                                  <div className="mat-expansion-panel-header-title ng-tns-c2690051721-2">
                                    <h3>{item?.eventName}</h3>
                                  </div>
                                </span>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  {data?.result?.length === 0 && (
                    <div
                      style={{
                        height: "100%",
                        minHeight: "100%",
                        marginTop: "100px",
                      }}
                      className="no-data ng-star-inserted"
                    >
                      <p>No bets placed yet, Place your bet now!</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div
            tabIndex={0}
            className="cdk-visually-hidden cdk-focus-trap-anchor"
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  );
};

export default MyMarket;
