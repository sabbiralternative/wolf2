import { Fragment, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useLogo } from "../../../context/ApiProvider";
import { useGroupQuery } from "../../../redux/features/events/events";
import NotLoggedIn from "./NotLoggedIn";
import { useDispatch, useSelector } from "react-redux";
import LoggedIn from "./LoggedIn";
import { setShowSidebar } from "../../../redux/features/global/globalSlice";

const Header = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const { data } = useGroupQuery(
    { sportsType: Number(0) },
    {
      pollingInterval: 1000,
    }
  );

  const { logo } = useLogo();
  const navigate = useNavigate();

  const groupedData = useMemo(() => {
    if (!data) return { cricket: 0, football: 0, tennis: 0 };

    return Object.values(data).reduce(
      (acc, value) => {
        if (!value.visible) return acc;

        if (value.eventTypeId === 4) acc.cricket++;
        if (value.eventTypeId === 2) acc.tennis++;
        if (value.eventTypeId === 1) acc.football++;

        return acc;
      },
      {
        cricket: 0,
        football: 0,
        tennis: 0,
      }
    );
  }, [data]);

  return (
    <Fragment>
      <div
        className="page-header page-body not-loggedIn"
        style={{
          minHeight: "42px",
          padding: "0px",
          background: "transparent",
          boxShadow: "0 4px 10px #8080804d",
        }}
      >
        <div>
          <div className="header-wrapper top-header">
            <div className="logo">
              <span
                onClick={() => dispatch(setShowSidebar(true))}
                style={{ color: "white" }}
                role="img"
                className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color ng-star-inserted"
                aria-hidden="true"
                data-mat-icon-type="font"
              >
                menu
              </span>
              <img
                onClick={() => navigate("/")}
                alt="logo"
                src={logo}
                className="ng-star-inserted"
              />
            </div>
            <div className="header-right-cont">
              {token ? <LoggedIn /> : <NotLoggedIn />}

              <p className="notranslate selected-lang ng-star-inserted">En</p>
            </div>
          </div>
        </div>
        {!pathname.includes("/casino/") && (
          <div
            style={{ position: "sticky", top: "0px", zIndex: 9999 }}
            className="ng-star-inserted"
          >
            <div className="pagetab-wrapper">
              <div className="forSearchBar">
                <div className="ng-star-inserted">
                  <div className="forSearchBar-internal">
                    <div className="ng-star-inserted">
                      <div className="search-wrapper">
                        <div className="search-field">
                          <span
                            role="img"
                            className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                            aria-hidden="true"
                            data-mat-icon-type="font"
                          >
                            search
                          </span>
                          <input
                            type="text"
                            placeholder="Search Matches / Casino Games"
                            className="ng-untouched ng-pristine ng-valid"
                          />
                        </div>
                        <span
                          role="img"
                          className="mat-icon notranslate material-icons search-btn mat-ligature-font mat-icon-no-color"
                          aria-hidden="true"
                          data-mat-icon-type="font"
                        >
                          search
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="latest-events ng-star-inserted">
                  <div className="le-item ng-star-inserted">
                    <h2 className="ng-star-inserted">
                      <span className="blink-it">
                        Mumbai Indians W v Delhi Capitals W
                      </span>
                    </h2>
                  </div>
                  <div className="le-item ng-star-inserted">
                    <h2 className="ng-star-inserted">
                      <span className="blink-it">
                        Joburg Super Kings v Mi Cape Town
                      </span>
                    </h2>
                  </div>
                  <div className="le-item ng-star-inserted">
                    <h2 className="ng-star-inserted">
                      <span className="blink-it">
                        Sydney Sixers v Hobart Hurricanes
                      </span>
                    </h2>
                  </div>
                  <div className="le-item ng-star-inserted">
                    <h2 className="ng-star-inserted">
                      <span className="blink-it">
                        Wellington Firebirds v Northern Brave
                      </span>
                    </h2>
                  </div>
                  <div className="le-item ng-star-inserted">
                    <h2 className="ng-star-inserted">
                      <span className="blink-it">India v New Zealand</span>
                    </h2>
                  </div>
                  <div className="le-item ng-star-inserted">
                    <h2 className="ng-star-inserted">
                      <span className="blink-it">
                        Adelaide Strikers v Perth Scorchers
                      </span>
                    </h2>
                  </div>
                  <div className="le-item ng-star-inserted">
                    <h2 className="ng-star-inserted">
                      <span className="blink-it">Sri Lanka v Pakistan</span>
                    </h2>
                  </div>
                </div>
              </div>
              <div className="pagetab-header">
                <div className="pagetab-item highLightedGame">
                  <div className="highlighted-game ng-star-inserted">
                    <div className="icon-wrap jetx-icon">
                      <img
                        src="https://ss.manage63.com/bmk-wl/commonAssets/jetx.png"
                        alt="JetX"
                        className="blink-it"
                      />
                    </div>
                    <div className="tab-label">JetX</div>
                  </div>
                </div>
                <div className="pagetab-item ng-star-inserted">
                  <div className="icon-wrap ng-star-inserted">
                    <img
                      alt="Tab Icon"
                      src="https://cdnimg.manage63.com/cricflags/trophy.svg"
                    />
                  </div>
                  <div className="tab-label ng-star-inserted">Tournaments</div>
                </div>
                <div
                  onClick={() => navigate("/group/cricket/4?type=inPlay")}
                  className="pagetab-item ng-star-inserted"
                >
                  <div className="icon-wrap ng-star-inserted">
                    <img
                      alt="Tab Icon"
                      src="https://cdnimg.manage63.com/games_icon/ball.svg"
                    />
                  </div>
                  <div className="tab-label ng-star-inserted">Cricket</div>
                  <div className="badgeWrapper ng-star-inserted">
                    {groupedData?.cricket > 0 && (
                      <div className="badge">{groupedData?.cricket}</div>
                    )}

                    <div className="wifi-symbol">
                      <div className="wifi-circle first" />
                      <div className="wifi-circle second" />
                    </div>
                  </div>
                </div>
                <div
                  onClick={() => navigate("/group/football/1?type=inPlay")}
                  className="pagetab-item ng-star-inserted"
                >
                  <div className="icon-wrap ng-star-inserted">
                    <img
                      alt="Tab Icon"
                      src="https://cdnimg.manage63.com/games_icon/soccer.svg"
                    />
                  </div>
                  <div className="tab-label ng-star-inserted">Soccer</div>
                  <div className="badgeWrapper ng-star-inserted">
                    {groupedData?.football > 0 && (
                      <div className="badge">{groupedData?.football}</div>
                    )}
                    <div className="wifi-symbol">
                      <div className="wifi-circle first" />
                      <div className="wifi-circle second" />
                    </div>
                  </div>
                </div>
                <div
                  onClick={() => navigate("/group/tennis/2?type=inPlay")}
                  className="pagetab-item ng-star-inserted"
                >
                  <div className="icon-wrap ng-star-inserted">
                    <img
                      alt="Tab Icon"
                      src="https://cdnimg.manage63.com/games_icon/tennis.svg"
                    />
                  </div>
                  <div className="tab-label ng-star-inserted">Tennis</div>
                  <div className="badgeWrapper ng-star-inserted">
                    {groupedData?.tennis > 0 && (
                      <div className="badge">{groupedData?.tennis}</div>
                    )}
                    <div className="wifi-symbol">
                      <div className="wifi-circle first" />
                      <div className="wifi-circle second" />
                    </div>
                  </div>
                </div>
                <div
                  className="pagetab-item"
                  style={{ display: "none" }}
                  tabIndex={0}
                >
                  <div className="icon-wrap crash-icon">
                    <img
                      alt="Tab Icon"
                      src="https://ss.manage63.com/bmk-wl/commonAssets/horse-icon.svg"
                    />
                  </div>
                  <div className="tab-label">Horse</div>
                </div>
                <div
                  className="pagetab-item"
                  style={{ display: "none" }}
                  tabIndex={0}
                >
                  <div className="icon-wrap crash-icon">
                    <img
                      alt="Tab Icon"
                      src="https://ss.manage63.com/bmk-wl/commonAssets/greyhound-icon.svg"
                    />
                  </div>
                  <div className="tab-label">Greyhound</div>
                </div>
                <div className="pagetab-item ng-star-inserted">
                  <div className="icon-wrap crash-icon">
                    <img
                      alt="Tab Icon"
                      src="https://ss.manage63.com/bmk-wl/commonAssets/go-crash-icon.svg"
                    />
                  </div>
                  <div className="tab-label">Go Crash</div>
                </div>
                <div className="pagetab-item ng-star-inserted">
                  <div className="icon-wrap">
                    <img
                      alt="Tab Icon"
                      src="https://ss.manage63.com/bmk-wl/commonAssets/instant_game.svg"
                    />
                  </div>
                  <div className="tab-label">Instant Games</div>
                </div>
                <div className="pagetab-item ng-star-inserted">
                  <div className="icon-wrap">
                    <img
                      alt="Tab Icon"
                      src="https://ss.manage63.com/bmk-wl/commonAssets/gaming_show.svg"
                    />
                  </div>
                  <div className="tab-label">Game Shows</div>
                </div>
                <div className="pagetab-item ng-star-inserted">
                  <div className="icon-wrap">
                    <img
                      alt="Tab Icon"
                      src="https://ss.manage63.com/bmk-wl/commonAssets/go-casino-icon.svg"
                    />
                  </div>
                  <div className="tab-label">Go Casino</div>
                </div>
                <div className="pagetab-item ng-star-inserted">
                  <div className="icon-wrap">
                    <img
                      alt="Tab Icon"
                      src="https://ss.manage63.com/bmk-wl/commonAssets/chips-header-icon.svg"
                    />
                  </div>
                  <div className="tab-label">Live Casino</div>
                </div>
                <div className="pagetab-item ng-star-inserted">
                  <div className="icon-wrap">
                    <img
                      alt="Tab Icon"
                      src="https://ss.manage63.com/bmk-wl/commonAssets/casino-icon.svg"
                    />
                  </div>
                  <div className="tab-label">Slots</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default Header;
