import { useDispatch } from "react-redux";
import ModalWrapper from "../ModalWrapper/ModalWrapper";
import { setShowReferralModal } from "../../../redux/features/global/globalSlice";
import { handleCopyToClipBoard } from "../../../utils/handleCopyToClipBoard";
import { FaRegCopy } from "react-icons/fa";
import { useGetIndex } from "../../../hooks";
import { useLogo } from "../../../context/ApiProvider";

const Referral = () => {
  const { logo } = useLogo();
  const { data } = useGetIndex({
    type: "get_referral_code",
  });
  const dispatch = useDispatch();

  const close = () => {
    dispatch(setShowReferralModal(false));
  };

  const handleNavigateToTelegram = () => {
    const url = `https://t.me/share/url?url=${window.location.origin}&text=Hey Friend, look what i have for you found the best sports and casino betting site and i am introducing the same to you Its called ${window.location.origin}. Signup now using my refer code ${data?.result?.code}. I got my first withdrawal in less than 2 minutes. why dont you give it a try!`;

    window.open(url);
  };
  const handleNavigateToWhatsapp = () => {
    const url = `https://api.whatsapp.com/send/?text=Hey+Friend%2C+look+what+i+have+for+you+found+the+best+sports+and+casino+betting+site+and+i+am+introducing+the+same+to+you+Its+called+${window.location.origin}.+Signup+now+using+my+refer+code+${data?.result?.code}.+I+got+my+first+withdrawal+in+less+than+2+minutes%2C+why+dont+you+give+it+a+try%21&type=${window.location.origin}`;

    window.open(url);
  };

  return (
    <div className="cdk-overlay-container" style={{ zIndex: 2000 }}>
      <div className="cdk-overlay-backdrop cdk-overlay-dark-backdrop cdk-overlay-backdrop-showing"></div>
      <div
        className="cdk-global-overlay-wrapper"
        dir="ltr"
        style={{ justifyContent: "center", alignItems: "flex-end" }}
      >
        <div
          id="cdk-overlay-2"
          className="cdk-overlay-pane referral-dialog"
          style={{
            width: "100%",
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
            id="mat-mdc-dialog-2"
            role="dialog"
            aria-modal="true"
            style={{ "--mat-dialog-transition-duration": "150ms" }}
          >
            <div className="mdc-dialog__container">
              <div className="mat-mdc-dialog-surface mdc-dialog__surface">
                <ModalWrapper setModal={setShowReferralModal} redux={true}>
                  <div className="ng-star-inserted">
                    <div className="referral-modal">
                      <div className="modal-header">
                        {/* <div className="img-wrap"> */}
                        <img
                          alt="logo"
                          src={logo}
                          style={{ height: "50px" }}
                          className="ng-star-inserted"
                        />
                        {/* </div> */}
                        <button
                          onClick={close}
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
                      <div className="modal-body">
                        <h3>Refer and earn</h3>
                        <p>
                          Be our brand hero, refer your friend using your refer
                          code
                        </p>
                        <div className="referral-code">
                          <p
                            className="refer-code-text"
                            style={{ textTransform: "lowercase" }}
                          >
                            {data?.result?.link}
                          </p>
                          <button
                            className="btn secondary-btn"
                            onClick={() =>
                              handleCopyToClipBoard(data?.result?.link)
                            }
                          >
                            Copy
                          </button>
                        </div>
                        <div className="sharing">
                          <div className="icon-list">
                            <div
                              onClick={handleNavigateToWhatsapp}
                              className="icon-item ng-star-inserted"
                            >
                              <div className="icon-wrap">
                                <img
                                  alt="WhatsApp"
                                  src="https://ss.manage63.com/bmk-wl/commonAssets/whatsapp-icon.svg"
                                />
                              </div>
                              <p>WhatsApp</p>
                            </div>
                            <div
                              onClick={handleNavigateToTelegram}
                              className="icon-item ng-star-inserted"
                            >
                              <div className="icon-wrap">
                                <img
                                  alt="WhatsApp"
                                  src="https://ss.manage63.com/bmk-wl/commonAssets/telegram.svg"
                                />
                              </div>
                              <p>Telegram</p>
                            </div>
                            <div
                              className="icon-item"
                              onClick={() =>
                                handleCopyToClipBoard(data?.result?.link)
                              }
                            >
                              <div className="icon-wrap more">
                                <FaRegCopy />
                              </div>
                              <p>Copy Text</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ModalWrapper>
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

export default Referral;
