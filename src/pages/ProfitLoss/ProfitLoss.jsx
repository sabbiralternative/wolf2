import { useState } from "react";
import { useAccountStatement } from "../../hooks/accountStatement";
import SingleProfitLoss from "../../components/modals/SingleProfitLoss/SingleProfitLoss";
import { fromDate, toDate } from "../../utils/default-date";
import moment from "moment";

const ProfitLoss = () => {
  const [marketId, setMarketId] = useState(null);
  const [from, setFrom] = useState(fromDate);
  const [to, setTo] = useState(toDate);

  const payload = {
    from: moment(from).format("YYYY-MM-DD"),
    to: moment(to).format("YYYY-MM-DD"),
    type: "GR",
  };

  const { data } = useAccountStatement(payload);

  const today = new Date();
  const fourteenDaysBack = new Date();
  fourteenDaysBack.setDate(today.getDate() - 14);

  const getDateString = (date) => date.toISOString().split("T")[0];
  const minDate = getDateString(fourteenDaysBack);
  const maxDate = getDateString(today);

  const clearFilter = () => {
    setFrom(fromDate);
    setTo(toDate);
  };

  return (
    <div className="page-body">
      {marketId && (
        <SingleProfitLoss setMarketId={setMarketId} marketId={marketId} />
      )}
      <div className="pagetab-content" style={{ padding: "10px" }}>
        {" "}
        <div className="txn-filter ng-star-inserted">
          <div className="date_time">
            <div className="dt_col">
              <label htmlFor="from">From</label>
              <div className="input-wrap">
                <input
                  onChange={(e) => setFrom(e.target.value)}
                  value={from}
                  onClick={(e) => e.target.showPicker()}
                  type="date"
                  name="from"
                  id="from"
                  className="date_picker ng-valid ng-dirty ng-touched"
                  min={minDate}
                  max={maxDate}
                />
              </div>
            </div>
            <div className="dt_col">
              <label htmlFor="to">To</label>
              <div className="input-wrap">
                <input
                  onChange={(e) => setTo(e.target.value)}
                  value={to}
                  onClick={(e) => e.target.showPicker()}
                  type="date"
                  name="to"
                  id="to"
                  className="date_picker ng-untouched ng-pristine ng-valid"
                  min={minDate}
                  max={maxDate}
                />
              </div>
            </div>
          </div>

          <div className="select-menu">
            <div
              style={{ minWidth: "50%" }}
              className="mat-form-field mat-mdc-form-field ng-tns-c1205077789-61 mat-mdc-form-field-type-mat-select mat-form-field-appearance-fill mat-primary ng-untouched ng-pristine ng-valid ng-star-inserted"
            >
              <div className="mat-mdc-text-field-wrapper mdc-text-field ng-tns-c1205077789-61 mdc-text-field--filled mdc-text-field--no-label">
                <div className="mat-mdc-form-field-focus-overlay ng-tns-c1205077789-61 ng-star-inserted"></div>

                <div className="mat-mdc-form-field-flex ng-tns-c1205077789-61">
                  <div className="mat-mdc-form-field-infix ng-tns-c1205077789-61">
                    <div
                      role="combobox"
                      aria-autocomplete="none"
                      aria-haspopup="listbox"
                      placeholder="Transaction Type"
                      className="mat-mdc-select ng-tns-c3393473648-62 ng-tns-c1205077789-61 ng-untouched ng-pristine ng-valid ng-star-inserted"
                      aria-labelledby="mat-select-value-13"
                      id="mat-select-12"
                      tabIndex={0}
                      aria-expanded="false"
                      aria-required="false"
                      aria-disabled="false"
                      aria-invalid="false"
                    >
                      <div className="mat-mdc-select-trigger ng-tns-c3393473648-62">
                        <div
                          className="mat-mdc-select-value ng-tns-c3393473648-62"
                          id="mat-select-value-13"
                        >
                          <span className="mat-mdc-select-value-text ng-tns-c3393473648-62 ng-star-inserted">
                            <span className="mat-mdc-select-min-line ng-tns-c3393473648-62 ng-star-inserted">
                              All
                            </span>
                          </span>
                        </div>
                        <div className="mat-mdc-select-arrow-wrapper ng-tns-c3393473648-62">
                          <div className="mat-mdc-select-arrow ng-tns-c3393473648-62">
                            <svg
                              viewBox="0 0 24 24"
                              width="24px"
                              height="24px"
                              focusable="false"
                              aria-hidden="true"
                              className="ng-tns-c3393473648-62"
                            >
                              <path
                                d="M7 10l5 5 5-5z"
                                className="ng-tns-c3393473648-62"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mdc-line-ripple ng-tns-c1205077789-61 mdc-line-ripple--deactivating ng-star-inserted"></div>
              </div>
              <div className="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align ng-tns-c1205077789-61">
                <div
                  className="mat-mdc-form-field-hint-wrapper ng-tns-c1205077789-61 ng-trigger ng-trigger-transitionMessages ng-star-inserted"
                  style={{ opacity: 1, transform: "translateY(0%)" }}
                >
                  <div className="mat-mdc-form-field-hint-spacer ng-tns-c1205077789-61"></div>
                </div>
              </div>
            </div>
            <button
              onClick={clearFilter}
              type="button"
              className="btn secondary-btn"
            >
              <div
                role="img"
                className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                aria-hidden="true"
                data-mat-icon-type="font"
              >
                filter_alt_off
              </div>
              Clear filter
            </button>
          </div>
        </div>
        <div
          className="ion-content ios overscroll content-ltr hydrated"
          role="main"
          style={{ "--offset-top": "0px", "--offset-bottom": "0px" }}
        >
          <div slot="fixed" className="ios refresher-ios hydrated">
            <div className="ios hydrated">
              <div className="refresher-pulling">
                <div className="refresher-pulling-icon">
                  <div className="spinner-arrow-container">
                    <div
                      className="ios spinner-circular spinner-paused hydrated"
                      role="progressbar"
                      style={{ animationDuration: "1400ms" }}
                    />
                  </div>
                </div>
              </div>
              <div className="refresher-refreshing">
                <div className="refresher-refreshing-icon">
                  <div
                    className="ios spinner-lines hydrated"
                    role="progressbar"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="txn-tbl ng-star-inserted">
            <div className="header-wrap">
              <ul className="tbl-head">
                <li>Date</li>

                <li>Member Win</li>
                <li>Balance</li>
                <li style={{ background: "var(--grey-50)" }}>Remark</li>
              </ul>
            </div>
            <div className="body-wrap">
              {data?.result?.map((item, index) => {
                return (
                  <ul key={index} className="ng-star-inserted">
                    <li>
                      <span>{item?.settledTime}</span>
                    </li>

                    <li
                      className={`${item?.memberWin > 0 ? "success-text" : "danger-text"}`}
                    >
                      {item?.memberWin}
                    </li>
                    <li>{item?.balance}</li>
                    <li>
                      <a
                        onClick={() => setMarketId(item?.marketId)}
                        style={{ cursor: "pointer" }}
                      >
                        {item?.narration}
                      </a>
                    </li>
                  </ul>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfitLoss;
