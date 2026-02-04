import { useDispatch, useSelector } from "react-redux";
import { useGetIndex } from "../../hooks";
import { useNavigate } from "react-router-dom";
import { setShowLoginModal } from "../../redux/features/global/globalSlice";

const CrashGames = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);
  const { data } = useGetIndex({
    type: "wolf_casino",
    category: "crash_games",
    provider: "all",
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

  return (
    <div className="page-body">
      <div className="providers-section ng-star-inserted">
        <div className="providers-list">
          <ul className="sRowScroll">
            <li className="p-item lobby-item">
              <a className="provider-item active">
                <div className="p-logo">
                  <img
                    src="https://ss.manage63.com/bmk-wl/commonAssets/lobby-icon.png"
                    alt="Lobby"
                  />
                </div>
                <p>Lobby</p>
              </a>
            </li>
            {data?.result?.game_providers?.map((provider, index) => {
              return (
                <li key={index} className="p-item ng-star-inserted">
                  <a className="provider-item">
                    <div className="p-logo">
                      <img src={provider?.bw_icon_img} alt={provider?.name} />
                    </div>
                  </a>
                </li>
              );
            })}
          </ul>
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
                {data?.result?.game_list.map((item) => {
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
                      <p className="total-players">
                        <div
                          style={{
                            fontSize: "15px",
                            height: "15px",
                            width: "15px",
                          }}
                          role="img"
                          className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                          aria-hidden="true"
                          data-mat-icon-type="font"
                        >
                          group
                        </div>
                        {item?.active_players}
                      </p>
                      <div className="game-detail">
                        <p className="company-type">InOut Games</p>
                        <p className="game-name">Chicken Road 2</p>
                      </div>
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

export default CrashGames;
