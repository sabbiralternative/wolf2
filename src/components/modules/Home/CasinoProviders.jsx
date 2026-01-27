import { Link } from "react-router-dom";

const CasinoProviders = () => {
  return (
    <div className="providers-section ng-star-inserted">
      <div className="game-play-heading" tabIndex={0}>
        <h2>Casino Providers</h2>
        <Link to="/casino-providers" className="view-all-link">
          All
          <span
            role="img"
            className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
            aria-hidden="true"
            data-mat-icon-type="font"
          >
            chevron_right
          </span>
        </Link>
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
  );
};

export default CasinoProviders;
