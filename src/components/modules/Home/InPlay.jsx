import { useSelector } from "react-redux";
import { useGroupQuery } from "../../../redux/features/events/events";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ScoreInfo from "./ScoreInfo";
import { MdOutlineSmartDisplay } from "react-icons/md";
import { GoClock } from "react-icons/go";
import { useLanguage } from "../../../context/LanguageProvider";
import { languageValue } from "../../../utils/language";
import { LanguageKey } from "../../../const";

const InPlay = () => {
  const { valueByLanguage } = useLanguage();
  const { group } = useSelector((state) => state.global);
  const { data } = useGroupQuery(
    { sportsType: group },
    {
      pollingInterval: 1000,
    },
  );

  const [categories, setCategories] = useState([]);
  const eventName = {
    1: languageValue(valueByLanguage, LanguageKey.FOOTBALL),
    2: languageValue(valueByLanguage, LanguageKey.TENNIS),
    4: languageValue(valueByLanguage, LanguageKey.CRICKET),
    5: languageValue(valueByLanguage, LanguageKey.KABADDI),
  };
  const navigate = useNavigate();
  const navigateGameList = (keys) => {
    navigate(`/event-details/${data[keys]?.eventTypeId}/${keys}`);
  };

  useEffect(() => {
    if (data) {
      const categories = Array.from(
        new Set(
          Object.values(data)
            .filter((item) => item.visible)
            .map((item) => item.eventTypeId),
        ),
      );
      const sortedCategories = categories.sort((a, b) => {
        const order = { 4: 0, 1: 1, 2: 2 };
        return order[a] - order[b];
      });
      setCategories(sortedCategories);
    }
  }, [data]);
  return (
    <div>
      {categories?.map((category) => {
        const filteredData = Object.entries(data)
          .filter(
            ([, value]) =>
              value.eventTypeId === category && value.visible === true,
          )
          .reduce((obj, [key, value]) => {
            obj[key] = value;
            return obj;
          }, {});
        return (
          <div
            key={category}
            className="sports-tab inplay-cont ng-star-inserted"
          >
            <div className="game-play-heading" tabIndex={0}>
              <h2>{eventName[category]}</h2>
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
            <div className="gWrap">
              <div className="sports-table notranslate ng-star-inserted">
                <div className="table-header">
                  <h3 className="card-title">
                    <GoClock style={{ marginLeft: "20px" }} />

                    <span>Teams</span>
                  </h3>
                  <div className="lay-back-wrap">
                    <h3 className="">Back</h3>
                    <h3 className="">Lay</h3>
                  </div>
                </div>
                <div className="table-body">
                  {data &&
                    Object.values(data).length > 0 &&
                    Object.keys(filteredData)
                      .sort((keyA, keyB) => data[keyA].sort - data[keyB].sort)
                      .map((keys, index) => {
                        if (!data?.[keys]?.visible) {
                          return null;
                        }

                        return (
                          <div
                            onClick={() => navigateGameList(keys)}
                            key={index}
                            className="table-item ng-star-inserted"
                          >
                            <div className="teamlist-info">
                              <ScoreInfo data={data} keys={keys} />

                              <h3 className="team-title">
                                <p className="ng-star-inserted">
                                  {/* <span
                                            role="img"
                                            className="mat-icon notranslate material-icons favorite mat-ligature-font mat-icon-no-color ng-star-inserted"
                                            aria-hidden="true"
                                            data-mat-icon-type="font"
                                          >
                                            star
                                          </span> */}
                                  <span className="team-name">
                                    {data[keys]?.player1}
                                  </span>
                                </p>
                                <p className="ng-star-inserted">
                                  <span className="team-name">
                                    {data[keys]?.player2}
                                  </span>
                                  {/* <img
                                    alt="Playing"
                                    src="https://ss.manage63.com/bmk-wl/commonAssets/batting-icon.svg"
                                    className="ng-star-inserted"
                                  /> */}
                                </p>
                              </h3>
                              <div className="inplay-wrap">
                                <span
                                  className="fancy-icon"
                                  style={{ display: "none" }}
                                >
                                  <img
                                    src="../../../assets/img/f-icon.svg"
                                    alt=""
                                  />
                                </span>
                                {data?.[keys]?.isTv === 1 && (
                                  <MdOutlineSmartDisplay
                                    size={15}
                                    color="var(--green-color)"
                                  />
                                )}
                              </div>
                            </div>
                            <div className="flex-row-right rt-wrap">
                              <div className="count-v-wrap ng-star-inserted">
                                <button className="count-value back-count mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base">
                                  <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                                  <span className="mdc-button__label">
                                    <h4>
                                      {" "}
                                      {data?.[keys]?.[0]?.ex?.availableToBack[0]
                                        ?.price || "-"}
                                    </h4>
                                    <p>
                                      {" "}
                                      {data?.[keys]?.[0]?.ex
                                        ?.availableToBack?.[0]?.size || "-"}
                                    </p>{" "}
                                  </span>
                                  <span className="mat-mdc-focus-indicator" />
                                  <span className="mat-mdc-button-touch-target" />
                                </button>
                                <button className="count-value lay-count mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base">
                                  <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                                  <span className="mdc-button__label">
                                    <h4>
                                      {" "}
                                      {data?.[keys]?.[0]?.ex
                                        ?.availableToLay?.[0]?.price || "-"}
                                    </h4>
                                    <p>
                                      {" "}
                                      {data?.[keys]?.[0]?.ex
                                        ?.availableToLay?.[0]?.size || "-"}
                                    </p>{" "}
                                  </span>
                                  <span className="mat-mdc-focus-indicator" />
                                  <span className="mat-mdc-button-touch-target" />
                                </button>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default InPlay;
