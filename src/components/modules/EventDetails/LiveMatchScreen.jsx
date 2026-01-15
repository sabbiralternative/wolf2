import { useParams } from "react-router-dom";
import { useVideoMutation } from "../../../redux/features/events/events";
import { Settings } from "../../../api";
import { Fragment, useEffect, useState } from "react";

const LiveMatchScreen = ({ score }) => {
  const [iFrame, setIFrame] = useState("");
  const { eventId, eventTypeId } = useParams();
  const [sportsVideo] = useVideoMutation();

  const handleGetVideo = async () => {
    const payload = {
      eventTypeId: eventTypeId,
      eventId: eventId,
      type: "video",
      casinoCurrency: Settings.casinoCurrency,
    };
    const res = await sportsVideo(payload).unwrap();
    if (res?.success) {
      setIFrame(res?.result?.url);
    }
  };

  useEffect(() => {
    handleGetVideo();
  }, []);
  return (
    <Fragment>
      {score && iFrame && score?.hasVideo && (
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
            src={iFrame}
            className="ng-star-inserted"
          />
        </div>
      )}
    </Fragment>
  );
};

export default LiveMatchScreen;
