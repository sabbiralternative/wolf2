import { useDispatch, useSelector } from "react-redux";
import useBalance from "../../hooks/balance";
import { setShowDepositModal } from "../../redux/features/global/globalSlice";
import useWhatsApp from "../../hooks/whatsapp";
import { Link } from "react-router-dom";
import { Fragment, useState } from "react";
import ChangePassword from "../../components/modals/ChangePassword/ChangePassword";
import Withdraw from "../../components/modals/Withdraw/Withdraw";
import images from "../../assets/images";
import Notification from "../../components/UI/Notification/Notification";

const Profile = () => {
  const [showChangePasswordModal, setShowChangePasswordModal] = useState(false);
  const [showWithdrawModal, setShowWithdrawModal] = useState(false);
  const { data: socialLink } = useWhatsApp();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { data: balance } = useBalance();

  const handleNavigateSocialLink = (link) => {
    window.open(link, "_blank");
  };
  return (
    <Fragment>
      {showChangePasswordModal && (
        <ChangePassword
          setShowChangePasswordModal={setShowChangePasswordModal}
        />
      )}
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
                onClick={() => setShowChangePasswordModal(true)}
                className="chng-psw-btn mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base ng-star-inserted"
              >
                <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                <span className="mdc-button__label">Change Password</span>
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
                  <span>Balance</span>
                  <p>{balance?.availBalance}</p>
                </div>
              </div>
              <div className="d-w-btn ng-star-inserted">
                <button
                  onClick={() => dispatch(setShowDepositModal(true))}
                  className="notranslate mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base"
                >
                  <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                  <span className="mdc-button__label">Deposit</span>
                  <span className="mat-mdc-focus-indicator" />
                  <span className="mat-mdc-button-touch-target" />
                  <span className="mat-ripple mat-mdc-button-ripple" />
                </button>
                <button
                  onClick={() => setShowWithdrawModal(true)}
                  className="notranslate mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base"
                >
                  <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                  <span className="mdc-button__label">Withdraw</span>
                  <span className="mat-mdc-focus-indicator" />
                  <span className="mat-mdc-button-touch-target" />
                  <span className="mat-ripple mat-mdc-button-ripple" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="menu-items-wrap" style={{ marginBottom: "70px" }}>
          <ul className="smenu-wrap">
            <li className="smenu-item">
              <a className="smenu-link">
                <div className="label-wrap">
                  <img
                    alt="Menu Icon"
                    src="https://ss.manage63.com/bmk-wl/commonAssets/sidenav_activebets.svg"
                  />
                  <span>Active Bets</span>
                </div>
              </a>
            </li>
            <li className="smenu-item">
              <a className="smenu-link">
                <div className="label-wrap">
                  <img
                    alt="Menu Icon"
                    src="https://ss.manage63.com/bmk-wl/commonAssets/sidenav__ac_statement.svg"
                  />
                  <span>Account Statement</span>
                </div>
              </a>
            </li>
            <li className="smenu-item casino-hidden">
              <a className="smenu-link">
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
                  <span>Rules</span>
                </div>
              </Link>
            </li>
            <li className="smenu-item">
              <Link to="/banking" className="smenu-link">
                <div className="label-wrap">
                  <img
                    alt="Menu Icon"
                    src="https://ss.manage63.com/bmk-wl/commonAssets/sidenav_bank.svg"
                  />
                  <span>Banking</span>
                </div>
              </Link>
            </li>
            <li className="smenu-item ng-star-inserted">
              <a className="smenu-link">
                <div className="label-wrap">
                  <img
                    alt="Menu Icon"
                    src="https://ss.manage63.com/bmk-wl/commonAssets/sidenav_bonus.svg"
                  />
                  <span>Bonus</span>
                </div>
              </a>
            </li>
          </ul>
          {(socialLink?.instagramLink ||
            socialLink?.telegramLink ||
            socialLink?.whatsapplink ||
            socialLink?.branchWhatsapplink) && (
            <div className="social-links-wrap ng-star-inserted">
              <label>Join us Now</label>
              <div className="social-links">
                {(socialLink?.whatsapplink ||
                  socialLink?.branchWhatsapplink) && (
                  <a
                    onClick={() =>
                      handleNavigateSocialLink(
                        socialLink?.branchWhatsapplink ||
                          socialLink?.whatsapplink,
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

                {socialLink?.instagramLink && (
                  <a
                    onClick={() =>
                      handleNavigateSocialLink(socialLink?.instagramLink)
                    }
                    className="ng-star-inserted"
                  >
                    <img
                      alt=""
                      src="https://ss.manage63.com/bmk-wl/commonAssets/icon_dark_instagram.svg"
                    />
                  </a>
                )}

                {socialLink?.telegramLink && (
                  <a
                    onClick={() =>
                      handleNavigateSocialLink(socialLink?.telegramLink)
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
