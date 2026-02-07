import { useNavigate } from "react-router-dom";
import { useGetIndex } from "../../hooks";

const Tournament = () => {
  const navigate = useNavigate();
  const { data } = useGetIndex({
    type: "wolf_tournaments",
  });

  const navigateGameList = (item) => {
    navigate(`/event-details/${item?.event_type_id}/${item?.tournament_id}`);
  };

  return (
    <div
      className="page-body notranslate"
      style={{
        marginBottom: "0px",
        height: "100%",
        maxHeight: "100%",
        overflowY: "hidden",
      }}
    >
      <div className="special-market ng-star-inserted">
        <div className="market-wrap ng-star-inserted">
          <div className="title-bar">
            <h2 className="title">Series Winner</h2>
          </div>
          {data?.data?.map((item) => {
            return (
              <div
                onClick={() => navigateGameList(item)}
                key={item?.tournament_id}
                className="market-card ng-star-inserted"
              >
                {item?.event_icon && (
                  <div className="img-wrap">
                    <img
                      alt="Overlay"
                      className="overlay-img"
                      src="https://ss.manage63.com/bmk-wl/commonAssets/frame.webp"
                    />
                    <img alt="" className="mkt-img" src={item?.event_icon} />
                  </div>
                )}

                <div className="event-title">
                  <h2>{item?.fixture_name}</h2>
                  <p className="ng-star-inserted">{item?.start_end_date}</p>
                </div>
                {item?.event_icon1 && (
                  <div className="img-wrap ng-star-inserted">
                    <img
                      alt="Overlay"
                      className="overlay-img"
                      src="https://ss.manage63.com/bmk-wl/commonAssets/frame.webp"
                    />
                    <img alt="" className="mkt-img" src={item?.event_icon1} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Tournament;
