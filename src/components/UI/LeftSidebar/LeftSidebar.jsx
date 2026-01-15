import { useDispatch, useSelector } from "react-redux";
import images from "../../../assets/images";
import { Fragment } from "react";
import { setShowSidebar } from "../../../redux/features/global/globalSlice";
import { logout } from "../../../redux/features/auth/authSlice";

const LeftSidebar = ({ children }) => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { showSidebar } = useSelector((state) => state.global);
  return (
    <div className="mat-drawer-container mat-sidenav-container sidenav-container mat-drawer-transition mat-drawer-container-has-open">
      {showSidebar && (
        <Fragment>
          {" "}
          <div className="mat-drawer-backdrop ng-star-inserted mat-drawer-shown" />
          <div
            tabIndex={0}
            className="cdk-visually-hidden cdk-focus-trap-anchor"
            aria-hidden="true"
          />
        </Fragment>
      )}

      <div
        className="mat-drawer mat-sidenav left-sidemenu ng-tns-c3816625663-0 ng-trigger ng-trigger-transform mat-drawer-over ng-star-inserted mat-drawer-opened"
        style={{
          transform: showSidebar ? "none" : " translate3d(-100%, 0, 0)",
          visibility: "visible",
          transition: "0.5s",
          boxShadow: `${showSidebar ? "" : "none"}`,
          height: "100vh",
        }}
      >
        <div className="mat-drawer-inner-container ng-tns-c3816625663-0">
          <div className="sidemenu-wrapper ng-tns-c3816625663-0">
            <div className="sidemenu-header">
              <div className="logo">
                <div className="img-wrap">
                  <img
                    alt="logo"
                    src="https://ss.manage63.com/bmk-wl/wl/wolf365/img/logo.svg"
                    className="ng-star-inserted"
                    style={{}}
                  />
                </div>
                <div className="closeMenu">
                  <button
                    onClick={() => dispatch(setShowSidebar(false))}
                    aria-label="close button"
                    className="mdc-fab mat-mdc-fab mat-accent mat-mdc-button-base"
                  >
                    <span className="mat-mdc-button-persistent-ripple mdc-fab__ripple" />
                    <div
                      role="img"
                      className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                      aria-hidden="true"
                      data-mat-icon-type="font"
                    >
                      chevron_left
                    </div>
                    <span className="mdc-button__label" />
                    <span className="mat-mdc-focus-indicator" />
                    <span className="mat-mdc-button-touch-target" />
                    <span className="mat-ripple mat-mdc-button-ripple" />
                  </button>
                </div>
              </div>
              <div className="user-details ng-star-inserted" style={{}}>
                <p className="notranslate">
                  <div
                    role="img"
                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                    aria-hidden="true"
                    data-mat-icon-type="font"
                  >
                    person
                  </div>
                  {user}
                </p>
                <p className="notranslate user-number ng-star-inserted">
                  <img alt="Flag" src={images.flag} />
                  +91-8850976901
                </p>
              </div>
            </div>
            <div className="sidemenu-list">
              <ul className="smenu-wrap top">
                <li className="smenu-item nav-bonus ng-star-inserted">
                  <div className="smenu-link">
                    <img
                      alt="Menu Icon"
                      src="https://ss.manage63.com/bmk-wl/commonAssets/sidenav_bonus.svg"
                    />
                    <span>Bonus</span>
                    <span className="rules-text">Rules</span>
                    <span className="rules-text statement">Statement</span>
                  </div>
                  <div>
                    <div className="bonus-wrap">
                      <div className="bonus-details">
                        <div className="bonus-info">
                          <p>Total Bonus: 0</p>
                          <div className="claim-btn">
                            <p>Claimable Bonus: 0</p>
                            <button className="btn secondary-btn" disabled>
                              Claim
                            </button>
                          </div>
                          <p className="n-msg">Min. Claimable Coins: 100</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li hidden className="smenu-item">
                  <a className="smenu-link">
                    <img
                      alt="Menu Icon"
                      src="https://ss.manage63.com/bmk-wl/commonAssets/sidenav-reward.svg"
                    />
                    <span>Have a promo/refer code</span>
                  </a>
                  <div className="refer-code">
                    <input type="text" placeholder="Enter Promo/Refer code" />
                    <p
                      className="timer text-danger"
                      style={{ display: "none" }}
                    >
                      23:03
                    </p>
                    <button className="btn secondary-btn">Submit</button>
                  </div>
                </li>
                <li className="smenu-item" tabIndex={0}>
                  <a className="smenu-link">
                    <img
                      alt="Menu Icon"
                      src="https://ss.manage63.com/bmk-wl/commonAssets/sidenav_profile.svg"
                    />
                    <span>Profile</span>
                  </a>
                </li>
                <li className="smenu-item ng-star-inserted">
                  <a className="smenu-link">
                    <img
                      alt="Menu Icon"
                      src="https://ss.manage63.com/bmk-wl/commonAssets/sidenav_bank.svg"
                    />
                    <span>Withdrawal Details</span>
                  </a>
                </li>

                <li className="smenu-item">
                  <a className="smenu-link">
                    <img
                      alt="Menu Icon"
                      src="https://ss.manage63.com/bmk-wl/commonAssets/sidenav__ac_statement.svg"
                    />
                    <span>Account Statement</span>
                  </a>
                </li>
                <li className="smenu-item">
                  <a className="smenu-link">
                    <img
                      alt="Menu Icon"
                      src="https://ss.manage63.com/bmk-wl/commonAssets/sidenav_activebets.svg"
                    />
                    <span>Active Bets</span>
                  </a>
                </li>
                <li className="smenu-item ng-star-inserted" style={{}}>
                  <a className="smenu-link">
                    <img
                      alt="Menu Icon"
                      src="https://ss.manage63.com/bmk-wl/commonAssets/sidenav_edit.svg"
                    />
                    <span>Edit Stakes</span>
                  </a>
                </li>

                <li className="smenu-item">
                  <a className="smenu-link">
                    <img
                      alt="Menu Icon"
                      src="https://ss.manage63.com/bmk-wl/commonAssets/sidenav_notification.svg"
                    />
                    <span>Notifications</span>
                  </a>
                </li>

                <li className="smenu-item ng-star-inserted">
                  <a className="smenu-link">
                    <img
                      alt="Menu Icon"
                      src="https://ss.manage63.com/bmk-wl/commonAssets/sidenav_pg_upload.svg"
                    />
                    <span>Payment Gateway Unapproved Payment?</span>
                  </a>
                </li>

                <li className="smenu-item" tabIndex={0}>
                  <a className="smenu-link">
                    <img
                      alt="Menu Icon"
                      src="https://ss.manage63.com/bmk-wl/commonAssets/sidenav_rules.svg"
                    />
                    <span>Rules</span>
                  </a>
                </li>
                <li className="smenu-item ng-star-inserted">
                  <a className="smenu-link">
                    <img
                      alt="Menu Icon"
                      src="https://ss.manage63.com/bmk-wl/commonAssets/sidenav_help.svg"
                    />
                    <span>Help</span>
                  </a>
                </li>
              </ul>
              <ul className="smenu-wrap bottom">
                <li className="smenu-item social-links-wrap ng-star-inserted">
                  <label>Join us Now</label>
                  <div className="social-links">
                    <a className="ng-star-inserted">
                      <img
                        alt=""
                        src="https://ss.manage63.com/bmk-wl/commonAssets/icon_dark_facebook.svg"
                      />
                    </a>
                    <a className="ng-star-inserted">
                      <img
                        alt=""
                        src="https://ss.manage63.com/bmk-wl/commonAssets/icon_dark_instagram.svg"
                      />
                    </a>
                    <a className="ng-star-inserted">
                      <img
                        alt=""
                        src="https://ss.manage63.com/bmk-wl/commonAssets/icon_dark_telegram.svg"
                      />
                    </a>
                  </div>
                </li>

                <li className="smenu-item">
                  <div className="action-btn ng-star-inserted" style={{}}>
                    <button
                      onClick={() => {
                        dispatch(logout());
                        dispatch(setShowSidebar(false));
                      }}
                      className="btn secondary-btn notranslate"
                    >
                      Logout
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div
        tabIndex={0}
        className="cdk-visually-hidden cdk-focus-trap-anchor"
        aria-hidden="true"
      />
      <div className="mat-drawer-content mat-sidenav-content">
        <div className="ng-star-inserted">
          <div className="main">
            <div className="container">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
