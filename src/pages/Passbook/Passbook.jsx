import { useLocation, useNavigate } from "react-router-dom";
import { passbookTabs } from "../../static/passbook-tab";
import DepositWithdrawReport from "../../components/modules/Passbook/DepositWithdrawReport";

const Passbook = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const tab = params.get("tab");

  return (
    <div className="page-body">
      <div className="pagetab-content">
        <div className="passbook-page-wrap">
          <div
            className="mat-mdc-tab-group passbook-tabs-group mat-primary mat-mdc-tab-group-stretch-tabs"
            style={{ "--mat-tab-animation-duration": "0ms" }}
          >
            <div
              className="mat-tab-header mat-mdc-tab-header mat-mdc-tab-header-pagination-controls-enabled"
              style={{ zIndex: "10" }}
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
                <div
                  role="tablist"
                  className="mat-mdc-tab-list"
                  style={{ transform: "translateX(0px)" }}
                >
                  <div className="mat-mdc-tab-labels">
                    {passbookTabs?.map((item) => {
                      return (
                        <div
                          onClick={() =>
                            navigate(
                              `/passbook?tab=${item?.label?.toLowerCase()}`,
                            )
                          }
                          key={item.label}
                          role="tab"
                          className={`mdc-tab mat-mdc-tab mat-mdc-focus-indicator ng-star-inserted ${tab === item?.label?.toLowerCase() ? "mdc-tab--active mdc-tab-indicator--active" : ""}`}
                          id="mat-tab-label-4-1"
                          tabIndex={-1}
                          aria-posinset={2}
                          aria-setsize={7}
                          aria-controls="mat-tab-content-4-1"
                          aria-selected="false"
                          aria-disabled="false"
                        >
                          <span className="mdc-tab__ripple" />
                          <div className="mat-ripple mat-mdc-tab-ripple" />
                          <span className="mdc-tab__content">
                            <span className="mdc-tab__text-label">
                              {item.label}
                            </span>
                          </span>
                          <span className="mdc-tab-indicator">
                            <span className="mdc-tab-indicator__content mdc-tab-indicator__content--underline" />
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <button
                aria-hidden="true"
                type="button"
                tabIndex={-1}
                className="mat-ripple mat-mdc-tab-header-pagination mat-mdc-tab-header-pagination-after"
              >
                <div className="mat-mdc-tab-header-pagination-chevron" />
              </button>
            </div>

            <DepositWithdrawReport />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Passbook;
