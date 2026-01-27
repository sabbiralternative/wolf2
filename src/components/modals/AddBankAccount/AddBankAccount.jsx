import { useDispatch } from "react-redux";
import ModalWrapper from "../ModalWrapper/ModalWrapper";
import { setAddBank } from "../../../redux/features/global/globalSlice";

const AddBankAccount = () => {
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(setAddBank(false));
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
          className="cdk-overlay-pane add-bank-dialog"
          style={{
            width: "100%",
            maxWidth: "500px",
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
            <div className="mdc-dialog__container">
              <div className="mat-mdc-dialog-surface mdc-dialog__surface">
                <ModalWrapper setModal={setAddBank} redux={true}>
                  <div className="ng-star-inserted">
                    <div className="add-bank-modal">
                      <div className="modal-header">
                        <h2>Add new bank account</h2>
                        <button
                          onClick={closeModal}
                          className="modal-close-btn mdc-button mat-mdc-button mat-unthemed mat-mdc-button-base"
                        >
                          <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                          <div
                            role="img"
                            className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                            aria-hidden="true"
                            data-mat-icon-type="font"
                          >
                            {" "}
                            close{" "}
                          </div>
                          <span className="mdc-button__label" />
                          <span className="mat-mdc-focus-indicator" />
                          <span className="mat-mdc-button-touch-target" />
                          <span className="mat-ripple mat-mdc-button-ripple" />
                        </button>
                      </div>
                      <form
                        noValidate
                        className="ng-untouched ng-pristine ng-invalid"
                      >
                        <div className="modal-body">
                          <div className="form-wrap">
                            <div className="input-wrap ng-star-inserted">
                              <label>Account holder name*</label>
                              <input
                                placeholder="Enter account holder name"
                                type="text"
                                maxLength={30}
                                className="ng-untouched ng-pristine ng-invalid"
                              />
                            </div>
                            <div className="input-wrap ng-star-inserted">
                              <label>Account number*</label>
                              <input
                                placeholder="Enter Account Number"
                                type="tel"
                                maxLength={30}
                                className="ng-untouched ng-pristine ng-invalid"
                              />
                            </div>
                            <div className="input-wrap ng-star-inserted">
                              <label>IFSC code*</label>
                              <div className="field_wrap">
                                <input
                                  placeholder="Enter bank iFSC"
                                  type="text"
                                  maxLength={11}
                                  className="ifsc-input ng-untouched ng-pristine ng-invalid"
                                />
                              </div>
                            </div>

                            <div className="address-wrap ng-star-inserted"></div>
                          </div>
                        </div>
                        <div className="modal-footer">
                          <button
                            type="submit"
                            className="btn secondary-btn mdc-button mat-mdc-button mat-unthemed mat-mdc-button-base"
                            disabled="true"
                          >
                            <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                            <span className="mdc-button__label"> Submit </span>
                            <span className="mat-mdc-focus-indicator" />
                            <span className="mat-mdc-button-touch-target" />
                          </button>
                        </div>
                      </form>
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

export default AddBankAccount;
