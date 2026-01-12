const Register = () => {
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
                            src="https://ss.manage63.com/bmk-wl/wl/wolf365/img/logo.svg"
                            className="ng-star-inserted"
                          />
                        </div>
                        <div className="welcome-text">
                          <h2 className="notranslate">Login </h2>
                        </div>
                        <button
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
                          noValidate
                          className="ng-untouched ng-pristine ng-invalid"
                        >
                          <div className="login-form">
                            <div className="form-item">
                              <p className="form-label">
                                User Id / Mobile Number
                              </p>
                              <div className="input-container">
                                <input
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
                                  type="text"
                                  placeholder="Enter Password"
                                />
                              </div>
                              <p
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
                                  <div
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    chat_bubble
                                  </div>
                                  Get OTP on SMS
                                </button>
                              </div>
                              <p className="separator ng-star-inserted">OR</p>

                              <div className="extra-btns">
                                <button
                                  type="button"
                                  className="btn secondary-btn ng-star-inserted"
                                >
                                  Login with Demo ID
                                </button>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>{" "}
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

export default Register;
