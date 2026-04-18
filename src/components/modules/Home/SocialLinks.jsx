import { useSelector } from "react-redux";
import { Settings } from "../../../api";
import images from "../../../assets/images";

const SocialLinks = () => {
  const { token } = useSelector((state) => state.auth);

  const navigateWhatsApp = () => {
    if (token && Settings?.branchWhatsapplink) {
      window.open(Settings?.branchWhatsapplink, "_blank");
    } else {
      window.open(Settings?.whatsapplink, "_blank");
    }
  };
  const handleNavigateSocialLink = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div className="floating-btns">
      {Settings?.instagramLink && (
        <div
          onClick={() => handleNavigateSocialLink(Settings?.instagramLink)}
          className="btn-item ng-star-inserted"
          style={{ cursor: "pointer" }}
        >
          <div className="btn-wrap whatsapp">
            <img alt="WhatsApp" src={images.instagram} />
          </div>
        </div>
      )}
      {Settings?.telegramLink && (
        <div
          onClick={() => handleNavigateSocialLink(Settings?.telegramLink)}
          className="btn-item ng-star-inserted"
          style={{ cursor: "pointer" }}
        >
          <div className="btn-wrap whatsapp">
            <img alt="WhatsApp" src={images.telegram} />
          </div>
        </div>
      )}
      {(Settings?.branchWhatsapplink || Settings?.whatsapplink) && (
        <div
          onClick={navigateWhatsApp}
          className="btn-item ng-star-inserted"
          style={{ cursor: "pointer" }}
        >
          <div className="btn-wrap whatsapp">
            <img alt="WhatsApp" src={images.whatsAppSVG} />
          </div>
        </div>
      )}
    </div>
  );
};

export default SocialLinks;
