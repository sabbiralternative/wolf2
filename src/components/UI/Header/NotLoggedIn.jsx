import { useDispatch } from "react-redux";
import {
  setShowLoginModal,
  setShowRegisterModal,
} from "../../../redux/features/global/globalSlice";

import { Settings } from "../../../api";
import images from "../../../assets/images";
import { useLanguage } from "../../../context/LanguageProvider";
import { languageValue } from "../../../utils/language";
import { LanguageKey } from "../../../const";

const NotLoggedIn = ({ setShowLanguage }) => {
  const { valueByLanguage } = useLanguage();
  const language = localStorage.getItem("language");
  const dispatch = useDispatch();

  const openWhatsapp = () => {
    if (Settings?.whatsapplink) {
      window.open(Settings?.whatsapplink, "_blank");
    }
  };

  return (
    <div className="not-loggedIn ng-star-inserted">
      <button
        onClick={() => dispatch(setShowLoginModal(true))}
        className="btn dark-outlined-btn mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base"
      >
        <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
        <span className="mdc-button__label">
          {" "}
          {languageValue(valueByLanguage, LanguageKey.LOGIN)}
        </span>
        <span className="mat-mdc-focus-indicator" />
        <span className="mat-mdc-button-touch-target" />
      </button>
      <button
        onClick={() => dispatch(setShowRegisterModal(true))}
        className="btn dark-outlined-btn mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base"
      >
        <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
        <span className="mdc-button__label">
          {" "}
          {languageValue(valueByLanguage, LanguageKey.REGISTER)}
        </span>
        <span className="mat-mdc-focus-indicator" />
        <span className="mat-mdc-button-touch-target" />
      </button>
      {Settings.registrationWhatsapp && Settings?.whatsapplink && (
        <button
          onClick={openWhatsapp}
          className="btn dark-outlined-btn demo-btn mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base"
        >
          <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
          <span className="mdc-button__label">Get ID</span>
          <span className="mat-mdc-focus-indicator" />
          <span className="mat-mdc-button-touch-target" />
        </button>
      )}

      {Settings.language && (
        <div
          onClick={() => setShowLanguage((prev) => !prev)}
          style={{
            position: "static",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "3px",
            cursor: "pointer",
          }}
          className="notranslate selected-lang ng-star-inserted"
        >
          <img style={{ height: "20px" }} src={images.globe} alt="" />
          <span> {language || "EN"}</span>
        </div>
      )}
    </div>
  );
};

export default NotLoggedIn;
