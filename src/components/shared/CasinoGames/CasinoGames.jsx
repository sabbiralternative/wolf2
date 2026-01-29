import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setShowLoginModal } from "../../../redux/features/global/globalSlice";

const CasinoGames = ({ data }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);

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
            {data?.companyListData?.map((company) => {
              return (
                <li key={company?.product} className="p-item ng-star-inserted">
                  <a className="provider-item">
                    <div className="p-logo">
                      <img src={company?.bw_icon_img} alt={company?.product} />
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
          {data &&
            Object.keys(data?.gameList).map((gameTitle, index) => {
              return (
                <div
                  key={gameTitle}
                  className={`casino-section live-casino game-play mt-2 mb-3 notranslate f-order-${index + 1} ng-star-inserted`}
                >
                  <div className="game-play-heading ng-star-inserted">
                    <h2>{gameTitle}</h2>
                  </div>
                  <div className="game-type-list ng-star-inserted">
                    <ul
                      style={{ gridAutoColumns: "130px" }}
                      className="sRowScroll"
                    >
                      {data?.gameList[gameTitle].map((item) => {
                        return (
                          <li
                            style={{ height: "190px", width: "130px" }}
                            onClick={() =>
                              handleNavigateToIFrame(
                                item?.game_id,
                                item?.game_name,
                              )
                            }
                            key={item?.game_id}
                            className="ng-star-inserted"
                          >
                            <a style={{ height: "100%" }} className="active">
                              <img
                                style={{
                                  aspectRatio: "3/4",
                                  borderRadius: "10px",
                                  height: "100%",
                                  maxHeight: "100%",
                                }}
                                alt=""
                                src={item?.url_thumb}
                              />
                            </a>
                            <p style={{}} className="total-players">
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
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default CasinoGames;
