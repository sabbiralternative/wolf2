import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Tab = ({ type, groupedData }) => {
  const { name, eventTypeId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (
      Object.entries(groupedData.inPlay).length === 0 &&
      Object.entries(groupedData.today).length === 0 &&
      Object.entries(groupedData.upcoming).length === 0
    )
      return;
    if (
      Object.entries(groupedData.inPlay).length === 0 &&
      Object.entries(groupedData.today).length > 0
    ) {
      navigate(`/group/${name}/${eventTypeId}?type=today`);
    }

    if (
      Object.entries(groupedData.inPlay).length === 0 &&
      Object.entries(groupedData.today).length === 0
    ) {
      navigate(`/group/${name}/${eventTypeId}?type=upcoming`);
    }

    if (
      Object.entries(groupedData.inPlay).length === 0 &&
      Object.entries(groupedData.today).length === 0 &&
      Object.entries(groupedData.upcoming).length > 0
    ) {
      navigate(`/group/${name}/${eventTypeId}?type=upcoming`);
    }
  }, [groupedData, navigate, eventTypeId, name]);

  return (
    <div
      className="mat-mdc-tab-header"
      style={{
        top: "0px",
        background: "var(--primary-color)",
      }}
    >
      <button
        aria-hidden="true"
        type="button"
        tabIndex={-1}
        className="mat-ripple mat-mdc-tab-header-pagination mat-mdc-tab-header-pagination-before mat-mdc-tab-header-pagination-disabled"
        disabled
      >
        <div className="mat-mdc-tab-header-pagination-chevron" />
      </button>
      <div className="mat-mdc-tab-label-container">
        <div role="tablist" className="mat-mdc-tab-list">
          <div className="mat-mdc-tab-labels">
            {Object.entries(groupedData.inPlay).length > 0 && (
              <div
                onClick={() =>
                  navigate(`/group/${name}/${eventTypeId}?type=inPlay`)
                }
                role="tab"
                className={`mdc-tab mat-mdc-tab mat-mdc-focus-indicator  ng-star-inserted  ${
                  type === "inPlay"
                    ? "mdc-tab--active mdc-tab-indicator--active"
                    : ""
                }`}
                id="mat-tab-label-0-0"
                tabIndex={0}
                aria-posinset={1}
                aria-setsize={3}
                aria-controls="mat-tab-content-0-0"
                aria-selected="true"
                aria-disabled="false"
              >
                <span className="mdc-tab__ripple" />
                <div className="mat-ripple mat-mdc-tab-ripple" />
                <span className="mdc-tab__content">
                  <span
                    className="mdc-tab__text-label"
                    style={{ color: "white", fontSize: "10px" }}
                  >
                    Inplay{" "}
                    <span className="badge inplay-badge ng-star-inserted">
                      {Object.entries(groupedData.inPlay).length}
                    </span>
                  </span>
                </span>
                <span className="mdc-tab-indicator">
                  <span
                    className="mdc-tab-indicator__content mdc-tab-indicator__content--underline"
                    style={{ borderColor: "var(--secondary-color)" }}
                  />
                </span>
              </div>
            )}
            {Object.entries(groupedData.today).length > 0 && (
              <div
                onClick={() =>
                  navigate(`/group/${name}/${eventTypeId}?type=today`)
                }
                role="tab"
                className={`mdc-tab mat-mdc-tab mat-mdc-focus-indicator  ng-star-inserted  ${
                  type === "today"
                    ? "mdc-tab--active mdc-tab-indicator--active"
                    : ""
                }`}
                id="mat-tab-label-0-1"
                tabIndex={-1}
                aria-posinset={2}
                aria-setsize={3}
                aria-controls="mat-tab-content-0-1"
                aria-selected="false"
                aria-disabled="false"
              >
                <span className="mdc-tab__ripple" />
                <div className="mat-ripple mat-mdc-tab-ripple" />
                <span className="mdc-tab__content">
                  <span
                    className="mdc-tab__text-label"
                    style={{ color: "white", fontSize: "10px" }}
                  >
                    Today{" "}
                    <span className="badge inplay-badge ng-star-inserted">
                      {" "}
                      {Object.entries(groupedData.today).length}
                    </span>
                  </span>
                </span>
                <span className="mdc-tab-indicator">
                  <span
                    className="mdc-tab-indicator__content mdc-tab-indicator__content--underline"
                    style={{ borderColor: "var(--secondary-color)" }}
                  />
                </span>
              </div>
            )}

            {Object.entries(groupedData.upcoming).length > 0 && (
              <div
                onClick={() =>
                  navigate(`/group/${name}/${eventTypeId}?type=upcoming`)
                }
                role="tab"
                className={`mdc-tab mat-mdc-tab mat-mdc-focus-indicator  ng-star-inserted  ${
                  type === "upcoming"
                    ? "mdc-tab--active mdc-tab-indicator--active"
                    : ""
                }`}
                id="mat-tab-label-0-2"
                tabIndex={-1}
                aria-posinset={3}
                aria-setsize={3}
                aria-controls="mat-tab-content-0-2"
                aria-selected="false"
                aria-disabled="false"
              >
                <span className="mdc-tab__ripple" />
                <div className="mat-ripple mat-mdc-tab-ripple" />
                <span className="mdc-tab__content">
                  <span
                    className="mdc-tab__text-label"
                    style={{ color: "white", fontSize: "10px" }}
                  >
                    Upcoming{" "}
                    <span className="badge inplay-badge ng-star-inserted">
                      {" "}
                      {Object.entries(groupedData.upcoming).length}
                    </span>
                  </span>
                </span>
                <span className="mdc-tab-indicator">
                  <span
                    className="mdc-tab-indicator__content mdc-tab-indicator__content--underline"
                    style={{ borderColor: "var(--secondary-color)" }}
                  />
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
      <button
        aria-hidden="true"
        type="button"
        tabIndex={-1}
        className="mat-ripple mat-mdc-tab-header-pagination mat-mdc-tab-header-pagination-after mat-mdc-tab-header-pagination-disabled"
        disabled
      >
        <div className="mat-mdc-tab-header-pagination-chevron" />
      </button>
    </div>
  );
};

export default Tab;
