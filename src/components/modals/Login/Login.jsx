import { HiArrowNarrowDown } from "react-icons/hi";
import { GrAndroid } from "react-icons/gr";
import { Fragment, useRef } from "react";
import { useDispatch } from "react-redux";
import { useLoginMutation } from "../../../redux/features/auth/authApi";
import { useLogo } from "../../../context/ApiProvider";
import useCloseModalClickOutside from "../../../hooks/closeModal";
import {
  setShowBanner,
  setShowChangePasswordModal,
  setShowForgotPasswordModal,
  setShowLoginModal,
} from "../../../redux/features/global/globalSlice";
import { useForm } from "react-hook-form";
import { Settings } from "../../../api";
import { setUser } from "../../../redux/features/auth/authSlice";
import toast from "react-hot-toast";
const Login = () => {
  const closePopupForForever = localStorage.getItem("closePopupForForever");
  const { logo } = useLogo();
  const dispatch = useDispatch();
  const [handleLogin] = useLoginMutation();
  const ref = useRef();
  useCloseModalClickOutside(ref, () => {
    dispatch(setShowLoginModal(false));
  });
  const { register, handleSubmit } = useForm();

  const onSubmit = async ({ username, password }) => {
    const loginData = {
      username: username,
      password: password,
      b2c: Settings.b2c,
      apk: closePopupForForever ? true : false,
      nonce: crypto.randomUUID(),
    };
    const result = await handleLogin(loginData).unwrap();

    if (result.success) {
      const token = result?.result?.token;
      const bonusToken = result?.result?.bonusToken;
      const user = result?.result?.loginName;
      const game = result?.result?.buttonValue?.game;
      const memberId = result?.result?.memberId;
      const banner = result?.result?.banner;

      dispatch(setUser({ user, token, memberId }));
      localStorage.setItem("memberId", memberId);
      localStorage.setItem("buttonValue", JSON.stringify(game));
      localStorage.setItem("token", token);
      localStorage.setItem("bonusToken", bonusToken);
      if (banner) {
        localStorage.setItem("banner", banner);
        dispatch(setShowBanner(true));
      }
      if (result?.result?.changePassword) {
        dispatch(setShowLoginModal(false));
        localStorage.setItem("changePassword", true);
        dispatch(setShowChangePasswordModal(true));
      }
      if (!result?.result?.changePassword && token && user) {
        dispatch(setShowLoginModal(false));
        toast.success("Login successful");
      }
    } else {
      toast.error(result?.error);
    }
  };

  /* handle login demo user */
  const loginWithDemo = async () => {
    /* Random token generator */
    /* Encrypted the post data */
    const loginData = {
      username: "demo",
      password: "",
      b2c: Settings.b2c,
      apk: closePopupForForever ? true : false,
      nonce: crypto.randomUUID(),
    };
    const result = await handleLogin(loginData).unwrap();

    if (result.success) {
      const token = result?.result?.token;
      const bonusToken = result?.result?.bonusToken;
      const user = result?.result?.loginName;
      const game = result?.result?.buttonValue?.game;
      const banner = result?.result?.banner;

      dispatch(setUser({ user, token }));
      localStorage.setItem("buttonValue", JSON.stringify(game));
      localStorage.setItem("token", token);

      localStorage.setItem("bonusToken", bonusToken);
      if (banner) {
        localStorage.setItem("banner", banner);
        dispatch(setShowBanner(true));
      }
      if (token && user) {
        dispatch(setShowLoginModal(false));
        toast.success("Login successful");
      }
    } else {
      toast.error(result?.error);
    }
  };

  const closeLoginModal = () => {
    dispatch(setShowLoginModal(false));
  };

  const showForgotPassword = () => {
    closeLoginModal();
    dispatch(setShowForgotPasswordModal(true));
  };

  const handleDownload = (e) => {
    e.preventDefault();
    const fileUrl = Settings.apk_link;
    const link = document.createElement("a");
    link.href = fileUrl;
    link.setAttribute("download", "site.apk");
    document.body.appendChild(link);
    link.click();
    link.parentNode.removeChild(link);
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
            style={{
              "--mat-dialog-transition-duration": "150ms",
            }}
          >
            <div className="mdc-dialog__container">
              <div
                className="mat-mdc-dialog-surface mdc-dialog__surface"
                style={{
                  paddingBottom: "20px",
                }}
              >
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
                          <h2 className="notranslate">Login </h2>
                        </div>
                        <button
                          onClick={closeLoginModal}
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
                                User Id / Mobile Number
                              </p>
                              <div className="input-container">
                                <input
                                  {...register("username", { required: true })}
                                  type="text"
                                  placeholder="Enter User Id / Mobile Number"
                                />
                              </div>
                            </div>
                            <div className="form-item">
                              <p className="form-label">Password</p>
                              <div
                                className="input-container"
                                style={{ marginBottom: "0px" }}
                              >
                                <input
                                  {...register("password", { required: true })}
                                  type="text"
                                  placeholder="Enter Password"
                                />
                              </div>
                              <p
                                onClick={showForgotPassword}
                                style={{
                                  color: "white",
                                  width: "100%",
                                  textAlign: "end",
                                  marginBottom: "10px",
                                  marginTop: "0px",
                                  fontSize: "12px",
                                  textDecoration: "underline",
                                  cursor: "pointer",
                                }}
                              >
                                Forgot Password?
                              </p>
                            </div>

                            <div className="form-btn">
                              <div className="otpBTNs">
                                <button
                                  type="submit"
                                  className="btn secondary-btn ng-star-inserted"
                                >
                                  Login
                                </button>
                              </div>
                              {(Settings.demo_login || Settings.apk_link) && (
                                <Fragment>
                                  <p className="separator ng-star-inserted">
                                    OR
                                  </p>

                                  <div className="extra-btns">
                                    {Settings.demo_login && (
                                      <button
                                        onClick={loginWithDemo}
                                        type="button"
                                        className="btn secondary-btn ng-star-inserted"
                                      >
                                        Login with Demo ID
                                      </button>
                                    )}

                                    {Settings.apk_link && (
                                      <button
                                        onClick={handleDownload}
                                        type="button"
                                        className="btn secondary-btn ng-star-inserted"
                                      >
                                        <GrAndroid /> Download .apk
                                        <HiArrowNarrowDown />
                                      </button>
                                    )}
                                  </div>
                                </Fragment>
                              )}
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

export default Login;
