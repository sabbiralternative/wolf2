import { useMac88Query } from "../../../hooks/mac88";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setShowLoginModal } from "../../../redux/features/global/globalSlice";

const CardGames = () => {
  const dispatch = useDispatch();
  const { data } = useMac88Query({
    gameList: "All",
    product: "All",
    isHome: true,
  });
  const { token } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const handleCasino = (code, name) => {
    if (token) {
      navigate(`/casino/${name.replace(/ /g, "")}/${code}`);
    } else {
      dispatch(setShowLoginModal(true));
    }
  };

  return (
    <div className="casino-section go-casino game-play mt-2 mb-3 ng-star-inserted">
      <div className="game-play-heading">
        <h2>Card Games</h2>
        <a className="view-all-link ng-star-inserted">
          All
          <span
            role="img"
            className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
            aria-hidden="true"
            data-mat-icon-type="font"
          >
            chevron_right
          </span>
        </a>
      </div>
      <div className="game-type-list ng-star-inserted">
        <ul style={{ gridAutoColumns: "130px" }} className="sRowScroll">
          {data?.data?.map((item) => {
            return (
              <li
                style={{ height: "190px", width: "130px" }}
                onClick={() => handleCasino(item?.game_id, item?.game_name)}
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
                    src={item?.img}
                  />
                </a>
                {/* <p className="total-players">
                  <span
                    role="img"
                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                    aria-hidden="true"
                    data-mat-icon-type="font"
                  >
                    group
                  </span>
                  1331
                </p> */}
                {/* <div className="game-detail">
                  <p className="company-type">SPRIBE</p>
                  <p className="game-name">{item?.game_name}</p>
                </div> */}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default CardGames;
