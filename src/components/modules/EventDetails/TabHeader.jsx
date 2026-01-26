const TabHeader = () => {
  return (
    <div
      className="mat-mdc-tab-header"
      style={{ top: "0px", background: "black", color: "white" }}
    >
      <button
        aria-hidden="true"
        type="button"
        tabIndex={-1}
        className="mat-ripple mat-mdc-tab-header-pagination mat-mdc-tab-header-pagination-before mat-mdc-tab-header-pagination-disabled"
        disabled
      >
        <div className="mat-mdc-tab-header-pagination-chevron" />
      </button>
      <div className="mat-mdc-tab-label-container">
        <div role="tablist" className="mat-mdc-tab-list">
          <div className="mat-mdc-tab-labels">
            <div
              role="tab"
              className="mdc-tab mat-mdc-tab mat-mdc-focus-indicator mdc-tab--active ng-star-inserted mdc-tab-indicator--active"
              id="mat-tab-label-0-0"
              tabIndex={0}
              aria-posinset={1}
              aria-setsize={3}
              aria-controls="mat-tab-content-0-0"
              aria-selected="true"
              aria-disabled="false"
            >
              <span className="mdc-tab__ripple" />
              <div className="mat-ripple mat-mdc-tab-ripple" />
              <span className="mdc-tab__content">
                <span
                  className="mdc-tab__text-label"
                  style={{ fontSize: "10px" }}
                >
                  Market
                </span>
              </span>
              <span className="mdc-tab-indicator">
                <span className="mdc-tab-indicator__content mdc-tab-indicator__content--underline" />
              </span>
            </div>
            <div
              role="tab"
              className="mdc-tab mat-mdc-tab mat-mdc-focus-indicator mat-mdc-tab-disabled ng-star-inserted"
              id="mat-tab-label-0-1"
              tabIndex={-1}
              aria-posinset={2}
              aria-setsize={3}
              aria-controls="mat-tab-content-0-1"
              aria-selected="false"
              aria-disabled="true"
            >
              <span className="mdc-tab__ripple" />
              <div className="mat-ripple mat-mdc-tab-ripple" />
              <span className="mdc-tab__content">
                <span className="mdc-tab__text-label">
                  <span
                    className="ng-star-inserted"
                    style={{ fontSize: "10px" }}
                  >
                    Open Bets (0)
                  </span>
                </span>
              </span>
              <span className="mdc-tab-indicator">
                <span className="mdc-tab-indicator__content mdc-tab-indicator__content--underline" />
              </span>
            </div>
            <div
              role="tab"
              className="mdc-tab mat-mdc-tab mat-mdc-focus-indicator forAction-btns mat-mdc-tab-disabled ng-star-inserted"
              id="mat-tab-label-0-2"
              tabIndex={-1}
              aria-posinset={3}
              aria-setsize={3}
              aria-controls="mat-tab-content-0-2"
              aria-selected="false"
              aria-disabled="true"
            >
              <span className="mdc-tab__ripple" />
              <div className="mat-ripple mat-mdc-tab-ripple" />
              <span className="mdc-tab__content">
                <span className="mdc-tab__text-label">
                  <div className="livetv-tab ng-star-inserted">
                    <button className="livetv-btn rounded mdc-button mdc-button--unelevated mat-mdc-unelevated-button active mat-unthemed mat-mdc-button-base ng-star-inserted">
                      <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                      <span className="material-icons">live_tv</span>
                      <span className="mdc-button__label" />
                      <span className="mat-mdc-focus-indicator" />
                      <span className="mat-mdc-button-touch-target" />
                    </button>
                    <button className="livetv-btn rounded mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base ng-star-inserted">
                      <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                      <span className="material-icons">sports_score</span>
                      <span className="mdc-button__label" />
                      <span className="mat-mdc-focus-indicator" />
                      <span className="mat-mdc-button-touch-target" />
                    </button>
                  </div>
                </span>
              </span>
              <span className="mdc-tab-indicator">
                <span className="mdc-tab-indicator__content mdc-tab-indicator__content--underline" />
              </span>
            </div>
          </div>
        </div>
      </div>
      <button
        aria-hidden="true"
        type="button"
        tabIndex={-1}
        className="mat-ripple mat-mdc-tab-header-pagination mat-mdc-tab-header-pagination-after mat-mdc-tab-header-pagination-disabled"
        disabled
      >
        <div className="mat-mdc-tab-header-pagination-chevron" />
      </button>
    </div>
  );
};

export default TabHeader;
