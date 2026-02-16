import { useRef } from "react";
import { useLogo } from "../../../context/ApiProvider";
import { useDispatch } from "react-redux";
import useCloseModalClickOutside from "../../../hooks/closeModal";
import { AxiosSecure } from "../../../lib/AxiosSecure";
import { API, Settings } from "../../../api";
import toast from "react-hot-toast";
// import getOtpOnWhatsapp from "../../../utils/getOtpOnWhatsapp";
import { setShowRegisterModal } from "../../../redux/features/global/globalSlice";

const GetOPT = ({ setOrder, setShowForgotPassword, mobile, setMobile }) => {
  const { logo } = useLogo();
  const dispatch = useDispatch();
  const ref = useRef();
  useCloseModalClickOutside(ref, () => {
    closeModal();
  });

  const getOtp = async (e) => {
    e.preventDefault();
    /* Get Otp based on settings*/
    if (Settings.otp) {
      const res = await AxiosSecure.post(API.otp, { mobile });
      const data = res.data;
      if (data?.success) {
        setOrder({
          orderId: data?.result?.orderId,
          otpMethod: "sms",
        });
        toast.success(data?.result?.message);
        setShowForgotPassword(true);
      } else {
        toast.error(data?.error?.errorMessage);
      }
    } else {
      setShowForgotPassword(true);
    }
  };

  // const handleGetOtpOnWhatsapp = async () => {
  //   await getOtpOnWhatsapp(mobile, setOrder, setShowForgotPassword);
  // };

  const handleMobileNo = (e) => {
    if (e.target.value.length <= 10) {
      setMobile(e.target.value);
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
                        <div className="welcome-text"></div>
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
                          onSubmit={getOtp}
                          className="ng-untouched ng-pristine ng-invalid"
                        >
                          <div className="login-form">
                            <div className="form-item">
                              <p className="form-label">Mobile Number</p>
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  gap: "5px",
                                }}
                              >
                                {" "}
                                <div
                                  style={{
                                    width: "100px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                  }}
                                  className="input-container"
                                >
                                  +91
                                </div>
                                <div className="input-container">
                                  <input
                                    onChange={(e) => handleMobileNo(e)}
                                    value={mobile}
                                    type="number"
                                    placeholder="Enter Mobile number"
                                  />
                                </div>
                              </div>
                            </div>

                            <div className="form-btn">
                              <div className="otpBTNs">
                                <button
                                  disabled={Settings.otp && mobile?.length < 10}
                                  type="submit"
                                  className="btn secondary-btn ng-star-inserted"
                                >
                                  {Settings.otp
                                    ? " Get OTP On Message"
                                    : "Proceed"}
                                </button>
                              </div>
                              {/* {Settings.otpless && (
                                <Fragment>
                                  <p className="separator ng-star-inserted">
                                    OR
                                  </p>

                                  <div className="extra-btns">
                                    <button
                                      disabled={mobile?.length < 10}
                                      onClick={handleGetOtpOnWhatsapp}
                                      type="button"
                                      className="btn secondary-btn ng-star-inserted"
                                    >
                                      Get OTP on Whatsapp
                                    </button>
                                  </div>
                                </Fragment>
                              )} */}
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

export default GetOPT;
