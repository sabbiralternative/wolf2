import { useLocation, useNavigate, useParams } from "react-router-dom";
import Tab from "../../components/modules/Group/Tab";
import { useGroupQuery } from "../../redux/features/events/events";
import moment from "moment";
import { useEffect, useMemo, useRef } from "react";
import Upcoming from "../../components/modules/Group/Upcoming";
import InPlayToday from "../../components/modules/Group/InPlayToday";

const Group = () => {
  const ref = useRef();
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
    const matchTime = moment(dateString, "DD/MM/YYYY HH:mm");
    const now = moment();

    // already started
    if (matchTime.isBefore(now)) {
      return `Started at ${matchTime.format("h:mma")} IST`;
    }

    const diffMinutes = matchTime.diff(now, "minutes");

    // starts within next 60 minutes
    if (diffMinutes <= 60) {
      return `Starts in ${diffMinutes} mins`;
    }

    // starts later today
    if (matchTime.isSame(now, "day")) {
      return `Starts at ${matchTime.format("h:mma")} IST`;
    }

    return `Starts at ${matchTime.format("h:mma")} IST`;
  };

  useEffect(() => {
    const container = ref.current?.parentElement;
    container?.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [type, location.pathname]);

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
                <div
                  ref={ref}
                  className="matches-wrap ng-star-inserted"
                  style={{}}
                >
                  {data &&
                  Object.values(data).length > 0 &&
                  type === "upcoming" &&
                  groupedData.upcoming ? (
                    <Upcoming
                      upcoming={groupedData.upcoming}
                      navigateGameList={navigateGameList}
                      formatDate={formatDate}
                    />
                  ) : (
                    <InPlayToday
                      data={data}
                      finalData={finalData}
                      formatDate={formatDate}
                      navigateGameList={navigateGameList}
                    />
                  )}
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
