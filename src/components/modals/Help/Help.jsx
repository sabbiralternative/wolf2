import { useDispatch } from "react-redux";
import { Settings } from "../../../api";
import { setShowHelpModal } from "../../../redux/features/global/globalSlice";
import ModalWrapper from "../ModalWrapper/ModalWrapper";

const Help = () => {
  const dispatch = useDispatch();
  const navigateWhatsApp = () => {
    window.open(Settings.branchWhatsapplink || Settings.whatsapplink);
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
          id="cdk-overlay-2"
          className="cdk-overlay-pane help-dialog"
          style={{
            width: "calc(100% - 20px)",
            maxWidth: "500px",
            position: "static",
            marginBottom: "10px",
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
            style={{ "--mat-dialog-transition-duration": "150ms" }}
            id="mat-mdc-dialog-2"
            role="dialog"
            aria-modal="true"
          >
            <div className="mdc-dialog__container">
              <div className="mat-mdc-dialog-surface mdc-dialog__surface">
                <ModalWrapper setModal={setShowHelpModal} redux={true}>
                  <div className="ng-star-inserted">
                    <div className="help-modal">
                      <div className="modal-header">
                        <h2>Need Help! Feel free to contact.</h2>
                        <button
                          onClick={() => dispatch(setShowHelpModal(false))}
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
                        <div className="help-page-wrap">
                          <button
                            onClick={navigateWhatsApp}
                            type="button"
                            className="btn secondary-btn ng-star-inserted"
                          >
                            {" "}
                            Chat with us on{" "}
                            <img
                              alt="WhatsApp Icon"
                              src="https://ss.manage63.com/bmk-wl/commonAssets/whatsapp-icon.svg"
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </ModalWrapper>
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

export default Help;
