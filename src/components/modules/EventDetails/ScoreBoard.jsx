import images from "../../../assets/images";

const ScoreBoard = ({ iscore }) => {
  return (
    <div className="live-score-section oldScoreBoard ng-star-inserted">
      {iscore?.status && (
        <div className="score-overlay">
          <p className="current-ball">{iscore?.status}</p>
        </div>
      )}

      <div className="score-wrap">
        <div className="batting-team">
          <img src={images.battingIcon} />
          <div className="team-infowrap">
            <small>{iscore?.teamName}</small>
            <p>
              <span className="score">
                {" "}
                {iscore?.teamRun} ({iscore?.teamOver})
              </span>
              {iscore?.crr && (
                <span className="run-rates">
                  <span>CRR: {iscore?.crr}</span>
                </span>
              )}
            </p>
          </div>
        </div>
        {/* <div className="bowling-team">
          <img src="/src/assets/img/bowling-icon.svg" />
          <div className="team-infowrap">
            <small>Melbourne Renegades</small>
            <p className="ng-star-inserted">Yet to bat</p>
          </div>
        </div> */}
      </div>
      <div className="last-balls-record overflow-overs newClr ng-star-inserted">
        <div className="over-details ng-star-inserted">
          <div style={{ color: "black" }}>
            <small>Current over</small>
          </div>
          <ul className="ng-star-inserted">
            {iscore?.currentOver?.map((item, idx) => (
              <li key={idx} className="ng-star-inserted">
                <p className={`_${item}`}>{item}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="over-details ng-star-inserted">
          <div style={{ color: "black" }}>
            <small>Previous over</small>
          </div>
          <ul className="ng-star-inserted">
            {iscore?.previousOver?.map((item, idx) => (
              <li key={idx} className="ng-star-inserted">
                <p className={`_${item}`}>{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ScoreBoard;
