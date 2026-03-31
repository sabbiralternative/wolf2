import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { logout } from "../../../redux/features/auth/authSlice";
import { Fragment, useState } from "react";
import { useLanguage } from "../../../context/LanguageProvider";
import { languageValue } from "../../../utils/language";
import { LanguageKey } from "../../../const";
import MyMarket from "../../modals/MyMarket/MyMarket";
import {
  setShowLoginModal,
  setShowReferralModal,
} from "../../../redux/features/global/globalSlice";
import { Settings } from "../../../api";

const Footer = () => {
  const [showMyMarket, setShowMyMarket] = useState(false);
  const { valueByLanguage } = useLanguage();
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleNavigate = (link) => {
    navigate(link);
  };
  return (
    <Fragment>
      {showMyMarket && <MyMarket setShowMyMarket={setShowMyMarket} />}
      <div className="page-footer">
        {token && pathname === "/profile" && (
          <div className="action-btns ng-star-inserted">
            <button
              onClick={() => {
                dispatch(logout());
                navigate("/");
              }}
              type="button"
              className="btn secondary-btn w-100"
            >
              {languageValue(valueByLanguage, LanguageKey.LOGOUT)}
            </button>
          </div>
        )}
        {!token && pathname === "/profile" && (
          <div className="action-btns ng-star-inserted">
            <button
              onClick={() => {
                dispatch(dispatch(setShowLoginModal(true)));
              }}
              type="button"
              className="btn secondary-btn w-100"
            >
              {languageValue(valueByLanguage, LanguageKey.LOGIN)}
            </button>
          </div>
        )}

        <div>
          <div className="tab-navigation">
            <button
              onClick={() => handleNavigate("/")}
              className={`home mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base ${pathname === "/" ? "active-link" : ""} `}
              tabIndex={0}
            >
              <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
              <span className="mdc-button__label">
                <span className="uIcons uIcons_home_2" />
                <p className="notranslate">
                  {" "}
                  {languageValue(valueByLanguage, LanguageKey.HOME)}
                </p>{" "}
              </span>
              <span className="mat-mdc-focus-indicator" />
              <span className="mat-mdc-button-touch-target" />
            </button>
            <button
              onClick={() => handleNavigate("/in-play")}
              className={`market mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base ${pathname === "/in-play" ? "active-link" : ""}`}
              tabIndex={0}
            >
              <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
              <span className="mdc-button__label">
                <span className="uIcons uIcons_inplay" />
                <p className="notranslate">Inplay</p>{" "}
              </span>
              <span className="mat-mdc-focus-indicator" />
              <span className="mat-mdc-button-touch-target" />
            </button>
            {!token ? (
              <button
                onClick={() => handleNavigate("/offers")}
                className={`offers mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base ng-star-inserted ${pathname === "/offers" ? "active-link" : ""}`}
                tabIndex={0}
              >
                <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                <span className="mdc-button__label">
                  <span className="uIcons uIcons_offers_1" />
                  <p className="notranslate">Offers</p>{" "}
                </span>
                <span className="mat-mdc-focus-indicator" />
                <span className="mat-mdc-button-touch-target" />
              </button>
            ) : (
              <Fragment>
                <button
                  onClick={() => setShowMyMarket(true)}
                  className="market mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base ng-star-inserted"
                >
                  <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                  <span className="mdc-button__label">
                    <span className="uIcons uIcons_my_market" />
                    <p className="notranslate">My Markets</p>
                  </span>
                  <span className="mat-mdc-focus-indicator" />
                  <span className="mat-mdc-button-touch-target" />
                </button>
                {Settings.referral && (
                  <button
                    onClick={() => dispatch(setShowReferralModal(true))}
                    className="refer mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base ng-star-inserted"
                  >
                    <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                    <span className="mdc-button__label">
                      <span className="uIcons uIcons_referral" />
                      <p className="notranslate">Referral</p>
                    </span>
                    <span className="mat-mdc-focus-indicator" />
                    <span className="mat-mdc-button-touch-target" />
                  </button>
                )}

                <button
                  onClick={() => handleNavigate("/passbook?tab=transaction")}
                  className={`passbook mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base ng-star-inserted ${pathname === "/passbook" ? "active-link" : ""}`}
                >
                  <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                  <span className="mdc-button__label">
                    <span className="uIcons uIcons_passbook_2" />
                    <p className="notranslate">Passbook</p>
                  </span>
                  <span className="mat-mdc-focus-indicator" />
                  <span className="mat-mdc-button-touch-target" />
                </button>
              </Fragment>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
