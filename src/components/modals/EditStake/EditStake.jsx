import { useEditButtonValuesMutation } from "../../../redux/features/events/events";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setShowEditStakeModal } from "../../../redux/features/global/globalSlice";

const EditStake = () => {
  const dispatch = useDispatch();
  const [editButtonValue] = useEditButtonValuesMutation();
  const stakes = JSON.parse(localStorage.getItem("buttonValue"));
  const { handleSubmit, register, watch } = useForm({
    defaultValues: {
      buttonGameValues: stakes,
    },
  });

  const buttonGameValues = watch("buttonGameValues");

  const closeModal = () => {
    dispatch(setShowEditStakeModal(false));
  };

  const onSubmit = async () => {
    const payload = {
      game: buttonGameValues?.map((btn) => ({
        label: parseFloat(btn?.value),
        value: parseFloat(btn?.value),
      })),
    };

    const res = await editButtonValue(payload).unwrap();
    if (res.success) {
      toast.success(res?.result?.message);
      localStorage.removeItem("buttonValue");
      const gameButtonsValues = buttonGameValues;
      localStorage.setItem("buttonValue", JSON.stringify(gameButtonsValues));
      closeModal();
    }
  };

  return (
    <div className="cdk-overlay-container" style={{ zIndex: 20000 }}>
      <div className="cdk-overlay-backdrop cdk-overlay-dark-backdrop cdk-overlay-backdrop-showing"></div>
      <div
        className="cdk-global-overlay-wrapper"
        dir="ltr"
        style={{ justifyContent: "center", alignItems: "flex-end" }}
      >
        <div
          id="cdk-overlay-0"
          className="cdk-overlay-pane editstake-dialog"
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
                <div className="ng-star-inserted">
                  <div className="editstake-modal">
                    <div className="modal-header">
                      <h2>Edit Stake</h2>
                      <div className="action-btns">
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
                            close
                          </div>
                          <span className="mdc-button__label" />
                          <span className="mat-mdc-focus-indicator" />
                          <span className="mat-mdc-button-touch-target" />
                          <span className="mat-ripple mat-mdc-button-ripple" />
                        </button>
                      </div>
                    </div>
                    <div className="modal-body">
                      <form
                        noValidate
                        autoComplete="off"
                        className="ng-untouched ng-pristine ng-valid"
                        onSubmit={handleSubmit(onSubmit)}
                      >
                        <div className="editvalue-wrap">
                          <p className="input-msg">
                            {" "}
                            Please fill all required fields (*){" "}
                          </p>
                          <div className="amt-chip-grid">
                            {stakes?.map((_, idx) => {
                              return (
                                <input
                                  key={idx}
                                  {...register(`buttonGameValues.${idx}.value`)}
                                  type="number"
                                  className="chip-grid-item ng-untouched ng-pristine ng-valid"
                                  required
                                />
                              );
                            })}
                          </div>

                          <div className="action-btns">
                            <button
                              onClick={closeModal}
                              className="cancel-btn mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base"
                              type="button"
                            >
                              <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                              <span className="mdc-button__label">Cancel</span>
                              <span className="mat-mdc-focus-indicator" />
                              <span className="mat-mdc-button-touch-target" />
                              <span className="mat-ripple mat-mdc-button-ripple" />
                            </button>
                            <button
                              type="submit"
                              className="save-btn mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base"
                            >
                              <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                              <span className="mdc-button__label">Save</span>
                              <span className="mat-mdc-focus-indicator" />
                              <span className="mat-mdc-button-touch-target" />
                            </button>
                          </div>
                        </div>
                      </form>
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

export default EditStake;
