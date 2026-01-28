const Ladder = ({ marketName, ladderData }) => {
  return (
    <div
      className="ladder-datawrap dropdown-content show"
      style={{ bottom: "auto" }}
    >
      <p className="fancy-head"> {marketName}</p>
      <div className="ld-header">
        <div className="ld-data">
          <h3>Figure</h3>
          <h3>Win/Loss</h3>
        </div>
      </div>
      <div className="ld-body">
        {ladderData?.map((ladder, index) => {
          return (
            <div key={index} className="ld-data ng-star-inserted">
              <p>
                {ladder?.start}-{ladder?.end}
              </p>
              <p
                className={` ${ladder?.exposure > 0 ? "text-success" : "text-danger"}`}
              >
                {ladder?.exposure}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Ladder;
