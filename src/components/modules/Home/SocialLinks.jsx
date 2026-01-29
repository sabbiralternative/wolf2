import { useSelector } from "react-redux";
import useWhatsApp from "../../../hooks/whatsapp";

const SocialLinks = () => {
  const { token } = useSelector((state) => state.auth);
  const { data: socialLink } = useWhatsApp();

  const navigateWhatsApp = () => {
    if (token && socialLink?.branchWhatsapplink) {
      window.open(socialLink?.branchWhatsapplink, "_blank");
    } else {
      window.open(socialLink?.whatsapplink, "_blank");
    }
  };

  return (
    <div className="floating-btns">
      {(socialLink?.branchWhatsapplink || socialLink?.whatsapplink) && (
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
