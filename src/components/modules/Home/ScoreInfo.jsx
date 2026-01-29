import { Fragment } from "react";
import { formatDate } from "../../../utils/formateDate";

const ScoreInfo = ({ data, keys }) => {
  return (
    <Fragment>
      {data?.[keys]?.eventTypeId == 4 && (
        <Fragment>
          {data[keys]?.inPlay == 1 && data[keys]?.score2 ? (
            <div className="match-time">
              <span className="inplay ng-star-inserted">
                {" "}
                {/* <span style={{ display: "block" }}>
                  {data?.[keys]?.score2?.line1}
                </span>
                <span style={{ display: "block" }}>
                  {data?.[keys]?.score2?.line2}
                </span>
                <span style={{ display: "block" }}>
                  {data?.[keys]?.score2?.line3}
                </span>
                {!data?.[keys]?.score2?.line1 &&
                  !data?.[keys]?.score2?.line2 &&
                  !data?.[keys]?.score2?.line3 && (
                    <span style={{ display: "block" }}>Live</span>
                  )} */}
                In-play
              </span>
              <p className="stumps-wrap ng-star-inserted" />
            </div>
          ) : (
            <div className="match-time">
              <span
                className="inplay ng-star-inserted"
                style={{ background: "transparent", color: "black" }}
              >
                {" "}
                {formatDate(data, keys)}
              </span>
              <p className="stumps-wrap ng-star-inserted" />
            </div>
          )}
        </Fragment>
      )}
      {data?.[keys]?.eventTypeId == 1 && (
        <Fragment>
          {data[keys]?.inPlay == 1 && data[keys]?.score ? (
            <div className="match-time">
              <span className="inplay ng-star-inserted">
                {" "}
                {/* <div
                  style={{ display: "flex", alignItems: "center", gap: "5px" }}
                >
                  <span>{data[keys]?.timeStatus}</span>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "5px",
                    }}
                  >
                    <span>{data[keys]?.score?.total_1}</span>
                    <span>{data[keys]?.score?.total_2}</span>

                    {!data?.[keys]?.timeStatus &&
                      !data?.[keys]?.score?.total_1 &&
                      !data?.[keys]?.score?.total_2 && (
                        <span style={{ display: "block" }}>Live</span>
                      )}
                  </div>
                </div> */}
                In-play
              </span>
              <p className="stumps-wrap ng-star-inserted" />
            </div>
          ) : (
            <div className="match-time">
              <span
                className="inplay ng-star-inserted"
                style={{ background: "transparent", color: "black" }}
              >
                {" "}
                {formatDate(data, keys)}
              </span>
              <p className="stumps-wrap ng-star-inserted" />
            </div>
          )}
        </Fragment>
      )}
      {data?.[keys]?.eventTypeId == 2 && (
        <Fragment>
          {data[keys]?.inPlay == 1 && data[keys]?.score ? (
            <div className="match-time">
              <span className="inplay ng-star-inserted">
                {" "}
                In-play
                {/* <span style={{ display: "flex", gap: "5px" }}>
                  {" "}
                  <span> {data[keys]?.score?.totalSet1}</span>
                  <span>
                    {" "}
                    {data?.[keys]?.score?.set1
                      .map((item) => Number(item))
                      .filter((item) => !isNaN(item))
                      .pop()}
                  </span>
                </span>
                <span style={{ display: "flex", gap: "5px" }}>
                  <span> {data[keys]?.score?.totalSet2}</span>
                  <span>
                    {" "}
                    {data?.[keys]?.score?.set2
                      .map((item) => Number(item))
                      .filter((item) => !isNaN(item))
                      .pop()}
                  </span>
                </span>
                {!data?.[keys]?.score?.totalSet1 &&
                  !data?.[keys]?.score?.set1 &&
                  !data[keys]?.score?.totalSet2 &&
                  !data?.[keys]?.score?.set2 && (
                    <span style={{ display: "block" }}>Live</span>
                  )} */}
              </span>
              <p className="stumps-wrap ng-star-inserted" />
            </div>
          ) : (
            <div className="match-time">
              <span
                className="inplay ng-star-inserted"
                style={{ background: "transparent", color: "black" }}
              >
                {" "}
                {formatDate(data, keys)}
              </span>
              <p className="stumps-wrap ng-star-inserted" />
            </div>
          )}
        </Fragment>
      )}
      {data?.[keys]?.eventTypeId == 5 && (
        <div className="match-time">
          <span
            className="inplay ng-star-inserted"
            style={{ background: "transparent", color: "black" }}
          >
            {" "}
            {formatDate(data, keys)}
          </span>
          <p className="stumps-wrap ng-star-inserted" />
        </div>
      )}
    </Fragment>
  );
};

export default ScoreInfo;
