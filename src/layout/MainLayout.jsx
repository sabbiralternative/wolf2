import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import images from "../assets/images";
import Footer from "../components/UI/Footer/Footer";
import Header from "../components/UI/Header/Header";
import Login from "../components/modals/Login/Login";
import { useSelector } from "react-redux";
import ForgotPassword from "../components/modals/ForgotPassword/ForgotPassword";
import Register from "../components/modals/Register/Register";

const MainLayout = () => {
  const { showLoginModal, showForgotPasswordModal, showRegisterModal } =
    useSelector((state) => state.global);

  return (
    <Fragment>
      {showLoginModal && <Login />}
      {showForgotPasswordModal && <ForgotPassword />}
      {showRegisterModal && <Register />}
      <div className="translator-wrap" style={{ display: "block !important" }}>
        <img src={images.globe} alt="" />
      </div>

      <div className="mat-drawer-container mat-sidenav-container sidenav-container">
        <div className="mat-drawer-backdrop ng-star-inserted" />
        <div
          tabIndex={0}
          className="cdk-visually-hidden cdk-focus-trap-anchor"
          aria-hidden="true"
        />
        <div
          tabIndex={-1}
          mode="over"
          className="mat-drawer mat-sidenav left-sidemenu ng-tns-c3816625663-0 ng-trigger ng-trigger-transform mat-drawer-over ng-star-inserted"
          style={{ boxShadow: "none", visibility: "hidden" }}
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
                      aria-label="close button"
                      className="mdc-fab mat-mdc-fab mat-accent mat-mdc-button-base"
                    >
                      <span className="mat-mdc-button-persistent-ripple mdc-fab__ripple" />
                      <span
                        role="img"
                        className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                        aria-hidden="true"
                        data-mat-icon-type="font"
                      >
                        chevron_left
                      </span>
                      <span className="mdc-button__label" />
                      <span className="mat-mdc-focus-indicator" />
                      <span className="mat-mdc-button-touch-target" />
                    </button>
                  </div>
                </div>
                <div className="user-details ng-star-inserted" style={{}}>
                  <p>
                    <span
                      role="img"
                      className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                      aria-hidden="true"
                      data-mat-icon-type="font"
                    >
                      person
                    </span>
                    Guest User
                  </p>
                </div>
              </div>
              <div className="sidemenu-list">
                <ul className="smenu-wrap top">
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
                  <li className="smenu-item ng-star-inserted" style={{}}>
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
                  <li className="smenu-item">
                    <a className="smenu-link">
                      <img
                        alt="Menu Icon"
                        src="https://ss.manage63.com/bmk-wl/commonAssets/sidenav_notification.svg"
                      />
                      <span>Notifications</span>
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
                      <button className="btn secondary-btn notranslate">
                        Login | Signup
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
        <div className="mat-sidenav-content">
          <div className="ng-star-inserted">
            <div className="main">
              <div className="container">
                <Header />
                <Outlet />
                <Footer />
                <div />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MainLayout;
