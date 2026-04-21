import { useState } from "react";
import { useChangePasswordMutation } from "../../../redux/features/auth/authApi";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import ModalWrapper from "../ModalWrapper/ModalWrapper";
import { useDispatch } from "react-redux";
import { setShowChangePasswordModal } from "../../../redux/features/global/globalSlice";

const ChangePassword = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPass, setShowNewPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const [handleChangePassword] = useChangePasswordMutation();
  const { register, handleSubmit } = useForm();

  const closeModal = () => {
    dispatch(setShowChangePasswordModal(false));
  };

  const onSubmit = async ({ password, newPassword, newPasswordConfirm }) => {
    const payload = {
      oldPassword: password,
      password: newPassword,
      passVerify: newPasswordConfirm,
      nonce: crypto.randomUUID(),
    };

    const res = await handleChangePassword(payload).unwrap();
    if (res.success) {
      localStorage.removeItem("changePassword");
      toast.success(res?.result?.message);
      closeModal();
    } else {
      toast.error(res?.error?.errorMessage);
    }
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
          className="cdk-overlay-pane change-password-dialog"
          style={{
            width: "100%",
            minHeight: "395px",
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
            style={{ "-mat-dialog-transition-duration": "150ms" }}
          >
            <div className="mdc-dialog__container">
              <div className="mat-mdc-dialog-surface mdc-dialog__surface">
                <ModalWrapper setModal={setShowChangePasswordModal} redux>
                  <div className="ng-star-inserted">
                    <div className="change-password-modal">
                      <div className="modal-header">
                        <h2>Change Password</h2>
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
                      <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="ng-pristine ng-invalid ng-touched"
                      >
                        <div className="modal-body">
                          <div className="form-wrap">
                            <div className="input-wrap">
                              <label>Old Password*</label>
                              <input
                                {...register("password", { required: true })}
                                placeholder="Enter Old Password"
                                type={!showPassword ? "password" : "text"}
                                className="ng-untouched ng-pristine ng-invalid"
                              />
                              <div
                                onClick={() => setShowPassword((prev) => !prev)}
                                role="img"
                                className="mat-icon notranslate material-icons pass-eye-icon mat-ligature-font mat-icon-no-color"
                                aria-hidden="true"
                                data-mat-icon-type="font"
                              >
                                visibility
                              </div>
                            </div>
                            <div className="input-wrap">
                              <label>New Password*</label>
                              <input
                                {...register("newPassword", {
                                  required: true,
                                })}
                                placeholder="Enter New password"
                                type={!showNewPass ? "password" : "text"}
                                className="ng-untouched ng-pristine ng-invalid"
                              />
                              <div
                                onClick={() => setShowNewPass((prev) => !prev)}
                                role="img"
                                className="mat-icon notranslate material-icons pass-eye-icon mat-ligature-font mat-icon-no-color"
                                aria-hidden="true"
                                data-mat-icon-type="font"
                              >
                                visibility
                              </div>
                            </div>
                            <div className="input-wrap">
                              <label>Confirm New Password</label>
                              <input
                                {...register("newPasswordConfirm", {
                                  required: true,
                                })}
                                type={!showConfirmPass ? "password" : "text"}
                                autoComplete="new-password"
                                placeholder="Confirm New password"
                                className="mat-mdc-input-element otp-field ng-pristine ng-invalid cdk-text-field-autofill-monitored ng-touched"
                                id="mat-input-0"
                                required
                                aria-required="true"
                              />{" "}
                              <div
                                onClick={() =>
                                  setShowConfirmPass((prev) => !prev)
                                }
                                role="img"
                                className="mat-icon notranslate material-icons pass-eye-icon mat-ligature-font mat-icon-no-color"
                                aria-hidden="true"
                                data-mat-icon-type="font"
                              >
                                visibility
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="modal-footer">
                          <button
                            type="submit"
                            className="btn secondary-btn mdc-button mat-mdc-button mat-unthemed mat-mdc-button-base"
                          >
                            <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                            <span className="mdc-button__label">
                              {" "}
                              Change Password
                            </span>
                            <span className="mat-mdc-focus-indicator" />
                            <span className="mat-mdc-button-touch-target" />
                            <span className="mat-ripple mat-mdc-button-ripple" />
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

export default ChangePassword;
