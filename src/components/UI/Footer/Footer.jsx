const Footer = () => {
  return (
    <div className="page-footer">
      <div>
        <div className="tab-navigation">
          <button
            className="home mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base active-link"
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
            className="market mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base"
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
            className="offers mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base ng-star-inserted"
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
  );
};

export default Footer;
