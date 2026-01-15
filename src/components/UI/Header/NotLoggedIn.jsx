import { useDispatch } from "react-redux";
import {
  setShowLoginModal,
  setShowRegisterModal,
} from "../../../redux/features/global/globalSlice";
import useWhatsApp from "../../../hooks/whatsapp";
import { Settings } from "../../../api";

const NotLoggedIn = () => {
  const { data: socialLink } = useWhatsApp();
  const dispatch = useDispatch();

  const openWhatsapp = () => {
    if (socialLink?.whatsapplink) {
      window.open(socialLink?.whatsapplink, "_blank");
    }
  };

  return (
    <div className="not-loggedIn ng-star-inserted">
      <button
        onClick={() => dispatch(setShowLoginModal(true))}
        className="btn dark-outlined-btn mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base"
      >
        <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
        <span className="mdc-button__label">Login</span>
        <span className="mat-mdc-focus-indicator" />
        <span className="mat-mdc-button-touch-target" />
      </button>
      <button
        onClick={() => dispatch(setShowRegisterModal(true))}
        className="btn dark-outlined-btn mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base"
      >
        <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
        <span className="mdc-button__label">Register</span>
        <span className="mat-mdc-focus-indicator" />
        <span className="mat-mdc-button-touch-target" />
      </button>
      {Settings.registrationWhatsapp && socialLink?.whatsapplink && (
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
    </div>
  );
};

export default NotLoggedIn;
