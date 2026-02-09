import { useDispatch, useSelector } from "react-redux";
import { useLotusHomeLobby } from "../../hooks/lotusHomeLobby";
import { useNavigate } from "react-router-dom";
import { setShowLoginModal } from "../../redux/features/global/globalSlice";

const CasinoProviders = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);
  const { data } = useLotusHomeLobby({
    theme: "wolf",
  });
  const handleNavigateToIFrame = (code, name) => {
    if (token) {
      navigate(`/casino/${name.replace(/ /g, "")}/${code}`);
    } else {
      dispatch(setShowLoginModal(true));
    }
  };
  return (
    <div className="page-body">
      <div
        role="main"
        className="ion-content md content-ltr hydrated"
        style={{ "--offset-top": "0px", "--offset-bottom": "0px" }}
      >
        <div className="pagetab-body">
          <div className="pagetab-content">
            <div className="game-play-heading">
              <h2>Casino Providers</h2>
            </div>
            <div className="providers-list ng-star-inserted">
              <ul>
                {data?.casinoProviders?.map((item) => (
                  <li key={item?.product} className="p-item ng-star-inserted">
                    <a
                      onClick={() =>
                        handleNavigateToIFrame(item?.game_id, item?.game_name)
                      }
                      className="provider-item"
                    >
                      <div className="p-logo">
                        <img
                          alt="Overlay"
                          className="overlay-img"
                          src="https://ss.manage63.com/bmk-wl/commonAssets/frame.webp"
                        />
                        <img alt={item?.game_name} src={item?.url_thumb} />
                      </div>
                      <p>{item?.game_name}</p>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CasinoProviders;
