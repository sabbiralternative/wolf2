import moment from "moment";
import { Fragment } from "react";

const Upcoming = ({ upcoming, navigateGameList, formatDate }) => {
  const groupedByDate = Object.entries(upcoming).reduce((acc, [key, item]) => {
    const dateKey = item.date.split(" ")[0];

    acc[dateKey] ??= [];
    acc[dateKey].push({ ...item, key });

    acc[dateKey].sort((a, b) => a.sort - b.sort);

    return acc;
  }, {});

  const sortedGroupedByDate = Object.entries(groupedByDate).sort(
    ([dateA], [dateB]) => {
      const toDate = (d) => {
        const [dd, mm, yyyy] = d.split("/");
        return new Date(`${yyyy}-${mm}-${dd}`);
      };

      return toDate(dateA) - toDate(dateB);
    },
  );

  const format = (dateString) => {
    const matchTime = moment(dateString, "DD/MM/YYYY");
    const today = moment().startOf("day");
    const tomorrow = moment().add(1, "day").startOf("day");

    if (matchTime.isSame(today, "day")) {
      return "Today";
    }

    if (matchTime.isSame(tomorrow, "day")) {
      return "Tomorrow";
    }

    return matchTime.format("DD MMM YYYY");
  };

  return (
    <Fragment>
      {sortedGroupedByDate.map(([date, events]) => {
        return (
          <div key={date}>
            <div className="game-play-heading">
              <h2>{format(date)}</h2>
            </div>
            {events?.map((event, index) => (
              <div
                key={index}
                onClick={() => navigateGameList(event?.key)}
                className="game-card w-icon-view ng-star-inserted"
              >
                <div className="teams-wrap">
                  <div className="team-item">
                    <div className="img-wrap">
                      <img
                        alt="Overlay"
                        className="overlay-img"
                        src={event?.image1}
                      />
                    </div>
                    <div className="score-info">
                      <h3> {event?.player1}</h3>
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
                        src={event?.image2}
                      />
                    </div>
                    <div className="score-info">
                      <h3> {event?.player2}</h3>
                    </div>
                  </div>
                </div>
                <p className="schedule-time ng-star-inserted">
                  {formatDate(event?.date)}
                </p>
              </div>
            ))}
          </div>
        );
      })}
    </Fragment>
  );
};

export default Upcoming;
