import { useRef } from "react";
import useCloseModalClickOutside from "../../../hooks/closeModal";

const ImagePreview = ({ image, setImage }) => {
  const ref = useRef();

  const closeModal = () => {
    setImage(null);
  };

  useCloseModalClickOutside(ref, () => {
    closeModal();
  });

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
                    <h2>Image Preview</h2>
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
                      <img
                        style={{ height: "100%", maxHeight: "400px" }}
                        src={image}
                        alt=""
                      />
                    </div>
                  </div>
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

export default ImagePreview;
