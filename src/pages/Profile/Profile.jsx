import { useDispatch, useSelector } from "react-redux";
import useBalance from "../../hooks/balance";
import {
  setShowChangePasswordModal,
  setShowDepositModal,
  setShowLoginWarning,
} from "../../redux/features/global/globalSlice";
import { Link, useNavigate } from "react-router-dom";
import { Fragment, useState } from "react";
import Withdraw from "../../components/modals/Withdraw/Withdraw";
import images from "../../assets/images";
import Notification from "../../components/UI/Notification/Notification";
import { useLanguage } from "../../context/LanguageProvider";
import { languageValue } from "../../utils/language";
import { LanguageKey } from "../../const";
import { Settings } from "../../api";

const Profile = () => {
  const navigate = useNavigate();
  const { valueByLanguage } = useLanguage();
  const [showWithdrawModal, setShowWithdrawModal] = useState(false);

  const dispatch = useDispatch();
  const { user, token } = useSelector((state) => state.auth);

  const { data: balance } = useBalance();

  const handleNavigateSocialLink = (link) => {
    window.open(link, "_blank");
  };

  const handleNavigateByCheckLogin = (link) =>
    token ? navigate(link) : dispatch(setShowLoginWarning(true));

  return (
    <Fragment>
      {showWithdrawModal && (
        <Withdraw setShowWithdrawModal={setShowWithdrawModal} />
      )}
      <div className="page-body">
        <div className="ng-star-inserted">
          <div className="forSearchBar-internal">
            <div className="ng-star-inserted">
              <div className="search-wrapper">
                <div className="search-field">
                  <div
                    role="img"
                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                    aria-hidden="true"
                    data-mat-icon-type="font"
                  >
                    search
                  </div>
                  <input
                    type="text"
                    placeholder="Search Matches / Casino Games"
                    className="ng-untouched ng-pristine ng-valid"
                  />
                </div>
                <div
                  role="img"
                  className="mat-icon notranslate material-icons search-btn mat-ligature-font mat-icon-no-color"
                  aria-hidden="true"
                  data-mat-icon-type="font"
                >
                  search
                </div>
              </div>
            </div>
            <Notification />
          </div>
        </div>
        {token ? (
          <div className="user-details-wrap">
            <div className="user-details ng-star-inserted">
              <div className="contact-info">
                <p className="notranslate" />
                <p className="notranslate ng-star-inserted">
                  <img alt="Flag" src={images.india} /> {user}
                </p>
              </div>
              <div className="actions-wrap">
                <button
                  onClick={() => dispatch(setShowChangePasswordModal(true))}
                  className="chng-psw-btn mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base ng-star-inserted"
                >
                  <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                  <span className="mdc-button__label">
                    {languageValue(
                      valueByLanguage,
                      LanguageKey.CHANGE_PASSWORD,
                    )}
                  </span>
                  <span className="mat-mdc-focus-indicator" />
                  <span className="mat-mdc-button-touch-target" />
                  <span className="mat-ripple mat-mdc-button-ripple" />
                </button>
              </div>
            </div>
            <div className="user-bal-info ng-star-inserted">
              <div className="card-wrapper">
                <div className="bal-cont">
                  <div className="avl-bal show-bal">
                    <span>
                      {" "}
                      {languageValue(valueByLanguage, LanguageKey.BALANCE)}
                    </span>
                    <p>{balance?.availBalance}</p>
                  </div>
                </div>
                <div className="d-w-btn ng-star-inserted">
                  {Settings.deposit && (
                    <button
                      onClick={() => dispatch(setShowDepositModal(true))}
                      className="notranslate mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base"
                    >
                      <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                      <span className="mdc-button__label">
                        {" "}
                        {languageValue(valueByLanguage, LanguageKey.DEPOSIT)}
                      </span>
                      <span className="mat-mdc-focus-indicator" />
                      <span className="mat-mdc-button-touch-target" />
                      <span className="mat-ripple mat-mdc-button-ripple" />
                    </button>
                  )}
                  {Settings.withdraw && (
                    <button
                      onClick={() => setShowWithdrawModal(true)}
                      className="notranslate mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base"
                    >
                      <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                      <span className="mdc-button__label">
                        {" "}
                        {languageValue(valueByLanguage, LanguageKey.WITHDRAW)}
                      </span>
                      <span className="mat-mdc-focus-indicator" />
                      <span className="mat-mdc-button-touch-target" />
                      <span className="mat-ripple mat-mdc-button-ripple" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="user-details-wrap">
            <div className="user-details guest-user ng-star-inserted">
              <p>Guest User</p>
            </div>
          </div>
        )}
        <div className="menu-items-wrap" style={{ marginBottom: "70px" }}>
          <ul className="smenu-wrap">
            <li className="smenu-item">
              <a
                onClick={() => handleNavigateByCheckLogin("/active-bets")}
                className="smenu-link"
              >
                <div className="label-wrap">
                  <img
                    alt="Menu Icon"
                    src="https://ss.manage63.com/bmk-wl/commonAssets/sidenav_activebets.svg"
                  />
                  <span>
                    {" "}
                    {languageValue(valueByLanguage, LanguageKey.ACTIVE_BETS)}
                  </span>
                </div>
              </a>
            </li>
            <li className="smenu-item">
              <a
                onClick={() => handleNavigateByCheckLogin("/profit-loss")}
                className="smenu-link"
              >
                <div className="label-wrap">
                  <img
                    alt="Menu Icon"
                    src="https://ss.manage63.com/bmk-wl/commonAssets/sidenav__ac_statement.svg"
                  />
                  <span>Account Statement</span>
                </div>
              </a>
            </li>
            <li className="smenu-item">
              <a
                onClick={() =>
                  handleNavigateByCheckLogin("/passbook?tab=transaction")
                }
                className="smenu-link"
              >
                <div className="label-wrap">
                  <img
                    alt="Menu Icon"
                    src="https://ss.manage63.com/bmk-wl/commonAssets/sidenav__ac_statement.svg"
                  />
                  <span>Deposit/Withdraw Report</span>
                </div>
              </a>
            </li>
            <li className="smenu-item casino-hidden">
              <a
                onClick={() => handleNavigateByCheckLogin("/casino-result")}
                className="smenu-link"
              >
                <div className="label-wrap">
                  <img
                    alt="Menu Icon"
                    src="https://ss.manage63.com/bmk-wl/commonAssets/dice.svg"
                  />
                  <span>Casino Result</span>
                </div>
              </a>
            </li>
            <li className="smenu-item" tabIndex={0}>
              <Link to="/rules" className="smenu-link">
                <div className="label-wrap">
                  <img
                    alt="Menu Icon"
                    src="https://ss.manage63.com/bmk-wl/commonAssets/sidenav_rules.svg"
                  />
                  <span>
                    {" "}
                    {languageValue(valueByLanguage, LanguageKey.RULES)}
                  </span>
                </div>
              </Link>
            </li>
            <li className="smenu-item">
              <a
                onClick={() => handleNavigateByCheckLogin("/banking")}
                className="smenu-link"
              >
                <div className="label-wrap">
                  <img
                    alt="Menu Icon"
                    src="https://ss.manage63.com/bmk-wl/commonAssets/sidenav_bank.svg"
                  />
                  <span>Banking</span>
                </div>
              </a>
            </li>
            {/* <li className="smenu-item ng-star-inserted">
              <a
                onClick={() => handleNavigateByCheckLogin("/bonus")}
                className="smenu-link"
              >
                <div className="label-wrap">
                  <img
                    alt="Menu Icon"
                    src="https://ss.manage63.com/bmk-wl/commonAssets/sidenav_bonus.svg"
                  />
                  <span>Bonus</span>
                </div>
              </a>
            </li> */}
          </ul>
          {(Settings?.instagramLink ||
            Settings?.telegramLink ||
            Settings?.whatsapplink ||
            Settings?.branchWhatsapplink) && (
            <div className="social-links-wrap ng-star-inserted">
              <label>Join us Now</label>
              <div className="social-links">
                {(Settings?.whatsapplink || Settings?.branchWhatsapplink) && (
                  <a
                    onClick={() =>
                      handleNavigateSocialLink(
                        Settings?.branchWhatsapplink || Settings?.whatsapplink,
                      )
                    }
                    className="ng-star-inserted"
                  >
                    <img
                      alt=""
                      src="https://ss.manage63.com/bmk-wl/commonAssets/icon_dark_facebook.svg"
                    />
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
            </div>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default Profile;
