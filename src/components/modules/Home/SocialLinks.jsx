import { useSelector } from "react-redux";
import { Settings } from "../../../api";

const SocialLinks = () => {
  const { token } = useSelector((state) => state.auth);

  const navigateWhatsApp = () => {
    if (token && Settings?.branchWhatsapplink) {
      window.open(Settings?.branchWhatsapplink, "_blank");
    } else {
      window.open(Settings?.whatsapplink, "_blank");
    }
  };

  return (
    <div className="floating-btns">
      {(Settings?.branchWhatsapplink || Settings?.whatsapplink) && (
        <div
          onClick={navigateWhatsApp}
          className="btn-item ng-star-inserted"
          style={{ cursor: "pointer" }}
        >
          <div className="btn-wrap whatsapp">
            <img
              alt="WhatsApp"
              src="https://ss.manage63.com/bmk-wl/commonAssets/whatsapp-icon.svg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default SocialLinks;
