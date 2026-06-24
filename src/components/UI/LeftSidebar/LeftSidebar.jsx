import { useDispatch, useSelector } from "react-redux";
import { Fragment, useEffect } from "react";
import {
  setShowEditStakeModal,
  setShowHelpModal,
  setShowLoginWarning,
  setShowSidebar,
} from "../../../redux/features/global/globalSlice";
import { logout } from "../../../redux/features/auth/authSlice";
import ModalWrapper from "../../modals/ModalWrapper/ModalWrapper";
import { useLocation, useNavigate } from "react-router-dom";
import SocialLinks from "../../modules/Home/SocialLinks";
import { Settings } from "../../../api";
import { useLogo } from "../../../context/ApiProvider";
import images from "../../../assets/images";
import { useLanguage } from "../../../context/LanguageProvider";
import { languageValue } from "../../../utils/language";
import { LanguageKey } from "../../../const";

const LeftSidebar = ({ children }) => {
  const { logo } = useLogo();
  const { valueByLanguage } = useLanguage();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { user, token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { showSidebar } = useSelector((state) => state.global);

  useEffect(() => {
    if (showSidebar) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [showSidebar]);

  const handleNavigateSocialLink = (link) => {
    window.open(link, "_blank");
    dispatch(setShowSidebar(false));
  };

  const handleNavigateByCheckLogin = (link) => {
    if (token) {
      navigate(link);
      dispatch(setShowSidebar(false));
    } else {
      dispatch(setShowLoginWarning(true));
    }
  };
  const handleNavigate = (link) => {
    navigate(link);
    dispatch(setShowSidebar(false));
  };

  const handleOpenModal = (setModal) => {
    dispatch(setModal(true));
    dispatch(setShowSidebar(false));
  };

  return (
    <div
      className="mat-drawer-container mat-sidenav-container sidenav-container mat-drawer-transition mat-drawer-container-has-open"
      style={{ height: "100%" }}
    >
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
      <ModalWrapper setModal={setShowSidebar} redux={true}>
        <div
          className={`mat-drawer mat-sidenav left-sidemenu ng-tns-c3816625663-0 ng-trigger ng-trigger-transform mat-drawer-over ng-star-inserted mat-drawer-opened  `}
          style={{
            transform: showSidebar ? "none" : " translate3d(-100%, 0, 0)",
            visibility: "visible",
            transition: "0.5s",
            boxShadow: `${showSidebar ? "" : "none"}`,
            height: "100vh",
            overflowY: "initial",
          }}
        >
          <div
            className="mat-drawer-inner-container ng-tns-c3816625663-0"
            style={{ overflow: "initial" }}
          >
            <div
              className="sidemenu-wrapper ng-tns-c3816625663-0"
              style={{ height: "100%" }}
            >
              <div className="sidemenu-header">
                <div className="logo">
                  <div className="img-wrap">
                    <img
                      alt="logo"
                      src={logo}
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
                    {token ? user : "Guest User"}
                  </p>
                  {/* <p className="notranslate user-number ng-star-inserted">
                    <img alt="Flag" src={images.flag} />
                    +91-8850976901
                  </p> */}
                </div>
              </div>
              <div
                className="sidemenu-list"
                style={{
                  justifyContent: "space-between",
                  height: "calc(100vh - 110px)",
                }}
              >
                <ul
                  className="smenu-wrap top"
                  style={{ maxHeight: "fit-content" }}
                >
                  {token && (
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
                  )}

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
                    <a
                      onClick={() => handleNavigate("/profile")}
                      className="smenu-link"
                    >
                      <img
                        alt="Menu Icon"
                        src="https://ss.manage63.com/bmk-wl/commonAssets/sidenav_profile.svg"
                      />
                      <span>Profile</span>
                    </a>
                  </li>
                  <li className="smenu-item ng-star-inserted">
                    <a
                      onClick={() => handleNavigateByCheckLogin("/banking")}
                      className="smenu-link"
                    >
                      <img
                        alt="Menu Icon"
                        src="https://ss.manage63.com/bmk-wl/commonAssets/sidenav_bank.svg"
                      />
                      <span>Withdrawal Details</span>
                    </a>
                  </li>

                  <li className="smenu-item">
                    <a
                      onClick={() => handleNavigateByCheckLogin("/profit-loss")}
                      className="smenu-link"
                    >
                      <img
                        alt="Menu Icon"
                        src="https://ss.manage63.com/bmk-wl/commonAssets/sidenav__ac_statement.svg"
                      />
                      <span>Account Statement</span>
                    </a>
                  </li>
                  <li className="smenu-item">
                    <a
                      onClick={() =>
                        handleNavigateByCheckLogin("/passbook?tab=transaction")
                      }
                      className="smenu-link"
                    >
                      <img
                        alt="Menu Icon"
                        src="https://ss.manage63.com/bmk-wl/commonAssets/sidenav__ac_statement.svg"
                      />
                      <span>Deposit/Withdraw Report</span>
                    </a>
                  </li>
                  <li className="smenu-item">
                    <a
                      onClick={() => handleNavigateByCheckLogin("/active-bets")}
                      className="smenu-link"
                    >
                      <img
                        alt="Menu Icon"
                        src="https://ss.manage63.com/bmk-wl/commonAssets/sidenav_activebets.svg"
                      />
                      <span>Active Bets</span>
                    </a>
                  </li>
                  <li className="smenu-item">
                    <a
                      onClick={() =>
                        handleNavigateByCheckLogin("/bonus-statement")
                      }
                      className="smenu-link"
                    >
                      <img
                        alt="Menu Icon"
                        src="https://ss.manage63.com/bmk-wl/commonAssets/sidenav_activebets.svg"
                      />
                      <span>
                        {" "}
                        {languageValue(
                          valueByLanguage,
                          LanguageKey.BONUS_STATEMENT,
                        )}
                      </span>
                    </a>
                  </li>
                  <li className="smenu-item">
                    <a
                      onClick={() => handleNavigateByCheckLogin("/promotions")}
                      className="smenu-link"
                    >
                      <img
                        alt="Menu Icon"
                        src="https://ss.manage63.com/bmk-wl/commonAssets/sidenav_activebets.svg"
                      />
                      <span> Promos & Bonus</span>
                    </a>
                  </li>
                  <li className="smenu-item">
                    <a
                      onClick={() =>
                        handleNavigateByCheckLogin("/lossback-bonus")
                      }
                      className="smenu-link"
                    >
                      <img
                        alt="Menu Icon"
                        src="https://ss.manage63.com/bmk-wl/commonAssets/sidenav_activebets.svg"
                      />
                      <span>Lossback Bonus</span>
                    </a>
                  </li>
                  {token && (
                    <li className="smenu-item ng-star-inserted" style={{}}>
                      <a
                        onClick={() => handleOpenModal(setShowEditStakeModal)}
                        className="smenu-link"
                      >
                        <img
                          alt="Menu Icon"
                          src="https://ss.manage63.com/bmk-wl/commonAssets/sidenav_edit.svg"
                        />
                        <span>Edit Stakes</span>
                      </a>
                    </li>
                  )}

                  <li className="smenu-item">
                    <a
                      onClick={() =>
                        handleNavigateByCheckLogin("/notification")
                      }
                      className="smenu-link"
                    >
                      <img
                        alt="Menu Icon"
                        src="https://ss.manage63.com/bmk-wl/commonAssets/sidenav_notification.svg"
                      />
                      <span>Notifications</span>
                    </a>
                  </li>
                  {token && (
                    <li className="smenu-item ng-star-inserted">
                      <a className="smenu-link">
                        <img
                          alt="Menu Icon"
                          src="https://ss.manage63.com/bmk-wl/commonAssets/sidenav_pg_upload.svg"
                        />
                        <span>Payment Gateway Unapproved Payment?</span>
                      </a>
                    </li>
                  )}

                  <li className="smenu-item" tabIndex={0}>
                    <a
                      onClick={() => handleNavigate("/rules")}
                      className="smenu-link"
                    >
                      <img
                        alt="Menu Icon"
                        src="https://ss.manage63.com/bmk-wl/commonAssets/sidenav_rules.svg"
                      />
                      <span>Rules</span>
                    </a>
                  </li>
                  {token &&
                    (Settings.whatsapplink || Settings.branchWhatsapplink) && (
                      <li className="smenu-item ng-star-inserted">
                        <a
                          onClick={() => handleOpenModal(setShowHelpModal)}
                          className="smenu-link"
                        >
                          <img
                            alt="Menu Icon"
                            src="https://ss.manage63.com/bmk-wl/commonAssets/sidenav_help.svg"
                          />
                          <span>Help</span>
                        </a>
                      </li>
                    )}
                </ul>
                <ul
                  className="smenu-wrap bottom"
                  style={{ position: "static" }}
                >
                  {(Settings?.instagramLink ||
                    Settings?.telegramLink ||
                    Settings?.whatsapplink ||
                    Settings?.branchWhatsapplink) && (
                    <li className="smenu-item social-links-wrap ng-star-inserted">
                      <label>Join us Now</label>
                      <div className="social-links">
                        {(Settings?.whatsapplink ||
                          Settings?.branchWhatsapplink) && (
                          <a
                            onClick={() =>
                              handleNavigateSocialLink(
                                Settings?.branchWhatsapplink ||
                                  Settings?.whatsapplink,
                              )
                            }
                            className="ng-star-inserted"
                          >
                            <img alt="" src={images.whatsApp2} />
                          </a>
                        )}
                        {Settings?.instagramLink && (
                          <a
                            onClick={() =>
                              handleNavigateSocialLink(Settings?.instagramLink)
                            }
                            className="ng-star-inserted"
                          >
                            <img
                              alt=""
                              src="https://ss.manage63.com/bmk-wl/commonAssets/icon_dark_instagram.svg"
                            />
                          </a>
                        )}
                        {Settings?.telegramLink && (
                          <a
                            onClick={() =>
                              handleNavigateSocialLink(Settings?.telegramLink)
                            }
                            className="ng-star-inserted"
                          >
                            <img
                              alt=""
                              src="https://ss.manage63.com/bmk-wl/commonAssets/icon_dark_telegram.svg"
                            />
                          </a>
                        )}
                      </div>
                    </li>
                  )}
                  {token && (
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
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </ModalWrapper>
      <div
        tabIndex={0}
        className="cdk-visually-hidden cdk-focus-trap-anchor"
        aria-hidden="true"
      />
      <div className="mat-drawer-content mat-sidenav-content">
        <div className="ng-star-inserted" style={{ height: "100%" }}>
          <div className="main">
            <div className="container">
              {children}
              {pathname === "/" && <SocialLinks />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
