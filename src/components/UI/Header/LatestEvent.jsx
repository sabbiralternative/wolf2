import { useNavigate } from "react-router-dom";
import { useLatestEvent } from "../../../hooks/latestEvent";

const LatestEvent = () => {
  const navigate = useNavigate();
  const { data } = useLatestEvent();
  const navigateGameList = (item) => {
    navigate(`/event-details/${item?.eventTypeId}/${item?.eventId}`);
  };
  return (
    <div className="latest-events ng-star-inserted">
      {data?.map((item, index) => (
        <div
          onClick={() => navigateGameList(item)}
          key={index}
          className="le-item ng-star-inserted"
          style={{ width: "auto" }}
        >
          <h2 className="ng-star-inserted">
            <span className="blink-it">{item?.eventName}</span>
          </h2>
        </div>
      ))}
    </div>
  );
};

export default LatestEvent;
