import { GrAndroid } from "react-icons/gr";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import useCloseModalClickOutside from "../../../hooks/closeModal";
import { setShowAPKModal } from "../../../redux/features/global/globalSlice";
import { Settings } from "../../../api";
import images from "../../../assets/images";

const DownloadAPK = () => {
  const dispatch = useDispatch();
  const modalRef = useRef();
  useCloseModalClickOutside(modalRef, () => {
    closeModal();
  });

  const closeModal = () => {
    sessionStorage.setItem("apk_modal_shown", true);
    dispatch(setShowAPKModal(false));
  };

  const handleDownload = (e) => {
    e.preventDefault();
    const fileUrl = Settings.apk_link;
    const link = document.createElement("a");
    link.href = fileUrl;
    link.setAttribute("download", "site.apk");
    document.body.appendChild(link);
    link.click();
    link.parentNode.removeChild(link);
    closeModal();
  };
  return (
    <div className="cdk-overlay-container" style={{ zIndex: 999000 }}>
      <div className="cdk-overlay-backdrop cdk-overlay-dark-backdrop cdk-overlay-backdrop-showing"></div>
      <div
        className="cdk-global-overlay-wrapper"
        dir="ltr"
        style={{ justifyContent: "center", alignItems: "flex-end" }}
      >
        <div
          id="cdk-overlay-0"
          className="cdk-overlay-pane change-password-dialog"
          style={{
            width: "100%",
            minHeight: "395px",
            maxWidth: "500px",
            position: "static",
            marginBottom: "0px",
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
            id="mat-mdc-dialog-0"
            role="dialog"
            aria-modal="true"
            style={{ "-mat-dialog-transition-duration": "150ms" }}
          >
            <div className="mdc-dialog__container">
              <div className="mat-mdc-dialog-surface mdc-dialog__surface">
                <div ref={modalRef} className="ng-star-inserted">
                  <div className="change-password-modal">
                    <div className="modal-header">
                      <h2>Download APK</h2>
                      <button
                        onClick={closeModal}
                        className="modal-close-btn mdc-button mat-mdc-button mat-unthemed mat-mdc-button-base"
                        type="button"
                      >
                        <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                        <div
                          role="img"
                          className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                          aria-hidden="true"
                          data-mat-icon-type="font"
                        >
                          close{" "}
                        </div>
                        <span className="mdc-button__label" />
                        <span className="mat-mdc-focus-indicator" />
                        <span className="mat-mdc-button-touch-target" />
                        <span className="mat-ripple mat-mdc-button-ripple" />
                      </button>
                    </div>
                    <div className="ng-pristine ng-invalid ng-touched">
                      <div className="promo-card">
                        <header className="promo-header">
                          <div className="header-content">
                            <img
                              src={images.install_android}
                              alt="install_android"
                            />
                            <h1 className="main-title">
                              Download APK for Premium Gaming Experience
                            </h1>
                          </div>
                        </header>

                        <main className="promo-body">
                          <p className="intro-text">
                            Kabhi-kabhi website slow ho sakti hai ya link update
                            ho jata hai, lekin hamara Official App aapko hamesha
                            connected rakhega 🚀
                          </p>

                          <h2 className="benefits-title">
                            App ke saath aapko milega:
                          </h2>

                          <ul className="benefits-list">
                            <li>
                              <strong>24×7 Instant Access</strong> – Har waqt
                              khelo bina rukawat
                            </li>
                            <li>
                              <strong>2X Faster Speed</strong> – Website se bhi
                              double fast loading
                            </li>
                            <li>
                              <strong>Secure Login</strong> – Aapka data hamesha
                              safe & protected
                            </li>
                            <li>
                              <strong>Non-Stop Gaming</strong> – No waiting, no
                              interruptions
                            </li>
                          </ul>

                          <p className="closing-text">
                            Yehi wajah hai ki sabse zyada serious players App
                            prefer karte hain. Aap bhi join karo unme aur pao ek
                            premium lifestyle experience 💎
                          </p>

                          <a
                            onClick={handleDownload}
                            className="download-button"
                          >
                            <GrAndroid className="android-icon" />
                            <span>Download Official App Now ↓</span>
                          </a>
                        </main>
                      </div>
                    </div>
                  </div>
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

export default DownloadAPK;
