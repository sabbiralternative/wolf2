import { Fragment } from "react";

const LiveMatchScreen = ({ score, accessToken }) => {
  return (
    <Fragment>
      {score && score?.hasVideo && accessToken?.result?.url && (
        <div className="live-match-screen ng-star-inserted">
          {/* <div className="live-tv-btns">
            <p
              role="img"
              title="Pin"
              className="mat-icon notranslate sticky-icon material-icons mat-ligature-font mat-icon-no-color"
              aria-hidden="true"
              data-mat-icon-type="font"
            >
              push_pin
              <div
                role="img"
                title="Reload TV"
                className="mat-icon notranslate sticky-icon forReload material-icons mat-ligature-font mat-icon-no-color"
                aria-hidden="true"
                data-mat-icon-type="font"
              >
                refresh
              </div>
            </p>
          </div> */}
          <iframe
            style={{ border: "0px" }}
            width="100%"
            id="liveStream"
            frameBorder={0}
            src={accessToken?.result?.url}
            className="ng-star-inserted"
          />
        </div>
      )}
    </Fragment>
  );
};

export default LiveMatchScreen;
