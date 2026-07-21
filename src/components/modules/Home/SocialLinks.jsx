import { useSelector } from "react-redux";
import { Settings } from "../../../api";
import images from "../../../assets/images";
import { useState } from "react";
import MiniGames from "../../modals/MiniGames/MiniGames";

const SocialLinks = () => {
  const { token } = useSelector((state) => state.auth);
  const [showMiniGamesModal, setShowMiniGamesModal] = useState(false);
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

      <div
        onClick={() => setShowMiniGamesModal(true)}
        className="btn-item ng-star-inserted"
        style={{ cursor: "pointer" }}
      >
        <div className="btn-wrap whatsapp">
          <img
            // style={{ width: "100px" }}
            alt="WhatsApp"
            src="/assets/uv_games-CkYT1PYz.gif"
          />
        </div>
      </div>
      {showMiniGamesModal && (
        <MiniGames setShowMiniGamesModal={setShowMiniGamesModal} />
      )}
    </div>
  );
};

export default SocialLinks;
