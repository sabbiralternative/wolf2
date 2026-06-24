import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useRegisterMutation } from "../../../redux/features/auth/authApi";
import { useLogo } from "../../../context/ApiProvider";
import useCloseModalClickOutside from "../../../hooks/closeModal";
import {
  setShowBanner,
  setShowRegisterModal,
} from "../../../redux/features/global/globalSlice";
import { useForm } from "react-hook-form";
import { Settings } from "../../../api";

import toast from "react-hot-toast";
import { setUser } from "../../../redux/features/auth/authSlice";
import { useLanguage } from "../../../context/LanguageProvider";
import { languageValue } from "../../../utils/language";
import { LanguageKey } from "../../../const";
const RegisterFields = ({ mobile, order }) => {
  const { valueByLanguage } = useLanguage();
  const affnook_token = localStorage.getItem("affnook_token");
  const referralCode = localStorage.getItem("referralCode");
  const [handleRegister] = useRegisterMutation();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const { logo } = useLogo();
  const ref = useRef();
  useCloseModalClickOutside(ref, () => {
    closeModal();
  });

  const onSubmit = async (data) => {
    const registerData = {
      username: "",
      password: data?.password,
      confirmPassword: data?.confirmPassword,
      mobile: mobile,
      otp: data.otp,
      isOtpAvailable: Settings.otp,
      referralCode: referralCode || data?.referralCode,
      orderId: order.orderId,
      orderMethod: order.otpMethod,
      affnook_token: affnook_token || null,
    };

    const result = await handleRegister(registerData).unwrap();

    if (result.success) {
      if (window?.fbq) {
        window.fbq("track", "CompleteRegistration", {
          content_name: "User Signup",
          status: "success",
        });
      }
      localStorage.removeItem("referralCode");
      const token = result?.result?.token;
      const bonusToken = result?.result?.bonusToken;
      const user = result?.result?.loginName;
      const memberId = result?.result?.memberId;
      const game = result?.result?.buttonValue?.game;
      const banner = result?.result?.banner;
      dispatch(setUser({ user, token, memberId }));
      localStorage.setItem("buttonValue", JSON.stringify(game));
      localStorage.setItem("bonusToken", bonusToken);
      localStorage.setItem("token", token);
      if (banner) {
        localStorage.setItem("banner", banner);
        dispatch(setShowBanner(true));
      }
      if (token && user) {
        dispatch(setShowRegisterModal(false));
        toast.success("Register successful");
      }
    } else {
      toast.error(result?.error?.description);
    }
  };

  const closeModal = () => {
    dispatch(setShowRegisterModal(false));
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
          className="cdk-overlay-pane login-dialog"
          style={{
            width: "100%",
            minHeight: "320px",
            maxWidth: "500px",
            position: "static",
            marginBottom: "20px",
          }}
        >
          <div
            tabIndex={0}
            className="cdk-visually-hidden cdk-focus-trap-anchor"
            aria-hidden="true"
          />
          <div
            ref={ref}
            tabIndex={-1}
            className="mat-mdc-dialog-container mdc-dialog cdk-dialog-container mdc-dialog--open"
            id="LoginComponent"
            role="dialog"
            aria-modal="true"
            style={{ "--mat-dialog-transition-duration": "150ms" }}
          >
            <div className="mdc-dialog__container">
              <div className="mat-mdc-dialog-surface mdc-dialog__surface">
                <div className="ng-star-inserted">
                  <div className="main">
                    <div
                      className="container login-section"
                      style={{
                        backgroundImage:
                          'url("https://ss.manage63.com/bmk-wl/wl/wolf365/img/login-pattern.png")',
                      }}
                    >
                      <div className="login-header-section">
                        <div className="logo">
                          <img
                            alt="logo"
                            src={logo}
                            className="ng-star-inserted"
                          />
                        </div>
                        <div className="welcome-text">
                          <h2 className="notranslate">
                            Enter verification code{" "}
                          </h2>
                        </div>
                        <button
                          onClick={closeModal}
                          color="primary"
                          aria-label="Login Dialog Close Button"
                          className="close-btn mdc-fab mdc-fab--mini mat-mdc-mini-fab mat-primary mat-mdc-button-base"
                          type="button"
                        >
                          <span className="mat-mdc-button-persistent-ripple mdc-fab__ripple" />
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
                      <div className="body-section ng-star-inserted">
                        <form
                          onSubmit={handleSubmit(onSubmit)}
                          className="ng-untouched ng-pristine ng-invalid"
                        >
                          <div className="login-form">
                            <div className="form-item">
                              <p className="form-label">
                                We have sent code to {mobile}
                              </p>
                              <div className="input-container">
                                <input
                                  {...register("otp", { required: true })}
                                  type="text"
                                  placeholder="Enter OTP"
                                />
                              </div>
                            </div>
                            <div className="form-item">
                              <p className="form-label">Password</p>
                              <div className="input-container">
                                <input
                                  {...register("password", { required: true })}
                                  type="text"
                                  placeholder="Enter Password"
                                />
                              </div>
                            </div>
                            <div className="form-item">
                              <p className="form-label">Confirm Password</p>
                              <div className="input-container">
                                <input
                                  {...register("confirmPassword", {
                                    required: true,
                                  })}
                                  type="text"
                                  placeholder="Enter Confirm Password"
                                />
                              </div>
                            </div>
                            <div className="form-item">
                              <p className="form-label">
                                Referral Code (Optional)
                              </p>
                              <div className="input-container">
                                <input
                                  readOnly={referralCode}
                                  {...register("referralCode")}
                                  type="text"
                                  placeholder="Enter Referral Code"
                                />
                              </div>
                            </div>

                            <div className="form-btn">
                              <div className="otpBTNs">
                                <button
                                  type="submit"
                                  className="btn secondary-btn ng-star-inserted"
                                >
                                  {languageValue(
                                    valueByLanguage,
                                    LanguageKey.REGISTER,
                                  )}
                                </button>
                              </div>
                            </div>
                          </div>
                        </form>
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

export default RegisterFields;
