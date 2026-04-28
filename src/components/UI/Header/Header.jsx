import { Fragment, useEffect, useMemo, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useLogo } from "../../../context/ApiProvider";
import { useGroupQuery } from "../../../redux/features/events/events";
import NotLoggedIn from "./NotLoggedIn";
import { useDispatch, useSelector } from "react-redux";
import LoggedIn from "./LoggedIn";
import {
  setClosePopUpForForever,
  setHeaderHeight,
  setShowAPKModal,
  setShowAppPopUp,
  setShowLoginModal,
  setShowSidebar,
} from "../../../redux/features/global/globalSlice";
import { IoArrowBack } from "react-icons/io5";
import LatestEvent from "./LatestEvent";
import { removeHeaderPaths } from "../../../static/removeHeaderPaths";
import Language from "../../modals/Language/Language";
import Search from "./Search";
import { Settings } from "../../../api";
import AppPopup from "./AppPopUp";
import DownloadAPK from "../../modals/DownloadAPK/DownloadAPK";
import Notification from "./Notification";

const Header = () => {
  const headerRef = useRef(null);
  const location = useLocation();
  const [showLanguage, setShowLanguage] = useState(false);
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const { showAppPopUp, windowWidth, showAPKModal } = useSelector(
    (state) => state?.global,
  );
  const { data } = useGroupQuery(
    { sportsType: Number(0) },
    {
      pollingInterval: 1000,
    },
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
      },
    );
  }, [data]);

  const handleNavigateToIFrame = (code, name) => {
    if (token) {
      navigate(`/casino/${name.replace(/ /g, "")}/${code}`);
    } else {
      dispatch(setShowLoginModal(true));
    }
  };

  const shouldHideHeader = removeHeaderPaths.some((path) =>
    pathname.startsWith(path),
  );

  useEffect(() => {
    const closePopupForForever = localStorage.getItem("closePopupForForever");
    dispatch(setClosePopUpForForever(closePopupForForever ? true : false));
    const apk_modal_shown = sessionStorage.getItem("apk_modal_shown");
    if (location?.state?.pathname === "/apk" || location.pathname === "/apk") {
      sessionStorage.setItem("apk_modal_shown", true);
      localStorage.setItem("closePopupForForever", true);
      dispatch(setClosePopUpForForever(true));
      localStorage.removeItem("installPromptExpiryTime");
    } else {
      if (!apk_modal_shown) {
        dispatch(setShowAPKModal(true));
      }
      if (!closePopupForForever) {
        const expiryTime = localStorage.getItem("installPromptExpiryTime");
        const currentTime = new Date().getTime();

        if ((!expiryTime || currentTime > expiryTime) && Settings.apk_link) {
          localStorage.removeItem("installPromptExpiryTime");

          dispatch(setShowAppPopUp(true));
        }
      }
    }
  }, [
    dispatch,
    windowWidth,
    showAppPopUp,
    location?.state?.pathname,
    location.pathname,
  ]);

  useEffect(() => {
    const handleHeaderHeight = () => {
      if (headerRef.current) {
        const height = headerRef.current.getBoundingClientRect().height;
        dispatch(setHeaderHeight(height));
      }
    };
    handleHeaderHeight();
    window.addEventListener("resize", handleHeaderHeight);
    return () => window.removeEventListener("resize", handleHeaderHeight);
  }, [headerRef, dispatch, showAppPopUp]);

  return (
    <Fragment>
      {Settings.apk_link && showAPKModal && <DownloadAPK />}
      {showLanguage && <Language setShowLanguage={setShowLanguage} />}
      <div
        ref={headerRef}
        className="page-header page-body not-loggedIn"
        style={{
          minHeight: "42px",
          padding: "0px",
          background: "transparent",
          position: "fixed",
          left: "50%",
          transform: "translate(-50%)",
          width: "100%",
          maxWidth: "768px",
          zIndex: "9999",
          height: "100%",
          maxHeight: "fit-content",
          boxShadow: "0 4px 10px #8080804d",
        }}
      >
        <Notification />
        {Settings.apk_link && showAppPopUp && windowWidth < 1040 && (
          <AppPopup />
        )}
        <div>
          <div className="header-wrapper top-header">
            <div className="logo">
              {location?.pathname === "/" ? (
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
              ) : (
                <IoArrowBack
                  size={25}
                  color="#fff"
                  style={{ cursor: "pointer" }}
                  /* Navigate back */
                  onClick={() => {
                    navigate(-1);
                  }}
                />
              )}

              <img
                onClick={() => navigate("/")}
                alt="logo"
                src={logo}
                className="ng-star-inserted"
              />
            </div>
            <div className="header-right-cont" style={{ marginRight: "0px" }}>
              {token ? (
                <LoggedIn setShowLanguage={setShowLanguage} />
              ) : (
                <NotLoggedIn setShowLanguage={setShowLanguage} />
              )}
            </div>
          </div>
        </div>
        {!shouldHideHeader && (
          <div
            style={{
              position: "sticky",
              top: "0px",
              zIndex: 9999,
            }}
            className="ng-star-inserted"
          >
            <div className="pagetab-wrapper">
              <div className="forSearchBar">
                <Search />

                <LatestEvent />
              </div>
              <div className="pagetab-header">
                <div
                  onClick={() => handleNavigateToIFrame(204109, "jetx")}
                  className="pagetab-item highLightedGame"
                >
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
                <div
                  onClick={() => navigate("/tournament")}
                  className={`pagetab-item ng-star-inserted ${pathname === "/tournament" ? "active-link" : ""}`}
                >
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
                  className={`pagetab-item ng-star-inserted ${pathname === "/group/cricket/4" ? "active-link" : ""}`}
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
                    {groupedData?.cricket > 0 && (
                      <div className="wifi-symbol">
                        <div className="wifi-circle first" />
                        <div className="wifi-circle second" />
                      </div>
                    )}
                  </div>
                </div>
                <div
                  onClick={() => navigate("/group/football/1?type=inPlay")}
                  className={`pagetab-item ng-star-inserted ${pathname === "/group/football/1" ? "active-link" : ""}`}
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
                    {groupedData?.football > 0 && (
                      <div className="wifi-symbol">
                        <div className="wifi-circle first" />
                        <div className="wifi-circle second" />
                      </div>
                    )}
                  </div>
                </div>
                <div
                  onClick={() => navigate("/group/tennis/2?type=inPlay")}
                  className={`pagetab-item ng-star-inserted ${pathname === "/group/tennis/2" ? "active-link" : ""}`}
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
                    {groupedData?.tennis > 0 && (
                      <div className="wifi-symbol">
                        <div className="wifi-circle first" />
                        <div className="wifi-circle second" />
                      </div>
                    )}
                  </div>
                </div>
                <div
                  onClick={() => navigate("/group/kabaddi/5?type=inPlay")}
                  className={`pagetab-item ng-star-inserted ${pathname === "/group/kabaddi/5" ? "active-link" : ""}`}
                >
                  <div className="icon-wrap ng-star-inserted">
                    <svg
                      width={24}
                      height={24}
                      id="Layer_1"
                      data-name="Layer 1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 1019.73 925.87"
                    >
                      <path
                        d="M477.87,452.27q64,64,153.6,64l4.26,89.6q-121.59,0-217.6-89.6L388.27,486.4,290.13,588.8,384,678.4v256H298.67V712.53l-55.47-51.2V755.2L64,938.67,4.27,878.93l153.6-153.6L106.67,576c-8.53-25.6,4.27-46.93,25.6-64l140.8-140.8c17.07-21.33,38.4-29.87,59.73-29.87s34.13,4.27,46.93,12.8l98.14,98.14ZM1024,507.73H938.67V362.67l-76.8-29.87,38.4,187.73L942.93,742.4l38.4,187.73h-89.6L814.93,588.8l-89.6,85.33v256H640v-320l89.6-85.33L704,396.8c-25.6,25.6-55.47,51.2-89.6,68.27a179.32,179.32,0,0,1-106.67-51.2c68.27-12.8,115.2-46.94,145.07-98.14l42.67-68.26c25.6-42.67,64-55.47,110.93-34.14L1024,307.2V507.73Zm-537.6-320a85.34,85.34,0,1,1-85.33,85.34,85.58,85.58,0,0,1,85.33-85.34ZM704,12.8a85.34,85.34,0,1,1-85.33,85.33A85.58,85.58,0,0,1,704,12.8Z"
                        transform="translate(-4.27 -12.8)"
                        fill="#fff"
                      />
                    </svg>
                  </div>
                  <div className="tab-label ng-star-inserted">Kabaddi</div>
                  <div className="badgeWrapper ng-star-inserted">
                    {groupedData?.kabaddi > 0 && (
                      <div className="badge">{groupedData?.kabaddi}</div>
                    )}
                    {groupedData?.kabaddi > 0 && (
                      <div className="wifi-symbol">
                        <div className="wifi-circle first" />
                        <div className="wifi-circle second" />
                      </div>
                    )}
                  </div>
                </div>
                <div
                  onClick={() => navigate("/group/politics/6?type=inPlay")}
                  className={`pagetab-item ng-star-inserted ${pathname === "/group/politics/6" ? "active-link" : ""}`}
                >
                  <div className="icon-wrap ng-star-inserted">
                    <img alt="Tab Icon" src="/assets/poll.svg" />
                  </div>
                  <div className="tab-label ng-star-inserted">Politics</div>
                  <div className="badgeWrapper ng-star-inserted">
                    {groupedData?.politics > 0 && (
                      <div className="badge">{groupedData?.politics}</div>
                    )}
                    {groupedData?.politics > 0 && (
                      <div className="wifi-symbol">
                        <div className="wifi-circle first" />
                        <div className="wifi-circle second" />
                      </div>
                    )}
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
                <div
                  onClick={() => navigate("/crash-games")}
                  className={`pagetab-item ng-star-inserted ${pathname === "/crash-games" ? "active-link" : ""}`}
                >
                  <div className="icon-wrap crash-icon">
                    <img
                      alt="Tab Icon"
                      src="https://ss.manage63.com/bmk-wl/commonAssets/go-crash-icon.svg"
                    />
                  </div>
                  <div className="tab-label">Go Crash</div>
                </div>
                <div
                  onClick={() => navigate("/instant-games")}
                  className={`pagetab-item ng-star-inserted ${pathname === "/instant-games" ? "active-link" : ""}`}
                >
                  <div className="icon-wrap">
                    <img
                      alt="Tab Icon"
                      src="https://ss.manage63.com/bmk-wl/commonAssets/instant_game.svg"
                    />
                  </div>
                  <div className="tab-label">Instant Games</div>
                </div>
                <div
                  onClick={() => navigate("/game-shows")}
                  className={`pagetab-item ng-star-inserted ${pathname === "/game-shows" ? "active-link" : ""}`}
                >
                  <div className="icon-wrap">
                    <img
                      alt="Tab Icon"
                      src="https://ss.manage63.com/bmk-wl/commonAssets/gaming_show.svg"
                    />
                  </div>
                  <div className="tab-label">Game Shows</div>
                </div>
                <div
                  onClick={() => navigate("/indian-cards")}
                  className={`pagetab-item ng-star-inserted ${pathname === "/indian-cards" ? "active-link" : ""}`}
                >
                  <div className="icon-wrap">
                    <img
                      alt="Tab Icon"
                      src="https://ss.manage63.com/bmk-wl/commonAssets/go-casino-icon.svg"
                    />
                  </div>
                  <div className="tab-label">Indian Cards</div>
                </div>
                <div
                  onClick={() => navigate("/live-casino")}
                  className={`pagetab-item ng-star-inserted ${pathname === "/live-casino" ? "active-link" : ""}`}
                >
                  <div className="icon-wrap">
                    <img
                      alt="Tab Icon"
                      src="https://ss.manage63.com/bmk-wl/commonAssets/chips-header-icon.svg"
                    />
                  </div>
                  <div className="tab-label">Live Casino</div>
                </div>
                <div
                  onClick={() => navigate("/slots")}
                  className={`pagetab-item ng-star-inserted ${pathname === "/slots" ? "active-link" : ""}`}
                >
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
