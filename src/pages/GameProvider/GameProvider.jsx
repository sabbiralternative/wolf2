import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { setShowLoginModal } from "../../redux/features/global/globalSlice";
import { useLotusHomeLobby } from "../../hooks/lotusHomeLobby";

const GameProvider = () => {
  const { game_name, game_id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);
  const { data } = useLotusHomeLobby({
    provider: game_name,
  });
  const { data: allProviders } = useLotusHomeLobby({
    theme: "wolf",
  });

  if (!data) {
    return null;
  }

  const handleNavigateToIFrame = (code, name) => {
    if (token) {
      navigate(`/casino/${name.replace(/ /g, "")}/${code}`);
    } else {
      dispatch(setShowLoginModal(true));
    }
  };

  const clickedProvider = allProviders?.casinoProviders?.find(
    (item) => item?.game_name === game_name && item?.game_id === game_id,
  );

  return (
    <div className="page-body">
      <div className="providers-section ng-star-inserted">
        <div className="providers-list">
          <div className="provider-title ng-star-inserted">
            <div className="p-logo">
              <img alt={game_name} src={clickedProvider?.icon} />
            </div>
            <p>{game_name}</p>
          </div>
        </div>
      </div>
      <div
        className="cdk-virtual-scroll-viewport cdk-virtual-scrollable cdk-virtual-scroll-orientation-vertical ng-star-inserted"
        style={{ height: "100%" }}
      >
        <div
          className="cdk-virtual-scroll-content-wrapper"
          style={{ transform: "translateY(0px)" }}
        >
          <div
            className={`casino-section live-casino game-play mt-2 mb-3 notranslate f-order-1 ng-star-inserted`}
          >
            {/* <div className="game-play-heading ng-star-inserted">
                    <h2>{gameTitle}</h2>
                  </div> */}
            <div className="game-type-list ng-star-inserted">
              <ul
                style={{ display: "grid", padding: "0px 10px" }}
                className="crash_games_container"
              >
                {data?.map((item) => {
                  return (
                    <li
                      // style={{ height: "190px" }}
                      onClick={() =>
                        handleNavigateToIFrame(item?.game_id, item?.game_name)
                      }
                      key={item?.game_id}
                      className="ng-star-inserted"
                    >
                      <a style={{ height: "100%" }} className="active">
                        <img
                          style={{ height: "100%", maxHeight: "100%" }}
                          alt=""
                          src={item?.url_thumb}
                        />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameProvider;
