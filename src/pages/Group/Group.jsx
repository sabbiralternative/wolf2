import { useLocation, useNavigate, useParams } from "react-router-dom";
import Tab from "../../components/modules/Group/Tab";
import { useGroupQuery } from "../../redux/features/events/events";
import moment from "moment";
import { useMemo } from "react";

const Group = () => {
  const navigate = useNavigate();
  const { eventTypeId } = useParams();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const type = params.get("type");

  const { data } = useGroupQuery(
    { sportsType: Number(eventTypeId) },
    {
      pollingInterval: 1000,
    },
  );

  const todayMoment = moment().startOf("day");

  const groupedData = useMemo(() => {
    if (!data) return { inPlay: {}, today: {}, upcoming: {} };

    return Object.entries(data).reduce(
      (acc, [key, value]) => {
        if (!value.visible) return acc;

        const matchDate = moment(value.date, "DD/MM/YYYY HH:mm");

        if (value.inPlay === 1) {
          acc.inPlay[key] = value;
        } else if (matchDate.isSame(todayMoment, "day")) {
          acc.today[key] = value;
        } else {
          acc.upcoming[key] = value;
        }

        return acc;
      },
      { inPlay: {}, today: {}, upcoming: {} },
    );
  }, [data]);

  const finalData =
    type === "inPlay"
      ? groupedData.inPlay
      : type === "today"
        ? groupedData.today
        : groupedData.upcoming;
  const navigateGameList = (keys) => {
    navigate(`/event-details/${data[keys]?.eventTypeId}/${keys}`);
  };

  const formatDate = (dateString) => {
    const dateTime = moment(dateString, "DD/MM/YYYY HH:mm");
    const now = moment();
    if (dateTime.isBefore(now)) {
      return `Started at ${dateTime.format("h:mma")} IST`;
    }
    return dateString;
  };
  return (
    <div className="page-body">
      <div className="inplay-page-wrap ng-star-inserted">
        <div
          className="mat-mdc-tab-group mat-primary not-loggedIn mat-mdc-tab-group-stretch-tabs ng-star-inserted"
          style={{ "--mat-tab-animation-duration": "0ms" }}
        >
          <Tab type={type} groupedData={groupedData} />
          <div className="mat-mdc-tab-body-wrapper">
            <div
              role="tabpanel"
              className="mat-mdc-tab-body ng-tns-c737557735-1 mat-mdc-tab-body-active ng-star-inserted"
              id="mat-tab-content-0-0"
              aria-labelledby="mat-tab-label-0-0"
              aria-hidden="false"
            >
              <div
                className="mat-mdc-tab-body-content ng-tns-c737557735-1 ng-trigger ng-trigger-translateTab"
                style={{ transform: "none" }}
              >
                <div
                  className="title-bar ng-star-inserted"
                  style={{ display: "none" }}
                >
                  <h2 className="title" />
                </div>
                <div className="matches-wrap ng-star-inserted" style={{}}>
                  {data &&
                    Object.values(data).length > 0 &&
                    Object.keys(finalData)
                      .sort((keyA, keyB) => data[keyA].sort - data[keyB].sort)
                      .map((keys, index) => {
                        return (
                          <div
                            onClick={() => navigateGameList(keys)}
                            key={index}
                            className="game-card w-icon-view ng-star-inserted"
                          >
                            {/* <h2 className="tournament-title">
                              Vijay Hazare Trophy (static)
                            </h2> */}
                            <div className="teams-wrap">
                              <div className="team-item">
                                <div className="img-wrap">
                                  <img
                                    alt="Overlay"
                                    className="overlay-img"
                                    src={data[keys]?.image1}
                                  />
                                  {/* <img
                                    alt="team Icon"
                                    src="https://cdnimg.manage63.com/cricflags/1698735334086_535930_YTBVWZXQTKMKPYVCBKVVPGXQQ.png"
                                  /> */}
                                </div>
                                <div className="score-info">
                                  <h3> {data[keys]?.player1}</h3>
                                </div>
                              </div>
                              <div className="team-item">
                                <h2>VS</h2>
                              </div>
                              <div className="team-item">
                                <div className="img-wrap">
                                  <img
                                    alt="Overlay"
                                    className="overlay-img"
                                    src={data[keys]?.image2}
                                  />
                                  {/* <img
                                    alt="team Icon"
                                    src="https://cdnimg.manage63.com/cricflags/1710139003179_13805_FAPSQGAZRXHEHJPHPCJPXAWVG.png"
                                  /> */}
                                </div>
                                <div className="score-info">
                                  <h3> {data[keys]?.player2}</h3>
                                </div>
                              </div>
                            </div>
                            <p className="schedule-time ng-star-inserted">
                              {formatDate(data[keys]?.date)}
                            </p>
                          </div>
                        );
                      })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Group;
