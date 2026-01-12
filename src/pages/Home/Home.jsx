/* eslint-disable react/no-unknown-property */
const Home = () => {
  return (
    <div className="mat-drawer-container mat-sidenav-container sidenav-container">
      <div className="mat-drawer-backdrop ng-star-inserted" />
      <div
        tabIndex={0}
        className="cdk-visually-hidden cdk-focus-trap-anchor"
        aria-hidden="true"
      />
      <div
        tabIndex={-1}
        mode="over"
        opened="false"
        className="mat-drawer mat-sidenav left-sidemenu ng-tns-c3816625663-0 ng-trigger ng-trigger-transform mat-drawer-over ng-star-inserted"
        style={{ boxShadow: "none", visibility: "hidden" }}
      >
        <div
          cdkscrollable
          className="mat-drawer-inner-container ng-tns-c3816625663-0"
        >
          <div className="sidemenu-wrapper ng-tns-c3816625663-0">
            <div className="sidemenu-header">
              <div className="logo">
                <div className="img-wrap">
                  <img
                    alt="logo"
                    src="https://ss.manage63.com/bmk-wl/wl/wolf365/img/logo.svg"
                    className="ng-star-inserted"
                    style={{}}
                  />
                </div>
                <div className="closeMenu">
                  <button
                    mat-fab
                    aria-label="close button"
                    mat-ripple-loader-uninitialized
                    mat-ripple-loader-class-name="mat-mdc-button-ripple"
                    className="mdc-fab mat-mdc-fab mat-accent mat-mdc-button-base"
                  >
                    <span className="mat-mdc-button-persistent-ripple mdc-fab__ripple" />
                    <span
                      role="img"
                      className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                      aria-hidden="true"
                      data-mat-icon-type="font"
                    >
                      chevron_left
                    </span>
                    <span className="mdc-button__label" />
                    <span className="mat-mdc-focus-indicator" />
                    <span className="mat-mdc-button-touch-target" />
                  </button>
                </div>
              </div>
              <div className="user-details ng-star-inserted" style={{}}>
                <p>
                  <span
                    role="img"
                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                    aria-hidden="true"
                    data-mat-icon-type="font"
                  >
                    person
                  </span>
                  Guest User
                </p>
              </div>
            </div>
            <div className="sidemenu-list">
              <ul className="smenu-wrap top">
                <li hidden className="smenu-item">
                  <a className="smenu-link">
                    <img
                      alt="Menu Icon"
                      src="https://ss.manage63.com/bmk-wl/commonAssets/sidenav-reward.svg"
                    />
                    <span>Have a promo/refer code</span>
                  </a>
                  <div className="refer-code">
                    <input type="text" placeholder="Enter Promo/Refer code" />
                    <p
                      className="timer text-danger"
                      style={{ display: "none" }}
                    >
                      23:03
                    </p>
                    <button className="btn secondary-btn">Submit</button>
                  </div>
                </li>
                <li
                  routerlink="/profile"
                  routerlinkactive="active-link"
                  className="smenu-item"
                  tabIndex={0}
                >
                  <a className="smenu-link">
                    <img
                      alt="Menu Icon"
                      src="https://ss.manage63.com/bmk-wl/commonAssets/sidenav_profile.svg"
                    />
                    <span>Profile</span>
                  </a>
                </li>
                <li
                  routerlinkactive="active-link"
                  className="smenu-item ng-star-inserted"
                  style={{}}
                >
                  <a className="smenu-link">
                    <img
                      alt="Menu Icon"
                      src="https://ss.manage63.com/bmk-wl/commonAssets/sidenav_bank.svg"
                    />
                    <span>Withdrawal Details</span>
                  </a>
                </li>
                <li routerlinkactive="active-link" className="smenu-item">
                  <a className="smenu-link">
                    <img
                      alt="Menu Icon"
                      src="https://ss.manage63.com/bmk-wl/commonAssets/sidenav__ac_statement.svg"
                    />
                    <span>Account Statement</span>
                  </a>
                </li>
                <li routerlinkactive="active-link" className="smenu-item">
                  <a className="smenu-link">
                    <img
                      alt="Menu Icon"
                      src="https://ss.manage63.com/bmk-wl/commonAssets/sidenav_activebets.svg"
                    />
                    <span>Active Bets</span>
                  </a>
                </li>
                <li className="smenu-item">
                  <a className="smenu-link">
                    <img
                      alt="Menu Icon"
                      src="https://ss.manage63.com/bmk-wl/commonAssets/sidenav_notification.svg"
                    />
                    <span>Notifications</span>
                  </a>
                </li>
                <li
                  routerlink="/rules"
                  routerlinkactive="active-link"
                  className="smenu-item"
                  tabIndex={0}
                >
                  <a className="smenu-link">
                    <img
                      alt="Menu Icon"
                      src="https://ss.manage63.com/bmk-wl/commonAssets/sidenav_rules.svg"
                    />
                    <span>Rules</span>
                  </a>
                </li>
              </ul>
              <ul className="smenu-wrap bottom">
                <li className="smenu-item social-links-wrap ng-star-inserted">
                  <label>Join us Now</label>
                  <div className="social-links">
                    <a className="ng-star-inserted">
                      <img
                        alt=""
                        src="https://ss.manage63.com/bmk-wl/commonAssets/icon_dark_facebook.svg"
                      />
                    </a>
                    <a className="ng-star-inserted">
                      <img
                        alt=""
                        src="https://ss.manage63.com/bmk-wl/commonAssets/icon_dark_instagram.svg"
                      />
                    </a>
                    <a className="ng-star-inserted">
                      <img
                        alt=""
                        src="https://ss.manage63.com/bmk-wl/commonAssets/icon_dark_telegram.svg"
                      />
                    </a>
                  </div>
                </li>
                <li className="smenu-item">
                  <div className="action-btn ng-star-inserted" style={{}}>
                    <button className="btn secondary-btn notranslate">
                      Login | Signup
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div
        tabIndex={0}
        className="cdk-visually-hidden cdk-focus-trap-anchor"
        aria-hidden="true"
      />
      <div className="mat-sidenav-content">
        <div _nghost-ng-c3950294213 className="ng-star-inserted">
          <div className="main">
            <div className="container">
              <div className="page-header not-loggedIn">
                <div _nghost-ng-c2239230737>
                  <div className="header-wrapper top-header">
                    <div className="logo">
                      <span
                        role="img"
                        className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color ng-star-inserted"
                        aria-hidden="true"
                        data-mat-icon-type="font"
                      >
                        menu
                      </span>
                      <img
                        alt="logo"
                        src="https://ss.manage63.com/bmk-wl/wl/wolf365/img/logo.svg"
                        className="ng-star-inserted"
                      />
                    </div>
                    <div className="header-right-cont">
                      <div className="not-loggedIn ng-star-inserted">
                        <button
                          mat-flat-button
                          className="btn dark-outlined-btn mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base"
                          mat-ripple-loader-uninitialized
                          mat-ripple-loader-class-name="mat-mdc-button-ripple"
                        >
                          <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                          <span className="mdc-button__label">
                            Login | Signup
                          </span>
                          <span className="mat-mdc-focus-indicator" />
                          <span className="mat-mdc-button-touch-target" />
                        </button>
                        <button
                          mat-flat-button
                          className="btn dark-outlined-btn demo-btn mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base"
                          mat-ripple-loader-uninitialized
                          mat-ripple-loader-class-name="mat-mdc-button-ripple"
                        >
                          <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                          <span className="mdc-button__label">Demo ID</span>
                          <span className="mat-mdc-focus-indicator" />
                          <span className="mat-mdc-button-touch-target" />
                        </button>
                      </div>
                      <p className="notranslate selected-lang ng-star-inserted">
                        En
                      </p>
                    </div>
                  </div>
                </div>
                <div />
                <div />
              </div>
              <div className="page-body">
                <div className="ng-star-inserted">
                  <div className="pagetab-wrapper">
                    <div className="forSearchBar">
                      <div _nghost-ng-c3561380397 className="ng-star-inserted">
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
                            <span className="blink-it">
                              India v New Zealand
                            </span>
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
                            <span className="blink-it">
                              Sri Lanka v Pakistan
                            </span>
                          </h2>
                        </div>
                      </div>
                    </div>
                    <div className="pagetab-header">
                      <div className="pagetab-item highLightedGame">
                        <div
                          routerlinkactive="active-link"
                          className="highlighted-game ng-star-inserted"
                        >
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
                        <div className="tab-label ng-star-inserted">
                          Tournaments
                        </div>
                      </div>
                      <div className="pagetab-item ng-star-inserted">
                        <div className="icon-wrap ng-star-inserted">
                          <img
                            alt="Tab Icon"
                            src="https://cdnimg.manage63.com/games_icon/ball.svg"
                          />
                        </div>
                        <div className="tab-label ng-star-inserted">
                          Cricket
                        </div>
                        <div className="badgeWrapper ng-star-inserted">
                          <div className="badge">2</div>
                          <div className="wifi-symbol">
                            <div className="wifi-circle first" />
                            <div className="wifi-circle second" />
                          </div>
                        </div>
                      </div>
                      <div className="pagetab-item ng-star-inserted">
                        <div className="icon-wrap ng-star-inserted">
                          <img
                            alt="Tab Icon"
                            src="https://cdnimg.manage63.com/games_icon/soccer.svg"
                          />
                        </div>
                        <div className="tab-label ng-star-inserted">Soccer</div>
                        <div className="badgeWrapper ng-star-inserted">
                          <div className="badge">5</div>
                          <div className="wifi-symbol">
                            <div className="wifi-circle first" />
                            <div className="wifi-circle second" />
                          </div>
                        </div>
                      </div>
                      <div className="pagetab-item ng-star-inserted">
                        <div className="icon-wrap ng-star-inserted">
                          <img
                            alt="Tab Icon"
                            src="https://cdnimg.manage63.com/games_icon/tennis.svg"
                          />
                        </div>
                        <div className="tab-label ng-star-inserted">Tennis</div>
                      </div>
                      <div
                        routerlinkactive="active-link"
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
                        routerlinkactive="active-link"
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
                <div className="ion-content-wrapper">
                  <div
                    role="main"
                    className="md content-ltr hydrated"
                    style={{ "--offset-top": "0px", "--offset-bottom": "0px" }}
                  >
                    <div
                      slot="fixed"
                      className="md refresher-md hydrated refresher-native"
                    >
                      <div className="md hydrated">
                        <div className="refresher-pulling">
                          <div className="refresher-pulling-icon">
                            <div className="spinner-arrow-container">
                              <div
                                className="md spinner-circular spinner-paused hydrated"
                                role="progressbar"
                                style={{ animationDuration: "1400ms" }}
                              />
                              <div className="arrow-container">
                                <ion-icon
                                  aria-hidden="true"
                                  role="img"
                                  className="md hydrated"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="refresher-refreshing">
                          <div className="refresher-refreshing-icon">
                            <div
                              className="md spinner-circular hydrated"
                              role="progressbar"
                              style={{
                                animationDuration: "1400ms",
                                animationDelay: "-655ms",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="pagetab-body">
                      <div className="pagetab-content">
                        <div className="providers-section ng-star-inserted">
                          <div
                            routerlink="/providers"
                            routerlinkactive="active-link"
                            className="game-play-heading"
                            tabIndex={0}
                          >
                            <h2>Casino Providers</h2>
                            <a className="view-all-link">
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
                          <div className="providers-list">
                            <ul>
                              <li className="p-item ng-star-inserted">
                                <a className="provider-item">
                                  <div className="p-logo">
                                    <img
                                      alt="Evolution Gaming"
                                      src="https://ss.manage63.com/south247/livecasinolobbyimages/new-provider-icon-Evolution.png"
                                    />
                                  </div>
                                  <p>Evolution Gaming</p>
                                </a>
                              </li>
                              <li className="p-item ng-star-inserted">
                                <a className="provider-item">
                                  <div className="p-logo">
                                    <img
                                      alt="JiLi Gaming"
                                      src="https://ss.manage63.com/south247/livecasinolobbyimages/jili.png"
                                    />
                                  </div>
                                  <p>Jili Gaming</p>
                                </a>
                              </li>
                              <li className="p-item ng-star-inserted">
                                <a className="provider-item">
                                  <div className="p-logo">
                                    <img
                                      alt="Turbogames"
                                      src="https://ss.manage63.com/south247/livecasinolobbyimages/turbogames.png"
                                    />
                                  </div>
                                  <p>Turbogames</p>
                                </a>
                              </li>
                              <li className="p-item ng-star-inserted">
                                <a className="provider-item">
                                  <div className="p-logo">
                                    <img
                                      alt="Ezugi"
                                      src="https://ss.manage63.com/south247/livecasinolobbyimages/Ezugi.png"
                                    />
                                  </div>
                                  <p>Ezugi</p>
                                </a>
                              </li>
                              <li className="p-item ng-star-inserted">
                                <a className="provider-item">
                                  <div className="p-logo">
                                    <img
                                      alt="Smartsoft Gaming"
                                      src="https://ss.manage63.com/south247/livecasinolobbyimages/Smartsoft_Gaming.png"
                                    />
                                  </div>
                                  <p>Smartsoft Gaming</p>
                                </a>
                              </li>
                              <li className="p-item ng-star-inserted">
                                <a className="provider-item">
                                  <div className="p-logo">
                                    <img
                                      alt="Playtech"
                                      src="https://ss.manage63.com/south247/livecasinolobbyimages/Playtech_Live.png"
                                    />
                                  </div>
                                  <p>Playtech</p>
                                </a>
                              </li>
                              <li className="p-item ng-star-inserted">
                                <a className="provider-item">
                                  <div className="p-logo">
                                    <img
                                      alt="Vivo Gaming"
                                      src="https://ss.manage63.com/south247/livecasinolobbyimages/vivo.png"
                                    />
                                  </div>
                                  <p>Vivo Gaming</p>
                                </a>
                              </li>
                              <li className="p-item ng-star-inserted">
                                <a className="provider-item">
                                  <div className="p-logo">
                                    <img
                                      alt="PGSoft"
                                      src="https://ss.manage63.com/south247/livecasinolobbyimages/new-pgsoft.png"
                                    />
                                  </div>
                                  <p>Pgsoft</p>
                                </a>
                              </li>
                              <li className="p-item ng-star-inserted">
                                <a className="provider-item">
                                  <div className="p-logo">
                                    <img
                                      alt="SPRIBE"
                                      src="https://ss.manage63.com/south247/livecasinolobbyimages/Spribe.png"
                                    />
                                  </div>
                                  <p>Spribe</p>
                                </a>
                              </li>
                              <li className="p-item ng-star-inserted">
                                <a className="provider-item">
                                  <div className="p-logo">
                                    <img
                                      alt="B Gaming"
                                      src="https://ss.manage63.com/south247/livecasinolobbyimages/new-provider-icon-BGaming.png"
                                    />
                                  </div>
                                  <p>B Gaming</p>
                                </a>
                              </li>
                              <li className="p-item ng-star-inserted">
                                <a className="provider-item">
                                  <div className="p-logo">
                                    <img
                                      alt="Betsoft"
                                      src="https://ss.manage63.com/south247/livecasinolobbyimages/Betsoft.png"
                                    />
                                  </div>
                                  <p>Betsoft</p>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div app-homepage-sports _nghost-ng-c4111681963>
                          <div className="sports-tab inplay-cont ng-star-inserted">
                            <div
                              routerlinkactive="active-link"
                              className="game-play-heading"
                              tabIndex={0}
                            >
                              <h2>Cricket</h2>
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
                                    <span
                                      role="img"
                                      className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                      aria-hidden="true"
                                      data-mat-icon-type="font"
                                    >
                                      schedule
                                    </span>
                                    <span>Teams</span>
                                  </h3>
                                  <div className="lay-back-wrap">
                                    <h3 className="back-bg">Back</h3>
                                    <h3 className="lay-bg">Lay</h3>
                                  </div>
                                </div>
                                <div className="table-body">
                                  <div className="table-item ng-star-inserted">
                                    <div className="teamlist-info">
                                      <div className="match-time">
                                        <span className="inplay ng-star-inserted">
                                          In-play
                                        </span>
                                        <p className="stumps-wrap ng-star-inserted" />
                                      </div>
                                      <h3 className="team-title">
                                        <p className="ng-star-inserted">
                                          <span
                                            role="img"
                                            className="mat-icon notranslate material-icons favorite mat-ligature-font mat-icon-no-color ng-star-inserted"
                                            aria-hidden="true"
                                            data-mat-icon-type="font"
                                          >
                                            star
                                          </span>
                                          <span className="team-name">
                                            mumbai indians w
                                          </span>
                                        </p>
                                        <p className="ng-star-inserted">
                                          <span className="team-name">
                                            delhi capitals w
                                          </span>
                                          <img
                                            alt="Playing"
                                            src="https://ss.manage63.com/bmk-wl/commonAssets/batting-icon.svg"
                                            className="ng-star-inserted"
                                          />
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
                                        <span
                                          role="img"
                                          className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color ng-star-inserted"
                                          aria-hidden="true"
                                          data-mat-icon-type="font"
                                        >
                                          play_arrow
                                        </span>
                                      </div>
                                    </div>
                                    <div className="flex-row-right rt-wrap">
                                      <div className="count-v-wrap ng-star-inserted">
                                        <button
                                          mat-flat-button
                                          className="count-value back-count mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base"
                                          mat-ripple-loader-uninitialized
                                          mat-ripple-loader-class-name="mat-mdc-button-ripple"
                                        >
                                          <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                                          <span className="mdc-button__label">
                                            <h4>1.25</h4>
                                            <p>5.6k</p>{" "}
                                          </span>
                                          <span className="mat-mdc-focus-indicator" />
                                          <span className="mat-mdc-button-touch-target" />
                                        </button>
                                        <button
                                          mat-flat-button
                                          className="count-value lay-count mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base"
                                          mat-ripple-loader-uninitialized
                                          mat-ripple-loader-class-name="mat-mdc-button-ripple"
                                        >
                                          <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                                          <span className="mdc-button__label">
                                            <h4>1.26</h4>
                                            <p>12.3k</p>{" "}
                                          </span>
                                          <span className="mat-mdc-focus-indicator" />
                                          <span className="mat-mdc-button-touch-target" />
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="table-item ng-star-inserted">
                                    <div className="teamlist-info">
                                      <div className="match-time">
                                        <span className="inplay ng-star-inserted">
                                          In-play
                                        </span>
                                        <p className="stumps-wrap ng-star-inserted" />
                                      </div>
                                      <h3 className="team-title">
                                        <p className="ng-star-inserted">
                                          <span className="team-name">
                                            joburg super kings
                                          </span>
                                        </p>
                                        <p className="ng-star-inserted">
                                          <span
                                            role="img"
                                            className="mat-icon notranslate material-icons favorite mat-ligature-font mat-icon-no-color ng-star-inserted"
                                            aria-hidden="true"
                                            data-mat-icon-type="font"
                                          >
                                            star
                                          </span>
                                          <span className="team-name">
                                            mi cape town
                                          </span>
                                          <img
                                            alt="Playing"
                                            src="https://ss.manage63.com/bmk-wl/commonAssets/batting-icon.svg"
                                            className="ng-star-inserted"
                                          />
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
                                        <span
                                          role="img"
                                          className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color ng-star-inserted"
                                          aria-hidden="true"
                                          data-mat-icon-type="font"
                                        >
                                          play_arrow
                                        </span>
                                      </div>
                                    </div>
                                    <div className="flex-row-right rt-wrap">
                                      <div className="count-v-wrap ng-star-inserted">
                                        <button
                                          mat-flat-button
                                          className="count-value back-count mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base"
                                          mat-ripple-loader-uninitialized
                                          mat-ripple-loader-class-name="mat-mdc-button-ripple"
                                        >
                                          <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                                          <span className="mdc-button__label">
                                            <h4>1.37</h4>
                                            <p>1.1k</p>{" "}
                                          </span>
                                          <span className="mat-mdc-focus-indicator" />
                                          <span className="mat-mdc-button-touch-target" />
                                        </button>
                                        <button
                                          mat-flat-button
                                          className="count-value lay-count mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base"
                                          mat-ripple-loader-uninitialized
                                          mat-ripple-loader-class-name="mat-mdc-button-ripple"
                                        >
                                          <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                                          <span className="mdc-button__label">
                                            <h4>1.38</h4>
                                            <p>3.5k</p>{" "}
                                          </span>
                                          <span className="mat-mdc-focus-indicator" />
                                          <span className="mat-mdc-button-touch-target" />
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="table-item ng-star-inserted">
                                    <div className="teamlist-info">
                                      <div className="match-time">
                                        <p className="ng-star-inserted">
                                          Tomorrow 5:10am IST
                                        </p>
                                        <p className="stumps-wrap ng-star-inserted" />
                                      </div>
                                      <h3 className="team-title">
                                        <p className="ng-star-inserted">
                                          <span
                                            role="img"
                                            className="mat-icon notranslate material-icons favorite mat-ligature-font mat-icon-no-color ng-star-inserted"
                                            aria-hidden="true"
                                            data-mat-icon-type="font"
                                          >
                                            star
                                          </span>
                                          <span className="team-name">
                                            wellington blaze w
                                          </span>
                                        </p>
                                        <p className="ng-star-inserted">
                                          <span className="team-name">
                                            northern brave w
                                          </span>
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
                                      </div>
                                    </div>
                                    <div className="flex-row-right rt-wrap">
                                      <div className="count-v-wrap ng-star-inserted">
                                        <button
                                          mat-flat-button
                                          className="count-value back-count mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base"
                                          mat-ripple-loader-uninitialized
                                          mat-ripple-loader-class-name="mat-mdc-button-ripple"
                                        >
                                          <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                                          <span className="mdc-button__label">
                                            <h4>1.57</h4>
                                            <p>21.26</p>{" "}
                                          </span>
                                          <span className="mat-mdc-focus-indicator" />
                                          <span className="mat-mdc-button-touch-target" />
                                        </button>
                                        <button
                                          mat-flat-button
                                          className="count-value lay-count mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base"
                                          mat-ripple-loader-uninitialized
                                          mat-ripple-loader-class-name="mat-mdc-button-ripple"
                                        >
                                          <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                                          <span className="mdc-button__label">
                                            <h4>1.62</h4>
                                            <p>6.6</p>{" "}
                                          </span>
                                          <span className="mat-mdc-focus-indicator" />
                                          <span className="mat-mdc-button-touch-target" />
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="table-item ng-star-inserted">
                                    <div className="teamlist-info">
                                      <div className="match-time">
                                        <p className="ng-star-inserted">
                                          Tomorrow 8:35am IST
                                        </p>
                                        <p className="stumps-wrap ng-star-inserted" />
                                      </div>
                                      <h3 className="team-title">
                                        <p className="ng-star-inserted">
                                          <span
                                            role="img"
                                            className="mat-icon notranslate material-icons favorite mat-ligature-font mat-icon-no-color ng-star-inserted"
                                            aria-hidden="true"
                                            data-mat-icon-type="font"
                                          >
                                            star
                                          </span>
                                          <span className="team-name">
                                            sydney sixers
                                          </span>
                                        </p>
                                        <p className="ng-star-inserted">
                                          <span className="team-name">
                                            hobart hurricanes
                                          </span>
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
                                      </div>
                                    </div>
                                    <div className="flex-row-right rt-wrap">
                                      <div className="count-v-wrap ng-star-inserted">
                                        <button
                                          mat-flat-button
                                          className="count-value back-count mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base"
                                          mat-ripple-loader-uninitialized
                                          mat-ripple-loader-class-name="mat-mdc-button-ripple"
                                        >
                                          <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                                          <span className="mdc-button__label">
                                            <h4>1.82</h4>
                                            <p>1k</p>{" "}
                                          </span>
                                          <span className="mat-mdc-focus-indicator" />
                                          <span className="mat-mdc-button-touch-target" />
                                        </button>
                                        <button
                                          mat-flat-button
                                          className="count-value lay-count mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base"
                                          mat-ripple-loader-uninitialized
                                          mat-ripple-loader-class-name="mat-mdc-button-ripple"
                                        >
                                          <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                                          <span className="mdc-button__label">
                                            <h4>1.83</h4>
                                            <p>49.98</p>{" "}
                                          </span>
                                          <span className="mat-mdc-focus-indicator" />
                                          <span className="mat-mdc-button-touch-target" />
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="table-item ng-star-inserted">
                                    <div className="teamlist-info">
                                      <div className="match-time">
                                        <p className="ng-star-inserted">
                                          Tomorrow 8:55am IST
                                        </p>
                                        <p className="stumps-wrap ng-star-inserted" />
                                      </div>
                                      <h3 className="team-title">
                                        <p className="ng-star-inserted">
                                          <span className="team-name">
                                            wellington firebirds
                                          </span>
                                        </p>
                                        <p className="ng-star-inserted">
                                          <span
                                            role="img"
                                            className="mat-icon notranslate material-icons favorite mat-ligature-font mat-icon-no-color ng-star-inserted"
                                            aria-hidden="true"
                                            data-mat-icon-type="font"
                                          >
                                            star
                                          </span>
                                          <span className="team-name">
                                            northern brave
                                          </span>
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
                                      </div>
                                    </div>
                                    <div className="flex-row-right rt-wrap">
                                      <div className="count-v-wrap ng-star-inserted">
                                        <button
                                          mat-flat-button
                                          className="count-value back-count mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base"
                                          mat-ripple-loader-uninitialized
                                          mat-ripple-loader-class-name="mat-mdc-button-ripple"
                                        >
                                          <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                                          <span className="mdc-button__label">
                                            <h4>1.87</h4>
                                            <p>40.84</p>{" "}
                                          </span>
                                          <span className="mat-mdc-focus-indicator" />
                                          <span className="mat-mdc-button-touch-target" />
                                        </button>
                                        <button
                                          mat-flat-button
                                          className="count-value lay-count mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base"
                                          mat-ripple-loader-uninitialized
                                          mat-ripple-loader-class-name="mat-mdc-button-ripple"
                                        >
                                          <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                                          <span className="mdc-button__label">
                                            <h4>1.92</h4>
                                            <p>16.97</p>{" "}
                                          </span>
                                          <span className="mat-mdc-focus-indicator" />
                                          <span className="mat-mdc-button-touch-target" />
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="sports-tab inplay-cont ng-star-inserted">
                            <div
                              routerlinkactive="active-link"
                              className="game-play-heading"
                              tabIndex={0}
                            >
                              <h2>Soccer</h2>
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
                                    <span
                                      role="img"
                                      className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                      aria-hidden="true"
                                      data-mat-icon-type="font"
                                    >
                                      schedule
                                    </span>
                                    <span>Teams</span>
                                  </h3>
                                  <div className="lay-back-wrap">
                                    <h3 className="back-bg">Back</h3>
                                    <h3 className="lay-bg">Lay</h3>
                                  </div>
                                </div>
                                <div className="table-body">
                                  <div className="table-item ng-star-inserted">
                                    <div className="teamlist-info">
                                      <div className="match-time">
                                        <span className="inplay ng-star-inserted">
                                          In-play
                                        </span>
                                      </div>
                                      <h3 className="team-title">
                                        <p className="ng-star-inserted">
                                          <span className="team-name">
                                            como
                                          </span>
                                        </p>
                                        <p className="ng-star-inserted">
                                          <span className="team-name">
                                            bologna
                                          </span>
                                        </p>
                                        <p className="ng-star-inserted">
                                          <span className="team-name">
                                            Draw
                                          </span>
                                        </p>
                                      </h3>
                                      <div className="inplay-wrap ng-star-inserted">
                                        <span
                                          role="img"
                                          className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color ng-star-inserted"
                                          aria-hidden="true"
                                          data-mat-icon-type="font"
                                        >
                                          play_arrow
                                        </span>
                                      </div>
                                    </div>
                                    <div className="flex-row-right rt-wrap" />
                                  </div>
                                  <div className="table-item ng-star-inserted">
                                    <div className="teamlist-info">
                                      <div className="match-time">
                                        <span className="inplay ng-star-inserted">
                                          In-play
                                        </span>
                                      </div>
                                      <h3 className="team-title">
                                        <p className="ng-star-inserted">
                                          <span
                                            role="img"
                                            className="mat-icon notranslate material-icons favorite mat-ligature-font mat-icon-no-color ng-star-inserted"
                                            aria-hidden="true"
                                            data-mat-icon-type="font"
                                          >
                                            star
                                          </span>
                                          <span className="team-name">
                                            freiburg
                                          </span>
                                        </p>
                                        <p className="ng-star-inserted">
                                          <span className="team-name">
                                            hamburger sv
                                          </span>
                                        </p>
                                        <p className="ng-star-inserted">
                                          <span className="team-name">
                                            Draw
                                          </span>
                                        </p>
                                      </h3>
                                      <div className="inplay-wrap ng-star-inserted">
                                        <span
                                          role="img"
                                          className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color ng-star-inserted"
                                          aria-hidden="true"
                                          data-mat-icon-type="font"
                                        >
                                          play_arrow
                                        </span>
                                      </div>
                                    </div>
                                    <div className="flex-row-right rt-wrap">
                                      <div className="count-v-wrap ng-star-inserted">
                                        <button
                                          mat-flat-button
                                          className="count-value back-count mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base"
                                          mat-ripple-loader-uninitialized
                                          mat-ripple-loader-class-name="mat-mdc-button-ripple"
                                        >
                                          <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                                          <span className="mdc-button__label">
                                            <h4>2.14</h4>
                                            <p>10.32</p>{" "}
                                          </span>
                                          <span className="mat-mdc-focus-indicator" />
                                          <span className="mat-mdc-button-touch-target" />
                                        </button>
                                        <button
                                          mat-flat-button
                                          className="count-value lay-count mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base"
                                          mat-ripple-loader-uninitialized
                                          mat-ripple-loader-class-name="mat-mdc-button-ripple"
                                        >
                                          <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                                          <span className="mdc-button__label">
                                            <h4>2.16</h4>
                                            <p>554.28</p>{" "}
                                          </span>
                                          <span className="mat-mdc-focus-indicator" />
                                          <span className="mat-mdc-button-touch-target" />
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="table-item ng-star-inserted">
                                    <div className="teamlist-info">
                                      <div className="match-time">
                                        <span className="inplay ng-star-inserted">
                                          In-play
                                        </span>
                                      </div>
                                      <h3 className="team-title">
                                        <p className="ng-star-inserted">
                                          <span className="team-name">
                                            fc heidenheim
                                          </span>
                                        </p>
                                        <p className="ng-star-inserted">
                                          <span
                                            role="img"
                                            className="mat-icon notranslate material-icons favorite mat-ligature-font mat-icon-no-color ng-star-inserted"
                                            aria-hidden="true"
                                            data-mat-icon-type="font"
                                          >
                                            star
                                          </span>
                                          <span className="team-name">
                                            fc koln
                                          </span>
                                        </p>
                                        <p className="ng-star-inserted">
                                          <span className="team-name">
                                            Draw
                                          </span>
                                        </p>
                                      </h3>
                                      <div className="inplay-wrap ng-star-inserted">
                                        <span
                                          role="img"
                                          className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color ng-star-inserted"
                                          aria-hidden="true"
                                          data-mat-icon-type="font"
                                        >
                                          play_arrow
                                        </span>
                                      </div>
                                    </div>
                                    <div className="flex-row-right rt-wrap">
                                      <div className="count-v-wrap ng-star-inserted">
                                        <button
                                          mat-flat-button
                                          className="count-value back-count mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base"
                                          mat-ripple-loader-uninitialized
                                          mat-ripple-loader-class-name="mat-mdc-button-ripple"
                                        >
                                          <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                                          <span className="mdc-button__label">
                                            <h4>3.75</h4>
                                            <p>12.93</p>{" "}
                                          </span>
                                          <span className="mat-mdc-focus-indicator" />
                                          <span className="mat-mdc-button-touch-target" />
                                        </button>
                                        <button
                                          mat-flat-button
                                          className="count-value lay-count mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base"
                                          mat-ripple-loader-uninitialized
                                          mat-ripple-loader-class-name="mat-mdc-button-ripple"
                                        >
                                          <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                                          <span className="mdc-button__label">
                                            <h4>3.85</h4>
                                            <p>148.78</p>{" "}
                                          </span>
                                          <span className="mat-mdc-focus-indicator" />
                                          <span className="mat-mdc-button-touch-target" />
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="table-item ng-star-inserted">
                                    <div className="teamlist-info">
                                      <div className="match-time">
                                        <span className="inplay ng-star-inserted">
                                          In-play
                                        </span>
                                      </div>
                                      <h3 className="team-title">
                                        <p className="ng-star-inserted">
                                          <span className="team-name">
                                            unions berlin
                                          </span>
                                        </p>
                                        <p className="ng-star-inserted">
                                          <span
                                            role="img"
                                            className="mat-icon notranslate material-icons favorite mat-ligature-font mat-icon-no-color ng-star-inserted"
                                            aria-hidden="true"
                                            data-mat-icon-type="font"
                                          >
                                            star
                                          </span>
                                          <span className="team-name">
                                            mainz
                                          </span>
                                        </p>
                                        <p className="ng-star-inserted">
                                          <span className="team-name">
                                            Draw
                                          </span>
                                        </p>
                                      </h3>
                                      <div className="inplay-wrap ng-star-inserted">
                                        <span
                                          role="img"
                                          className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color ng-star-inserted"
                                          aria-hidden="true"
                                          data-mat-icon-type="font"
                                        >
                                          play_arrow
                                        </span>
                                      </div>
                                    </div>
                                    <div className="flex-row-right rt-wrap">
                                      <div className="count-v-wrap ng-star-inserted">
                                        <button
                                          mat-flat-button
                                          className="count-value back-count mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base"
                                          mat-ripple-loader-uninitialized
                                          mat-ripple-loader-class-name="mat-mdc-button-ripple"
                                        >
                                          <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                                          <span className="mdc-button__label">
                                            <h4>1.08</h4>
                                            <p>2.4k</p>{" "}
                                          </span>
                                          <span className="mat-mdc-focus-indicator" />
                                          <span className="mat-mdc-button-touch-target" />
                                        </button>
                                        <button
                                          mat-flat-button
                                          className="count-value lay-count mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base"
                                          mat-ripple-loader-uninitialized
                                          mat-ripple-loader-class-name="mat-mdc-button-ripple"
                                        >
                                          <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                                          <span className="mdc-button__label">
                                            <h4>1.09</h4>
                                            <p>5.4k</p>{" "}
                                          </span>
                                          <span className="mat-mdc-focus-indicator" />
                                          <span className="mat-mdc-button-touch-target" />
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="table-item ng-star-inserted">
                                    <div className="teamlist-info">
                                      <div className="match-time">
                                        <span className="inplay ng-star-inserted">
                                          In-play
                                        </span>
                                      </div>
                                      <h3 className="team-title">
                                        <p className="ng-star-inserted">
                                          <span
                                            role="img"
                                            className="mat-icon notranslate material-icons favorite mat-ligature-font mat-icon-no-color ng-star-inserted"
                                            aria-hidden="true"
                                            data-mat-icon-type="font"
                                          >
                                            star
                                          </span>
                                          <span className="team-name">
                                            villarreal
                                          </span>
                                        </p>
                                        <p className="ng-star-inserted">
                                          <span className="team-name">
                                            alaves
                                          </span>
                                        </p>
                                        <p className="ng-star-inserted">
                                          <span className="team-name">
                                            Draw
                                          </span>
                                        </p>
                                      </h3>
                                      <div className="inplay-wrap ng-star-inserted">
                                        <span
                                          role="img"
                                          className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color ng-star-inserted"
                                          aria-hidden="true"
                                          data-mat-icon-type="font"
                                        >
                                          play_arrow
                                        </span>
                                      </div>
                                    </div>
                                    <div className="flex-row-right rt-wrap">
                                      <div className="count-v-wrap ng-star-inserted">
                                        <button
                                          mat-flat-button
                                          className="count-value back-count mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base"
                                          mat-ripple-loader-uninitialized
                                          mat-ripple-loader-class-name="mat-mdc-button-ripple"
                                        >
                                          <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                                          <span className="mdc-button__label">
                                            <h4>2.02</h4>
                                            <p>1k</p>{" "}
                                          </span>
                                          <span className="mat-mdc-focus-indicator" />
                                          <span className="mat-mdc-button-touch-target" />
                                        </button>
                                        <button
                                          mat-flat-button
                                          className="count-value lay-count mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base"
                                          mat-ripple-loader-uninitialized
                                          mat-ripple-loader-class-name="mat-mdc-button-ripple"
                                        >
                                          <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                                          <span className="mdc-button__label">
                                            <h4>2.06</h4>
                                            <p>5.3k</p>{" "}
                                          </span>
                                          <span className="mat-mdc-focus-indicator" />
                                          <span className="mat-mdc-button-touch-target" />
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="sports-tab inplay-cont ng-star-inserted">
                            <div
                              routerlinkactive="active-link"
                              className="game-play-heading"
                              tabIndex={0}
                            >
                              <h2>Tennis</h2>
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
                                    <span
                                      role="img"
                                      className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                      aria-hidden="true"
                                      data-mat-icon-type="font"
                                    >
                                      schedule
                                    </span>
                                    <span>Teams</span>
                                  </h3>
                                  <div className="lay-back-wrap">
                                    <h3 className="back-bg">Back</h3>
                                    <h3 className="lay-bg">Lay</h3>
                                  </div>
                                </div>
                                <div className="table-body">
                                  <div className="table-item ng-star-inserted">
                                    <div className="teamlist-info">
                                      <div className="match-time">
                                        <p className="ng-star-inserted">
                                          Tomorrow 3:30am IST
                                        </p>
                                      </div>
                                      <h3 className="team-title">
                                        <p className="ng-star-inserted">
                                          <span
                                            role="img"
                                            className="mat-icon notranslate material-icons favorite mat-ligature-font mat-icon-no-color ng-star-inserted"
                                            aria-hidden="true"
                                            data-mat-icon-type="font"
                                          >
                                            star
                                          </span>
                                          <span className="team-name">
                                            kopriva
                                          </span>
                                        </p>
                                        <p className="ng-star-inserted">
                                          <span className="team-name">
                                            hug gaston
                                          </span>
                                        </p>
                                      </h3>
                                    </div>
                                    <div className="flex-row-right rt-wrap">
                                      <div className="count-v-wrap ng-star-inserted">
                                        <button
                                          mat-flat-button
                                          className="count-value back-count mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base"
                                          mat-ripple-loader-uninitialized
                                          mat-ripple-loader-class-name="mat-mdc-button-ripple"
                                        >
                                          <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                                          <span className="mdc-button__label">
                                            <h4>1.9</h4>
                                            <p>5.93</p>{" "}
                                          </span>
                                          <span className="mat-mdc-focus-indicator" />
                                          <span className="mat-mdc-button-touch-target" />
                                        </button>
                                        <button
                                          mat-flat-button
                                          className="count-value lay-count mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base"
                                          mat-ripple-loader-uninitialized
                                          mat-ripple-loader-class-name="mat-mdc-button-ripple"
                                        >
                                          <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                                          <span className="mdc-button__label">
                                            <h4>2.04</h4>
                                            <p>8.84</p>{" "}
                                          </span>
                                          <span className="mat-mdc-focus-indicator" />
                                          <span className="mat-mdc-button-touch-target" />
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="table-item ng-star-inserted">
                                    <div className="teamlist-info">
                                      <div className="match-time">
                                        <p className="ng-star-inserted">
                                          Tomorrow 3:30am IST
                                        </p>
                                      </div>
                                      <h3 className="team-title">
                                        <p className="ng-star-inserted">
                                          <span
                                            role="img"
                                            className="mat-icon notranslate material-icons favorite mat-ligature-font mat-icon-no-color ng-star-inserted"
                                            aria-hidden="true"
                                            data-mat-icon-type="font"
                                          >
                                            star
                                          </span>
                                          <span className="team-name">
                                            spizzirri
                                          </span>
                                        </p>
                                        <p className="ng-star-inserted">
                                          <span className="team-name">
                                            manuel cerundolo
                                          </span>
                                        </p>
                                      </h3>
                                    </div>
                                    <div className="flex-row-right rt-wrap">
                                      <div className="count-v-wrap ng-star-inserted">
                                        <button
                                          mat-flat-button
                                          className="count-value back-count mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base"
                                          mat-ripple-loader-uninitialized
                                          mat-ripple-loader-class-name="mat-mdc-button-ripple"
                                        >
                                          <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                                          <span className="mdc-button__label">
                                            <h4>1.37</h4>
                                            <p>77.23</p>{" "}
                                          </span>
                                          <span className="mat-mdc-focus-indicator" />
                                          <span className="mat-mdc-button-touch-target" />
                                        </button>
                                        <button
                                          mat-flat-button
                                          className="count-value lay-count mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base"
                                          mat-ripple-loader-uninitialized
                                          mat-ripple-loader-class-name="mat-mdc-button-ripple"
                                        >
                                          <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                                          <span className="mdc-button__label">
                                            <h4>1.43</h4>
                                            <p>4</p>{" "}
                                          </span>
                                          <span className="mat-mdc-focus-indicator" />
                                          <span className="mat-mdc-button-touch-target" />
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="table-item ng-star-inserted">
                                    <div className="teamlist-info">
                                      <div className="match-time">
                                        <p className="ng-star-inserted">
                                          Tomorrow 4:40am IST
                                        </p>
                                      </div>
                                      <h3 className="team-title">
                                        <p className="ng-star-inserted">
                                          <span className="team-name">
                                            em nava
                                          </span>
                                        </p>
                                        <p className="ng-star-inserted">
                                          <span
                                            role="img"
                                            className="mat-icon notranslate material-icons favorite mat-ligature-font mat-icon-no-color ng-star-inserted"
                                            aria-hidden="true"
                                            data-mat-icon-type="font"
                                          >
                                            star
                                          </span>
                                          <span className="team-name">
                                            struff
                                          </span>
                                        </p>
                                      </h3>
                                    </div>
                                    <div className="flex-row-right rt-wrap">
                                      <div className="count-v-wrap ng-star-inserted">
                                        <button
                                          mat-flat-button
                                          className="count-value back-count mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base"
                                          mat-ripple-loader-uninitialized
                                          mat-ripple-loader-class-name="mat-mdc-button-ripple"
                                        >
                                          <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                                          <span className="mdc-button__label">
                                            <h4>1.74</h4>
                                            <p>36.43</p>{" "}
                                          </span>
                                          <span className="mat-mdc-focus-indicator" />
                                          <span className="mat-mdc-button-touch-target" />
                                        </button>
                                        <button
                                          mat-flat-button
                                          className="count-value lay-count mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base"
                                          mat-ripple-loader-uninitialized
                                          mat-ripple-loader-class-name="mat-mdc-button-ripple"
                                        >
                                          <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                                          <span className="mdc-button__label">
                                            <h4>1.85</h4>
                                            <p>26.02</p>{" "}
                                          </span>
                                          <span className="mat-mdc-focus-indicator" />
                                          <span className="mat-mdc-button-touch-target" />
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="table-item ng-star-inserted">
                                    <div className="teamlist-info">
                                      <div className="match-time">
                                        <p className="ng-star-inserted">
                                          Tomorrow 4:40am IST
                                        </p>
                                      </div>
                                      <h3 className="team-title">
                                        <p className="ng-star-inserted">
                                          <span className="team-name">
                                            ma bellucci
                                          </span>
                                        </p>
                                        <p className="ng-star-inserted">
                                          <span
                                            role="img"
                                            className="mat-icon notranslate material-icons favorite mat-ligature-font mat-icon-no-color ng-star-inserted"
                                            aria-hidden="true"
                                            data-mat-icon-type="font"
                                          >
                                            star
                                          </span>
                                          <span className="team-name">
                                            ha medjedovic
                                          </span>
                                        </p>
                                      </h3>
                                    </div>
                                    <div className="flex-row-right rt-wrap">
                                      <div className="count-v-wrap ng-star-inserted">
                                        <button
                                          mat-flat-button
                                          className="count-value back-count mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base"
                                          mat-ripple-loader-uninitialized
                                          mat-ripple-loader-class-name="mat-mdc-button-ripple"
                                        >
                                          <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                                          <span className="mdc-button__label">
                                            <h4>1.62</h4>
                                            <p>1.6</p>{" "}
                                          </span>
                                          <span className="mat-mdc-focus-indicator" />
                                          <span className="mat-mdc-button-touch-target" />
                                        </button>
                                        <button
                                          mat-flat-button
                                          className="count-value lay-count mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base"
                                          mat-ripple-loader-uninitialized
                                          mat-ripple-loader-class-name="mat-mdc-button-ripple"
                                        >
                                          <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                                          <span className="mdc-button__label">
                                            <h4>1.69</h4>
                                            <p>8</p>{" "}
                                          </span>
                                          <span className="mat-mdc-focus-indicator" />
                                          <span className="mat-mdc-button-touch-target" />
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="table-item ng-star-inserted">
                                    <div className="teamlist-info">
                                      <div className="match-time">
                                        <p className="ng-star-inserted">
                                          Tomorrow 5:00am IST
                                        </p>
                                      </div>
                                      <h3 className="team-title">
                                        <p className="ng-star-inserted">
                                          <span
                                            role="img"
                                            className="mat-icon notranslate material-icons favorite mat-ligature-font mat-icon-no-color ng-star-inserted"
                                            aria-hidden="true"
                                            data-mat-icon-type="font"
                                          >
                                            star
                                          </span>
                                          <span className="team-name">
                                            al shevchenko
                                          </span>
                                        </p>
                                        <p className="ng-star-inserted">
                                          <span className="team-name">
                                            taberner
                                          </span>
                                        </p>
                                      </h3>
                                    </div>
                                    <div className="flex-row-right rt-wrap">
                                      <div className="count-v-wrap ng-star-inserted">
                                        <button
                                          mat-flat-button
                                          className="count-value back-count mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base"
                                          mat-ripple-loader-uninitialized
                                          mat-ripple-loader-class-name="mat-mdc-button-ripple"
                                        >
                                          <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                                          <span className="mdc-button__label">
                                            <h4>1.1</h4>
                                            <p>19.13</p>{" "}
                                          </span>
                                          <span className="mat-mdc-focus-indicator" />
                                          <span className="mat-mdc-button-touch-target" />
                                        </button>
                                        <button
                                          mat-flat-button
                                          className="count-value lay-count mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base"
                                          mat-ripple-loader-uninitialized
                                          mat-ripple-loader-class-name="mat-mdc-button-ripple"
                                        >
                                          <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                                          <span className="mdc-button__label">
                                            <h4>2.3</h4>
                                            <p>10.16</p>{" "}
                                          </span>
                                          <span className="mat-mdc-focus-indicator" />
                                          <span className="mat-mdc-button-touch-target" />
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="casino-section go-casino game-play mt-2 mb-3 ng-star-inserted">
                          <div className="game-play-heading">
                            <h2>Go Crash</h2>
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
                            <ul className="sRowScroll">
                              <li className="ng-star-inserted">
                                <a className="active">
                                  <img
                                    alt=""
                                    src="https://cdn.dreamcasino.live/sbe_aviator.webp"
                                  />
                                </a>
                                <p className="total-players">
                                  <span
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    group
                                  </span>
                                  1331
                                </p>
                                <div className="game-detail">
                                  <p className="company-type">SPRIBE</p>
                                  <p className="game-name">Aviator</p>
                                </div>
                              </li>
                              <li className="ng-star-inserted">
                                <a className="active">
                                  <img
                                    alt=""
                                    src="https://images.pi1001.com/logos/smar_JetX_1_1730094878.png"
                                  />
                                </a>
                                <p className="total-players">
                                  <span
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    group
                                  </span>
                                  6731
                                </p>
                                <div className="game-detail">
                                  <p className="company-type">
                                    Smartsoft Gaming
                                  </p>
                                  <p className="game-name">JetX</p>
                                </div>
                              </li>
                              <li className="ng-star-inserted">
                                <a className="active">
                                  <img
                                    alt=""
                                    src="https://cdn.dreamcasino.live/avx_nft_aviatrix/thumb.webp"
                                  />
                                </a>
                                <p className="total-players">
                                  <span
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    group
                                  </span>
                                  1469
                                </p>
                                <div className="game-detail">
                                  <p className="company-type">Aviatrix</p>
                                  <p className="game-name">NFT Aviatrix</p>
                                </div>
                              </li>
                              <li className="ng-star-inserted">
                                <a className="active">
                                  <img
                                    alt=""
                                    src="https://cdn.dreamdelhi.com/dc/tbg_aero.jpg"
                                  />
                                </a>
                                <p className="total-players">
                                  <span
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    group
                                  </span>
                                  7306
                                </p>
                                <div className="game-detail">
                                  <p className="company-type">Turbogames</p>
                                  <p className="game-name">AERO</p>
                                </div>
                              </li>
                              <li className="ng-star-inserted">
                                <a className="active">
                                  <img
                                    alt=""
                                    src="https://cdn.dreamcasino.live/gmz_pilot/thumb.webp"
                                  />
                                </a>
                                <p className="total-players">
                                  <span
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    group
                                  </span>
                                  4559
                                </p>
                                <div className="game-detail">
                                  <p className="company-type">Gamzix</p>
                                  <p className="game-name">Pilot</p>
                                </div>
                              </li>
                              <li className="ng-star-inserted">
                                <a className="active">
                                  <img
                                    alt=""
                                    src="https://cdn.dreamcasino.live/fugaso/fgsz_magnifyman.webp"
                                  />
                                </a>
                                <p className="total-players">
                                  <span
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    group
                                  </span>
                                  4214
                                </p>
                                <div className="game-detail">
                                  <p className="company-type">Fugaso</p>
                                  <p className="game-name">Magnify Man</p>
                                </div>
                              </li>
                              <li className="ng-star-inserted">
                                <a className="active">
                                  <img
                                    alt=""
                                    src="https://images.pi1001.com/logos/smar_CricketX_11_1730096028.png"
                                  />
                                </a>
                                <p className="total-players">
                                  <span
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    group
                                  </span>
                                  9168
                                </p>
                                <div className="game-detail">
                                  <p className="company-type">
                                    Smartsoft Gaming
                                  </p>
                                  <p className="game-name">CricketX</p>
                                </div>
                              </li>
                              <li className="ng-star-inserted">
                                <a className="active">
                                  <img
                                    alt=""
                                    src="https://cdn.dreamdelhi.com/dream/evp_longball.jpeg"
                                  />
                                </a>
                                <p className="total-players">
                                  <span
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    group
                                  </span>
                                  580
                                </p>
                                <div className="game-detail">
                                  <p className="company-type">
                                    Evoplay Entertainment
                                  </p>
                                  <p className="game-name">Long Ball</p>
                                </div>
                              </li>
                              <li className="ng-star-inserted">
                                <a className="active">
                                  <img
                                    alt=""
                                    src="https://cdn.dreamdelhi.com/dream/hsg_limbo92.jpg"
                                  />
                                </a>
                                <p className="total-players">
                                  <span
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    group
                                  </span>
                                  5587
                                </p>
                                <div className="game-detail">
                                  <p className="company-type">Hacksaw Gaming</p>
                                  <p className="game-name">Limbo</p>
                                </div>
                              </li>
                              <li className="ng-star-inserted">
                                <a className="active">
                                  <img
                                    alt=""
                                    src="https://cdn.dreamdelhi.com/dream/orx_golfingglory.jpg"
                                  />
                                </a>
                                <p className="total-players">
                                  <span
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    group
                                  </span>
                                  906
                                </p>
                                <div className="game-detail">
                                  <p className="company-type">Oryx Gaming</p>
                                  <p className="game-name">Golfing Glory</p>
                                </div>
                              </li>
                              <li className="ng-star-inserted">
                                <a className="active">
                                  <img
                                    alt=""
                                    src="https://cdn.dreamdelhi.com/dream/hsg_limbo.jpg"
                                  />
                                </a>
                                <p className="total-players">
                                  <span
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    group
                                  </span>
                                  1056
                                </p>
                                <div className="game-detail">
                                  <p className="company-type">Hacksaw Gaming</p>
                                  <p className="game-name">Limbo</p>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="casino-section go-casino game-play mt-2 mb-3 ng-star-inserted">
                          <div className="game-play-heading">
                            <h2>Instant Games</h2>
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
                            <ul className="sRowScroll">
                              <li className="ng-star-inserted">
                                <p className="total-players">
                                  <span
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    group
                                  </span>
                                  8513
                                </p>
                                <a className="active">
                                  <img
                                    alt=""
                                    src="https://images.pi1001.com/inout-games/cex_chickenroad2_10083_1764845842.webp"
                                  />
                                </a>
                                <div className="game-detail">
                                  <p className="company-type">InOut Games</p>
                                  <p className="game-name">Chicken Road 2</p>
                                </div>
                              </li>
                              <li className="ng-star-inserted">
                                <p className="total-players">
                                  <span
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    group
                                  </span>
                                  8082
                                </p>
                                <a className="active">
                                  <img
                                    alt=""
                                    src="https://images.pi1001.com/inout-games/cex_mines_10058_1764845843.webp"
                                  />
                                </a>
                                <div className="game-detail">
                                  <p className="company-type">InOut Games</p>
                                  <p className="game-name">Mines</p>
                                </div>
                              </li>
                              <li className="ng-star-inserted">
                                <p className="total-players">
                                  <span
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    group
                                  </span>
                                  6578
                                </p>
                                <a className="active">
                                  <img
                                    alt=""
                                    src="https://images.pi1001.com/inout-games/cex_coinflip_10057_1764845843.webp"
                                  />
                                </a>
                                <div className="game-detail">
                                  <p className="company-type">InOut Games</p>
                                  <p className="game-name">Coin Flip</p>
                                </div>
                              </li>
                              <li className="ng-star-inserted">
                                <p className="total-players">
                                  <span
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    group
                                  </span>
                                  1016
                                </p>
                                <a className="active">
                                  <img
                                    alt=""
                                    src="https://images.pi1001.com/inout-games/cex_wheel_10066_1764845843.webp"
                                  />
                                </a>
                                <div className="game-detail">
                                  <p className="company-type">InOut Games</p>
                                  <p className="game-name">Wheel</p>
                                </div>
                              </li>
                              <li className="ng-star-inserted">
                                <p className="total-players">
                                  <span
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    group
                                  </span>
                                  150
                                </p>
                                <a className="active">
                                  <img
                                    alt=""
                                    src="https://images.pi1001.com/inout-games/cex_penaltyunlimited_10093_1764845843.webp"
                                  />
                                </a>
                                <div className="game-detail">
                                  <p className="company-type">InOut Games</p>
                                  <p className="game-name">Penalty Unlimited</p>
                                </div>
                              </li>
                              <li className="ng-star-inserted">
                                <p className="total-players">
                                  <span
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    group
                                  </span>
                                  6729
                                </p>
                                <a className="active">
                                  <img
                                    alt=""
                                    src="https://images.pi1001.com/inout-games/cex_balloonix_10097_1764845843.webp"
                                  />
                                </a>
                                <div className="game-detail">
                                  <p className="company-type">InOut Games</p>
                                  <p className="game-name">BallooniX</p>
                                </div>
                              </li>
                              <li className="ng-star-inserted">
                                <p className="total-players">
                                  <span
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    group
                                  </span>
                                  2293
                                </p>
                                <a className="active">
                                  <img
                                    alt=""
                                    src="https://images.pi1001.com/inout-games/cex_diver_10063_1764845843.webp"
                                  />
                                </a>
                                <div className="game-detail">
                                  <p className="company-type">InOut Games</p>
                                  <p className="game-name">Diver</p>
                                </div>
                              </li>
                              <li className="ng-star-inserted">
                                <p className="total-players">
                                  <span
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    group
                                  </span>
                                  8943
                                </p>
                                <a className="active">
                                  <img
                                    alt=""
                                    src="https://images.pi1001.com/inout-games/cex_squid$$$game_10095_1764845843.webp"
                                  />
                                </a>
                                <div className="game-detail">
                                  <p className="company-type">InOut Games</p>
                                  <p className="game-name">Squid$$$Game</p>
                                </div>
                              </li>
                              <li className="ng-star-inserted">
                                <p className="total-players">
                                  <span
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    group
                                  </span>
                                  5662
                                </p>
                                <a className="active">
                                  <img
                                    alt=""
                                    src="https://images.pi1001.com/inout-games/cex_hilojoker_10073_1764845843.webp"
                                  />
                                </a>
                                <div className="game-detail">
                                  <p className="company-type">InOut Games</p>
                                  <p className="game-name">Hilo Joker</p>
                                </div>
                              </li>
                              <li className="ng-star-inserted">
                                <p className="total-players">
                                  <span
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    group
                                  </span>
                                  8452
                                </p>
                                <a className="active">
                                  <img
                                    alt=""
                                    src="https://images.pi1001.com/inout-games/cex_plinko1000_10072_1764845843.webp"
                                  />
                                </a>
                                <div className="game-detail">
                                  <p className="company-type">InOut Games</p>
                                  <p className="game-name">Plinko 1000</p>
                                </div>
                              </li>
                              <li className="ng-star-inserted">
                                <p className="total-players">
                                  <span
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    group
                                  </span>
                                  3091
                                </p>
                                <a className="active">
                                  <img
                                    alt=""
                                    src="https://images.pi1001.com/inout-games/cex_limbo_10074_1764845843.webp"
                                  />
                                </a>
                                <div className="game-detail">
                                  <p className="company-type">InOut Games</p>
                                  <p className="game-name">Limbo</p>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="casino-section go-casino game-play mt-2 mb-3 ng-star-inserted">
                          <div className="game-play-heading">
                            <h2>Game Shows</h2>
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
                            <ul className="sRowScroll">
                              <li className="ng-star-inserted">
                                <p className="total-players">
                                  <span
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    group
                                  </span>
                                  979
                                </p>
                                <a className="active">
                                  <img
                                    alt=""
                                    src="https://images.pi1001.com/evolution-gaming/cex_racetrack_7929_1764845780.webp"
                                  />
                                </a>
                                <div className="game-detail">
                                  <p className="company-type">
                                    Evolution Gaming
                                  </p>
                                  <p className="game-name">Race Track</p>
                                </div>
                              </li>
                              <li className="ng-star-inserted">
                                <p className="total-players">
                                  <span
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    group
                                  </span>
                                  3400
                                </p>
                                <a className="active">
                                  <img
                                    alt=""
                                    src="https://images.pi1001.com/microgaming-live/cex_cashwheelcarnival_10530_1764845844.webp"
                                  />
                                </a>
                                <div className="game-detail">
                                  <p className="company-type">
                                    Microgaming Live
                                  </p>
                                  <p className="game-name">
                                    Cash Wheel Carnival
                                  </p>
                                </div>
                              </li>
                              <li className="ng-star-inserted">
                                <p className="total-players">
                                  <span
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    group
                                  </span>
                                  6512
                                </p>
                                <a className="active">
                                  <img
                                    alt=""
                                    src="https://images.pi1001.com/evolution-gaming/cex_icefishing_9972_1764845779.webp"
                                  />
                                </a>
                                <div className="game-detail">
                                  <p className="company-type">
                                    Evolution Gaming
                                  </p>
                                  <p className="game-name">Ice Fishing</p>
                                </div>
                              </li>
                              <li className="ng-star-inserted">
                                <p className="total-players">
                                  <span
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    group
                                  </span>
                                  5958
                                </p>
                                <a className="active">
                                  <img
                                    alt=""
                                    src="https://images.pi1001.com/evolution-gaming/cex_supercolorgame_9865_1764845779.webp"
                                  />
                                </a>
                                <div className="game-detail">
                                  <p className="company-type">
                                    Evolution Gaming
                                  </p>
                                  <p className="game-name">Super Color Game</p>
                                </div>
                              </li>
                              <li className="ng-star-inserted">
                                <p className="total-players">
                                  <span
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    group
                                  </span>
                                  1631
                                </p>
                                <a className="active">
                                  <img
                                    alt=""
                                    src="https://images.pi1001.com/evolution-gaming/cex_funkytime_8077_1764845780.webp"
                                  />
                                </a>
                                <div className="game-detail">
                                  <p className="company-type">
                                    Evolution Gaming
                                  </p>
                                  <p className="game-name">Funky Time</p>
                                </div>
                              </li>
                              <li className="ng-star-inserted">
                                <p className="total-players">
                                  <span
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    group
                                  </span>
                                  387
                                </p>
                                <a className="active">
                                  <img
                                    alt=""
                                    src="https://images.pi1001.com/evolution-gaming/cex_extrachilliepicspins_8076_1764845780.webp"
                                  />
                                </a>
                                <div className="game-detail">
                                  <p className="company-type">
                                    Evolution Gaming
                                  </p>
                                  <p className="game-name">
                                    Extra Chilli Epic Spins
                                  </p>
                                </div>
                              </li>
                              <li className="ng-star-inserted">
                                <p className="total-players">
                                  <span
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    group
                                  </span>
                                  8946
                                </p>
                                <a className="active">
                                  <img
                                    alt=""
                                    src="https://images.pi1001.com/evolution-gaming/cex_imperialquest_8075_1764845780.webp"
                                  />
                                </a>
                                <div className="game-detail">
                                  <p className="company-type">
                                    Evolution Gaming
                                  </p>
                                  <p className="game-name">Imperial Quest</p>
                                </div>
                              </li>
                              <li className="ng-star-inserted">
                                <p className="total-players">
                                  <span
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    group
                                  </span>
                                  5849
                                </p>
                                <a className="active">
                                  <img
                                    alt=""
                                    src="https://images.pi1001.com/evolution-gaming/cex_dealornodeal_8054_1764845780.webp"
                                  />
                                </a>
                                <div className="game-detail">
                                  <p className="company-type">
                                    Evolution Gaming
                                  </p>
                                  <p className="game-name">Deal or No Deal</p>
                                </div>
                              </li>
                              <li className="ng-star-inserted">
                                <p className="total-players">
                                  <span
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    group
                                  </span>
                                  1047
                                </p>
                                <a className="active">
                                  <img
                                    alt=""
                                    src="https://images.pi1001.com/evolution-gaming/cex_dreamcatcher_8046_1764845780.webp"
                                  />
                                </a>
                                <div className="game-detail">
                                  <p className="company-type">
                                    Evolution Gaming
                                  </p>
                                  <p className="game-name">Dream Catcher</p>
                                </div>
                              </li>
                              <li className="ng-star-inserted">
                                <p className="total-players">
                                  <span
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    group
                                  </span>
                                  2955
                                </p>
                                <a className="active">
                                  <img
                                    alt=""
                                    src="https://images.pi1001.com/evolution-gaming/cex_cashorcrash_8028_1764845780.webp"
                                  />
                                </a>
                                <div className="game-detail">
                                  <p className="company-type">
                                    Evolution Gaming
                                  </p>
                                  <p className="game-name">Cash or Crash</p>
                                </div>
                              </li>
                              <li className="ng-star-inserted">
                                <p className="total-players">
                                  <span
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    group
                                  </span>
                                  6540
                                </p>
                                <a className="active">
                                  <img
                                    alt=""
                                    src="https://images.pi1001.com/evolution-gaming/cex_marblerace_7952_1764845779.webp"
                                  />
                                </a>
                                <div className="game-detail">
                                  <p className="company-type">
                                    Evolution Gaming
                                  </p>
                                  <p className="game-name">Marble Race</p>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="casino-section go-casino game-play mt-2 mb-3 ng-star-inserted">
                          <div className="game-play-heading">
                            <h2>Go Casino</h2>
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
                            <ul className="sRowScroll">
                              <li className="ng-star-inserted">
                                <p className="total-players">
                                  <span
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    group
                                  </span>
                                  2383
                                </p>
                                <a className="active">
                                  <img
                                    alt=""
                                    src="https://ss.manage63.com/south247/casinolobbyimages/gocasino/32-card-casino.jpg"
                                  />
                                </a>
                                <div className="game-detail">
                                  <p className="company-type">Aura Casino</p>
                                  <p className="game-name">32 Cards Casino</p>
                                </div>
                              </li>
                              <li className="ng-star-inserted">
                                <p className="total-players">
                                  <span
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    group
                                  </span>
                                  4220
                                </p>
                                <a className="active">
                                  <img
                                    alt=""
                                    src="https://ss.manage63.com/south247/casinolobbyimages/Teenpatti-one-day.jpg"
                                  />
                                </a>
                                <div className="game-detail">
                                  <p className="company-type">Aura Casino</p>
                                  <p className="game-name">Live Teenpatti</p>
                                </div>
                              </li>
                              <li className="ng-star-inserted">
                                <p className="total-players">
                                  <span
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    group
                                  </span>
                                  2731
                                </p>
                                <a className="active">
                                  <img
                                    alt=""
                                    src="https://ss.manage63.com/south247/casinolobbyimages/gocasino/Teenpatti-T20.jpg"
                                  />
                                </a>
                                <div className="game-detail">
                                  <p className="company-type">Aura Casino</p>
                                  <p className="game-name">Teenpatti T20</p>
                                </div>
                              </li>
                              <li className="ng-star-inserted">
                                <p className="total-players">
                                  <span
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    group
                                  </span>
                                  9545
                                </p>
                                <a className="active">
                                  <img
                                    alt=""
                                    src="https://ss.manage63.com/south247/casinolobbyimages/gocasino/Trio.jpg"
                                  />
                                </a>
                                <div className="game-detail">
                                  <p className="company-type">Aura Casino</p>
                                  <p className="game-name">Trio</p>
                                </div>
                              </li>
                              <li className="ng-star-inserted">
                                <p className="total-players">
                                  <span
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    group
                                  </span>
                                  3962
                                </p>
                                <a className="active">
                                  <img
                                    alt=""
                                    src="https://ss.manage63.com/south247/casinolobbyimages/super-over.jpg"
                                  />
                                </a>
                                <div className="game-detail">
                                  <p className="company-type">Aura Casino</p>
                                  <p className="game-name">Super Over</p>
                                </div>
                              </li>
                              <li className="ng-star-inserted">
                                <p className="total-players">
                                  <span
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    group
                                  </span>
                                  3289
                                </p>
                                <a className="active">
                                  <img
                                    alt=""
                                    src="https://ss.manage63.com/south247/casinolobbyimages/3-Card-Judgement.jpg"
                                  />
                                </a>
                                <div className="game-detail">
                                  <p className="company-type">Aura Casino</p>
                                  <p className="game-name">3 Cards Judgement</p>
                                </div>
                              </li>
                              <li className="ng-star-inserted">
                                <p className="total-players">
                                  <span
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    group
                                  </span>
                                  6194
                                </p>
                                <a className="active">
                                  <img
                                    alt=""
                                    src="https://ss.manage63.com/south247/casinolobbyimages/29-Card-Baccarat.jpg"
                                  />
                                </a>
                                <div className="game-detail">
                                  <p className="company-type">Aura Casino</p>
                                  <p className="game-name">29 Card Baccarat</p>
                                </div>
                              </li>
                              <li className="ng-star-inserted">
                                <p className="total-players">
                                  <span
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    group
                                  </span>
                                  8375
                                </p>
                                <a className="active">
                                  <img
                                    alt=""
                                    src="https://ss.manage63.com/south247/casinolobbyimages/gocasino/2-Card-Teenpatti.jpg"
                                  />
                                </a>
                                <div className="game-detail">
                                  <p className="company-type">Aura Casino</p>
                                  <p className="game-name">2 Cards Teenpatti</p>
                                </div>
                              </li>
                              <li className="ng-star-inserted">
                                <p className="total-players">
                                  <span
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    group
                                  </span>
                                  5500
                                </p>
                                <a className="active">
                                  <img
                                    alt=""
                                    src="https://ss.manage63.com/south247/casinolobbyimages/gocasino/Queen-Race.jpg"
                                  />
                                </a>
                                <div className="game-detail">
                                  <p className="company-type">Aura Casino</p>
                                  <p className="game-name">Queen</p>
                                </div>
                              </li>
                              <li className="ng-star-inserted">
                                <p className="total-players">
                                  <span
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    group
                                  </span>
                                  370
                                </p>
                                <a className="active">
                                  <img
                                    alt=""
                                    src="https://ss.manage63.com/south247/casinolobbyimages/Teenpatti-Open.jpg"
                                  />
                                </a>
                                <div className="game-detail">
                                  <p className="company-type">Aura Casino</p>
                                  <p className="game-name">Teenpatti Open</p>
                                </div>
                              </li>
                              <li className="ng-star-inserted">
                                <p className="total-players">
                                  <span
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    group
                                  </span>
                                  4955
                                </p>
                                <a className="active">
                                  <img
                                    alt=""
                                    src="https://ss.manage63.com/south247/casinolobbyimages/gocasino/Poker-20-20.jpg"
                                  />
                                </a>
                                <div className="game-detail">
                                  <p className="company-type">Aura Casino</p>
                                  <p className="game-name">Poker 20-20</p>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="casino-section live-casino game-play mt-2 mb-3 ng-star-inserted">
                          <div className="game-play-heading">
                            <h2>Live Casino</h2>
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
                            <ul className="sRowScroll">
                              <li className="ng-star-inserted">
                                <a className="active">
                                  <img
                                    alt=""
                                    src="https://images.pi1001.com/zenith/EVOLIVE_LightningHindi01.png"
                                  />
                                </a>
                                <p className="total-players">
                                  <span
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    group
                                  </span>
                                  901
                                </p>
                                <div className="game-detail">
                                  <p className="company-type">
                                    Evolution Gaming
                                  </p>
                                  <p className="game-name">
                                    Hindi Lightning Roulette
                                  </p>
                                </div>
                              </li>
                              <li className="ng-star-inserted">
                                <a className="active">
                                  <img
                                    alt=""
                                    src="https://images.pi1001.com/zenith/EVOLIVE_GoldVaultRo00001.png"
                                  />
                                </a>
                                <p className="total-players">
                                  <span
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    group
                                  </span>
                                  8008
                                </p>
                                <div className="game-detail">
                                  <p className="company-type">
                                    Evolution Gaming
                                  </p>
                                  <p className="game-name">
                                    Gold Vault Roulette
                                  </p>
                                </div>
                              </li>
                              <li className="ng-star-inserted">
                                <a className="active">
                                  <img
                                    alt=""
                                    src="https://cdn.dreamcasino.live/evolution/evo_emperorsicbo.webp"
                                  />
                                </a>
                                <p className="total-players">
                                  <span
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    group
                                  </span>
                                  3124
                                </p>
                                <div className="game-detail">
                                  <p className="company-type">
                                    Evolution Gaming
                                  </p>
                                  <p className="game-name">Emperor Sic Bo</p>
                                </div>
                              </li>
                              <li className="ng-star-inserted">
                                <a className="active">
                                  <img
                                    alt=""
                                    src="https://images.pi1001.com/zenith/EVOLIVE_LightningTable01.png"
                                  />
                                </a>
                                <p className="total-players">
                                  <span
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    group
                                  </span>
                                  1510
                                </p>
                                <div className="game-detail">
                                  <p className="company-type">
                                    Evolution Gaming
                                  </p>
                                  <p className="game-name">
                                    Lightning Roulette
                                  </p>
                                </div>
                              </li>
                              <li className="ng-star-inserted">
                                <a className="active">
                                  <img
                                    alt=""
                                    src="https://images.pi1001.com/zenith/EVOLIVE_DoubleBallRou001.png"
                                  />
                                </a>
                                <p className="total-players">
                                  <span
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    group
                                  </span>
                                  2808
                                </p>
                                <div className="game-detail">
                                  <p className="company-type">
                                    Evolution Gaming
                                  </p>
                                  <p className="game-name">
                                    Double Ball Roulette
                                  </p>
                                </div>
                              </li>
                              <li className="ng-star-inserted">
                                <a className="active">
                                  <img
                                    alt=""
                                    src="https://images.pi1001.com/zenith/EVOLIVE_AmericanTable001.png"
                                  />
                                </a>
                                <p className="total-players">
                                  <span
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    group
                                  </span>
                                  7686
                                </p>
                                <div className="game-detail">
                                  <p className="company-type">
                                    Evolution Gaming
                                  </p>
                                  <p className="game-name">American Roulette</p>
                                </div>
                              </li>
                              <li className="ng-star-inserted">
                                <a className="active">
                                  <img
                                    alt=""
                                    src="https://images.pi1001.com/zenith/EVOLIVE_qhhjdnovai4a3a6k.png"
                                  />
                                </a>
                                <p className="total-players">
                                  <span
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    group
                                  </span>
                                  5824
                                </p>
                                <div className="game-detail">
                                  <p className="company-type">
                                    Evolution Gaming
                                  </p>
                                  <p className="game-name">
                                    Hindi Speed Baccarat A
                                  </p>
                                </div>
                              </li>
                              <li className="ng-star-inserted">
                                <a className="active">
                                  <img
                                    alt=""
                                    src="https://cdn.dreamcasino.live/gold_blackjack_1.webp"
                                  />
                                </a>
                                <p className="total-players">
                                  <span
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    group
                                  </span>
                                  6859
                                </p>
                                <div className="game-detail">
                                  <p className="company-type">Ezugi</p>
                                  <p className="game-name">Blackjack Gold 3</p>
                                </div>
                              </li>
                              <li className="ng-star-inserted">
                                <a className="active">
                                  <img
                                    alt=""
                                    src="https://cdn.dreamcasino.live/ezugi/vip-bj-surrender-thumb-v2.webp"
                                  />
                                </a>
                                <p className="total-players">
                                  <span
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    group
                                  </span>
                                  4442
                                </p>
                                <div className="game-detail">
                                  <p className="company-type">Ezugi</p>
                                  <p className="game-name">
                                    VIP Blackjack with Surrender
                                  </p>
                                </div>
                              </li>
                              <li className="ng-star-inserted">
                                <a className="active">
                                  <img
                                    alt=""
                                    src="https://cdn.dreamcasino.live/ezugi/vip-bj-thumb-v2.webp"
                                  />
                                </a>
                                <p className="total-players">
                                  <span
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    group
                                  </span>
                                  1257
                                </p>
                                <div className="game-detail">
                                  <p className="company-type">Ezugi</p>
                                  <p className="game-name">VIP Blackjack</p>
                                </div>
                              </li>
                              <li className="ng-star-inserted">
                                <a className="active">
                                  <img
                                    alt=""
                                    src="https://images.pi1001.com/evolution-live/cex_dynastyroulette_13488_1767780872.png"
                                  />
                                </a>
                                <p className="total-players">
                                  <span
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    group
                                  </span>
                                  135
                                </p>
                                <div className="game-detail">
                                  <p className="company-type">
                                    Evolution Gaming
                                  </p>
                                  <p className="game-name">Dynasty Roulette</p>
                                  <p className="coins-limit ng-star-inserted">
                                    ₹1 - 20K
                                  </p>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="floating-btns">
                  <div className="btn-item ng-star-inserted">
                    <div className="btn-wrap whatsapp">
                      <img
                        alt="WhatsApp"
                        src="https://ss.manage63.com/bmk-wl/commonAssets/whatsapp-icon.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="page-footer">
                <div>
                  <div className="tab-navigation">
                    <button
                      mat-flat-button
                      routerlink="/home"
                      routerlinkactive="active-link"
                      className="home mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base active-link"
                      mat-ripple-loader-uninitialized
                      mat-ripple-loader-class-name="mat-mdc-button-ripple"
                      tabIndex={0}
                    >
                      <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                      <span className="mdc-button__label">
                        <span className="uIcons uIcons_home_2" />
                        <p className="notranslate">Home</p>{" "}
                      </span>
                      <span className="mat-mdc-focus-indicator" />
                      <span className="mat-mdc-button-touch-target" />
                    </button>
                    <button
                      mat-flat-button
                      routerlink="/inplay"
                      routerlinkactive="active-link"
                      className="market mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base"
                      mat-ripple-loader-uninitialized
                      mat-ripple-loader-class-name="mat-mdc-button-ripple"
                      tabIndex={0}
                    >
                      <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                      <span className="mdc-button__label">
                        <span className="uIcons uIcons_inplay" />
                        <p className="notranslate">Inplay</p>{" "}
                      </span>
                      <span className="mat-mdc-focus-indicator" />
                      <span className="mat-mdc-button-touch-target" />
                    </button>
                    <button
                      mat-flat-button
                      routerlink="/offers"
                      routerlinkactive="active-link"
                      className="offers mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base ng-star-inserted"
                      mat-ripple-loader-uninitialized
                      mat-ripple-loader-class-name="mat-mdc-button-ripple"
                      tabIndex={0}
                    >
                      <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                      <span className="mdc-button__label">
                        <span className="uIcons uIcons_offers_1" />
                        <p className="notranslate">Offers</p>{" "}
                      </span>
                      <span className="mat-mdc-focus-indicator" />
                      <span className="mat-mdc-button-touch-target" />
                    </button>
                  </div>
                </div>
              </div>
              <div />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
