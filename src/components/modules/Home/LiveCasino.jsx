import { useDispatch, useSelector } from "react-redux";
import { useLiveCasinoWolfQuery } from "../../../hooks/liveCasinoWolf";
import { useNavigate } from "react-router-dom";
import { setShowLoginModal } from "../../../redux/features/global/globalSlice";
import useLanguage from "../../../hooks/use-language";
import { LanguageKey } from "../../../const";
import { useState } from "react";

const LiveCasino = () => {
  const [showAll, setShowAll] = useState(false);
  const { getLanguage } = useLanguage();
  const dispatch = useDispatch();
  const { data } = useLiveCasinoWolfQuery({
    gameList: "All",
    product: "All",
    isHome: true,
  });
  const { token } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const handleNavigate = (code, name) => {
    if (token) {
      navigate(`/casino/${name.replace(/ /g, "")}/${code}`);
    } else {
      dispatch(setShowLoginModal(true));
    }
  };

  return (
    <div className="casino-section live-casino game-play mt-2 mb-3 ng-star-inserted">
      <div className="game-play-heading">
        <h2>{getLanguage(LanguageKey.LIVE_CASINO)}</h2>
        <a
          onClick={() => setShowAll((prev) => !prev)}
          className="view-all-link ng-star-inserted"
        >
          {showAll
            ? getLanguage(LanguageKey.SHOW_LESS)
            : getLanguage(LanguageKey.ALL)}
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
        <ul
          // style={{ gridAutoColumns: "130px" }}
          className={`sRowScroll---- ${
            showAll
              ? "grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8"
              : "grid-flow-col grid-rows-3"
          }`}
        >
          {data?.data?.map((item) => {
            return (
              <li
                style={{
                  height: !showAll ? "190px" : "100%",
                  width: !showAll ? "130px" : "100%",
                }}
                onClick={() => handleNavigate(item?.game_id, item?.game_name)}
                key={item?.id}
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
                {/* <p className="total-players">
                  <span
                    role="img"
                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                    aria-hidden="true"
                    data-mat-icon-type="font"
                  >
                    group
                  </span>
                  901
                </p> */}
                {/* <div className="game-detail">
                  <p className="company-type">{item?.product}</p>
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

export default LiveCasino;
