import { useSingleProfitLoss } from "../../../hooks/settledBets";
import ModalWrapper from "../ModalWrapper/ModalWrapper";

const SingleProfitLoss = ({ setMarketId, marketId }) => {
  const { data } = useSingleProfitLoss(marketId);

  const closeModal = () => {
    setMarketId(null);
  };

  return (
    <div className="cdk-overlay-container" style={{ zIndex: 2000 }}>
      <div className="cdk-overlay-backdrop cdk-overlay-dark-backdrop cdk-overlay-backdrop-showing"></div>
      <div
        className="cdk-global-overlay-wrapper"
        dir="ltr"
        style={{ justifyContent: "center", alignItems: "flex-end" }}
      >
        <div
          id="cdk-overlay-0"
          className="cdk-overlay-pane txn-detail-dialog"
          style={{
            width: "100%",
            maxWidth: "500px",
            maxHeight: "calc(var(--vh, 1vh) * 100 - 145px)",
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
            style={{ "--mat-dialog-transition-duration": "150ms" }}
          >
            <ModalWrapper setModal={setMarketId}>
              <div className="mdc-dialog__container">
                <div className="mat-mdc-dialog-surface mdc-dialog__surface">
                  <div className="ng-star-inserted">
                    <div className="txn-detail-modal">
                      <div className="modal-header">
                        <button
                          onClick={closeModal}
                          className="modal-back-btn mdc-button mat-mdc-button mat-unthemed mat-mdc-button-base"
                          type="button"
                        >
                          <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                          <div
                            role="img"
                            className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                            aria-hidden="true"
                            data-mat-icon-type="font"
                          >
                            arrow_back{" "}
                          </div>
                          <span className="mdc-button__label" />
                          <span className="mat-mdc-focus-indicator" />
                          <span className="mat-mdc-button-touch-target" />
                          <span className="mat-ripple mat-mdc-button-ripple" />
                        </button>
                        <h2>
                          {data?.result?.[0]?.sports} /{" "}
                          {data?.result?.[0]?.eventName}
                        </h2>
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
                        </button>
                      </div>
                      <div className="modal-body">
                        <div className="txn-tbl">
                          <div className="header-wrap">
                            <ul className="tbl-head">
                              <li>Selection</li>
                              <li>Rate</li>
                              <li>Amount</li>
                              <li>W/L</li>
                            </ul>
                          </div>
                          <div className="body-wrap">
                            {data?.result?.map((item, index) => (
                              <ul
                                key={index}
                                className={`${item?.betType?.toLowerCase()} ng-star-inserted`}
                              >
                                <li>{item?.nation}</li>
                                <li>{item?.userRate}</li>
                                <li>{item?.amount}</li>
                                <li
                                  className={` ng-star-inserted ${item?.win > 0 ? "success-text" : "danger-text"}`}
                                >
                                  {item?.win}
                                </li>
                              </ul>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ModalWrapper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProfitLoss;
