import { Fragment } from "react";

const InPlayToday = ({ data, finalData, navigateGameList, formatDate }) => {
  return (
    <Fragment>
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
    </Fragment>
  );
};

export default InPlayToday;
