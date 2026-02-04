import moment from "moment";

const TeamTitlebar = ({ data }) => {
  const formatDate = (dateString) => {
    const dateTime = moment(dateString, "DD/MM/YYYY HH:mm");
    const now = moment();
    if (dateTime.isBefore(now)) {
      return `Started at ${dateTime.format("h:mma")} IST`;
    }
    return dateString;
  };

  return (
    <div className="pagetop-bar" style={{ top: "0px" }}>
      <div
        className="team-play-bar title-bar"
        style={{ margin: "0px", flexDirection: "row", background: "#141414" }}
      >
        <div className="playing-teams">
          <button className="mat-mdc-tooltip-trigger mdc-icon-button mat-mdc-icon-button mat-unthemed mat-mdc-button-base">
            <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple" />
            i <span className="mat-mdc-focus-indicator" />
            <span className="mat-mdc-button-touch-target" />
          </button>
          <span className="ng-star-inserted">
            {data?.result?.[0]?.eventName}
          </span>
        </div>
        <div className="playing-teams">
          <span className="ng-star-inserted">
            {" "}
            {formatDate(data?.result?.[0]?.openDate)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TeamTitlebar;
