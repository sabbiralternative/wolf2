const ScoreBoard = () => {
  return (
    <div className="live-score-section oldScoreBoard ng-star-inserted">
      <div className="score-overlay">
        <p className="current-ball">Innings Break</p>
      </div>
      <div className="score-wrap">
        <div className="batting-team">
          <img src="assets/img/batting-icon.svg" />
          <div className="team-infowrap">
            <small>Perth Scorchers</small>
            <p>
              <span className="score">219-7 (20.0)</span>
              <span className="run-rates">
                <span>CRR: 10.94</span>
              </span>
            </p>
          </div>
        </div>
        <div className="bowling-team">
          <img src="assets/img/bowling-icon.svg" />
          <div className="team-infowrap">
            <small>Melbourne Renegades</small>
            <p className="ng-star-inserted">Yet to bat</p>
          </div>
        </div>
      </div>
      <div className="last-balls-record overflow-overs newClr ng-star-inserted">
        <div className="over-details ng-star-inserted">
          <div>
            <small>Current over</small>
          </div>
          <ul className="ng-star-inserted">
            <li className="ng-star-inserted">
              <p className="_0">0</p>
            </li>
            <li className="ng-star-inserted">
              <p className="_2">2</p>
            </li>
            <li className="ng-star-inserted">
              <p className="_0">0</p>
            </li>
          </ul>
        </div>
        <div className="over-details ng-star-inserted">
          <div>
            <small>Previous over</small>
          </div>
          <ul className="ng-star-inserted">
            <li className="ng-star-inserted">
              <p className="_0">0</p>
            </li>
            <li className="ng-star-inserted">
              <p className="_0">0</p>
            </li>
            <li className="ng-star-inserted">
              <p className="_1">1</p>
            </li>
            <li className="ng-star-inserted">
              <p className="_0">0</p>
            </li>
            <li className="ng-star-inserted">
              <p className="_0">0</p>
            </li>
            <li className="ng-star-inserted">
              <p className="_W">W</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ScoreBoard;
