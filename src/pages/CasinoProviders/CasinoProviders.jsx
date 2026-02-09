import { useDispatch, useSelector } from "react-redux";
import { useLotusHomeLobby } from "../../hooks/lotusHomeLobby";
import { useNavigate } from "react-router-dom";
import { setShowLoginModal } from "../../redux/features/global/globalSlice";
import images from "../../assets/images";

const CasinoProviders = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);
  const { data } = useLotusHomeLobby({
    theme: "wolf",
    home: false,
  });
  const handleNavigateToIFrame = (code, name) => {
    if (token) {
      navigate(`/game-provider/${name}/${code}`);
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
        <div className="pagetab-body" style={{ padding: "15px 0px" }}>
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
                          src={images.frame}
                        />
                        <img alt={item?.game_name} src={item?.icon} />
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
