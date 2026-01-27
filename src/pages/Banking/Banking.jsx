import { useState } from "react";
import { useBankAccountQuery } from "../../hooks/bankAccount";
import { useDispatch, useSelector } from "react-redux";
import { setAddBank } from "../../redux/features/global/globalSlice";

const Banking = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [bankId, setBankId] = useState(null);
  const [activeTab, setActiveTab] = useState(1);
  const { data: bankAccount } = useBankAccountQuery({
    type: "getBankAccounts",
    status: activeTab,
  });

  const handleToggleVisible = (id) => {
    if (bankId === id) {
      setBankId(null);
    } else {
      setBankId(id);
    }
  };
  return (
    <div className="page-body">
      <div
        role="main"
        className="ion-content md content-ltr hydrated"
        style={{ "--offset-top": "0px", "--offset-bottom": "0px" }}
      >
        <div slot="fixed" className="md refresher-md hydrated refresher-native">
          <div className="md hydrated">
            <div className="refresher-pulling">
              <div className="refresher-pulling-icon">
                <div className="spinner-arrow-container">
                  <div
                    className="md spinner-circular spinner-paused hydrated"
                    role="progressbar"
                    style={{ animationDuration: "1400ms" }}
                  />
                  <div className="arrow-container">
                    <div
                      aria-hidden="true"
                      role="img"
                      className="md hydrated"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="refresher-refreshing">
              <div className="refresher-refreshing-icon">
                <div
                  className="md spinner-circular hydrated"
                  role="progressbar"
                  style={{
                    animationDuration: "1400ms",
                    animationDelay: "-655ms",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="banking-page-wrap">
          <div className="ng-star-inserted app-for-internal">
            <div className="forSearchBar-internal">
              <div className="ng-star-inserted">
                <div className="search-wrapper">
                  <div className="search-field">
                    <div
                      role="img"
                      className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                      aria-hidden="true"
                      data-mat-icon-type="font"
                    >
                      search
                    </div>
                    <input
                      type="text"
                      placeholder="Search Matches / Casino Games"
                      className="ng-untouched ng-pristine ng-valid"
                    />
                  </div>
                  <div
                    role="img"
                    className="mat-icon notranslate material-icons search-btn mat-ligature-font mat-icon-no-color"
                    aria-hidden="true"
                    data-mat-icon-type="font"
                  >
                    search
                  </div>
                </div>
              </div>
              <div className="latest-events announcements ng-star-inserted">
                <div className="ann-wrap">
                  <div
                    role="img"
                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                    aria-hidden="true"
                    data-mat-icon-type="font"
                  >
                    campaign
                  </div>
                  <marquee
                    width="100%"
                    direction="left"
                    height="auto"
                    className="ng-star-inserted"
                  >
                    You are playing on India’s most trending and trusted sports
                    and casino website! Happy Punting!
                  </marquee>
                </div>
              </div>
            </div>
          </div>
          <div
            className="mat-mdc-tab-group banking-tabs-group mat-primary mat-mdc-tab-group-stretch-tabs"
            style={{ "--mat-tab-animation-duration": "0ms" }}
          >
            <div className="mat-mdc-tab-header mat-tab-header">
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
                    <div
                      onClick={() => setActiveTab(1)}
                      role="tab"
                      className={`mdc-tab mat-mdc-tab mat-mdc-focus-indicator  ng-star-inserted  ${activeTab === 1 ? "mdc-tab-indicator--active mdc-tab--active" : ""}`}
                      id="mat-tab-label-5-0"
                      tabIndex={0}
                      aria-posinset={1}
                      aria-setsize={3}
                      aria-controls="mat-tab-content-5-0"
                      aria-selected="true"
                      aria-disabled="false"
                    >
                      <span className="mdc-tab__ripple" />
                      <div className="mat-ripple mat-mdc-tab-ripple" />
                      <span className="mdc-tab__content">
                        <span className="mdc-tab__text-label">
                          Active Banks
                        </span>
                      </span>
                      <span className="mdc-tab-indicator">
                        <span className="mdc-tab-indicator__content mdc-tab-indicator__content--underline" />
                      </span>
                    </div>
                    <div
                      onClick={() => setActiveTab(0)}
                      role="tab"
                      className={`mdc-tab mat-mdc-tab mat-mdc-focus-indicator  ng-star-inserted  ${activeTab === 0 ? "mdc-tab-indicator--active mdc-tab--active" : ""}`}
                      id="mat-tab-label-5-1"
                      tabIndex={-1}
                      aria-posinset={2}
                      aria-setsize={3}
                      aria-controls="mat-tab-content-5-1"
                      aria-selected="false"
                      aria-disabled="false"
                    >
                      <span className="mdc-tab__ripple" />
                      <div className="mat-ripple mat-mdc-tab-ripple" />
                      <span className="mdc-tab__content">
                        <span className="mdc-tab__text-label">Deleted</span>
                      </span>
                      <span className="mdc-tab-indicator">
                        <span className="mdc-tab-indicator__content mdc-tab-indicator__content--underline" />
                      </span>
                    </div>
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
            <div className="mat-mdc-tab-body-wrapper">
              <div
                role="tabpanel"
                className="mat-mdc-tab-body ng-tns-c737557735-51 mat-mdc-tab-body-active ng-star-inserted"
                id="mat-tab-content-5-0"
                aria-labelledby="mat-tab-label-5-0"
                aria-hidden="false"
              >
                <div
                  className="mat-mdc-tab-body-content ng-tns-c737557735-51 ng-trigger ng-trigger-translateTab"
                  style={{ transform: "none" }}
                >
                  <div className="user-details ng-star-inserted" style={{}}>
                    <p className="notranslate"></p>
                    <p className="notranslate">
                      <img alt="Flag" src="/src/assets/img/India.svg" />
                      {user}
                    </p>
                  </div>
                  <div
                    onClick={() => dispatch(setAddBank(true))}
                    className="action-btn ng-star-inserted"
                    style={{}}
                  >
                    <button
                      type="button"
                      className="btn secondary-btn ng-star-inserted"
                    >
                      Add New Bank
                    </button>
                  </div>
                  <div className="title-bar ng-star-inserted" style={{}}>
                    <h2 className="title">Bank Details</h2>
                  </div>
                  <div className="banks-list-wrap ng-star-inserted" style={{}}>
                    {bankAccount?.map((account) => {
                      return (
                        <div
                          key={account?.bankId}
                          className="mat-accordion ng-star-inserted"
                        >
                          {activeTab === 1 && (
                            <div className="del-wrap ng-star-inserted">
                              <div
                                role="img"
                                className="mat-icon notranslate material-symbols delete-icon material-icons mat-ligature-font mat-icon-no-color"
                                aria-hidden="true"
                                data-mat-icon-type="font"
                              >
                                delete
                              </div>
                            </div>
                          )}

                          <div className="mat-expansion-panel mat-exp-bank-item ng-tns-c1859850774-54 ng-star-inserted mat-expanded mat-expansion-panel-spacing">
                            <div
                              role="button"
                              className="mat-expansion-panel-header mat-focus-indicator ng-tns-c2690051721-55 ng-tns-c1859850774-54 mat-expansion-toggle-indicator-after ng-star-inserted mat-expanded"
                              id="mat-expansion-panel-header-14"
                              tabIndex={0}
                              aria-controls="cdk-accordion-child-14"
                              aria-expanded="true"
                              aria-disabled="false"
                            >
                              <span className="mat-content ng-tns-c2690051721-55 mat-content-hide-toggle">
                                <div className="mat-expansion-panel-header-title ng-tns-c2690051721-55">
                                  <div className="img-wrap">
                                    <img
                                      alt="Bank Icon"
                                      src="https://ss.manage63.com/south247/uploads/bank/1662721058738_490509_SCWGQZKKJJCSNDKEDYBSHKNUF.png"
                                    />
                                  </div>
                                  <h2>
                                    {account?.bankName}
                                    {account?.isDefault === 1 && (
                                      <span className="preffered ng-star-inserted">
                                        Default
                                      </span>
                                    )}
                                  </h2>
                                </div>
                                <div className="mat-expansion-panel-header-description ng-tns-c2690051721-55">
                                  <div
                                    onClick={() =>
                                      handleToggleVisible(account?.bankId)
                                    }
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color ng-star-inserted"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                    style={{}}
                                  >
                                    arrow_drop_down
                                  </div>
                                </div>
                              </span>
                            </div>
                            <div
                              role="region"
                              className="mat-expansion-panel-content ng-tns-c1859850774-54 ng-trigger ng-trigger-bodyExpansion"
                              id="cdk-accordion-child-14"
                              aria-labelledby="mat-expansion-panel-header-14"
                              style={{
                                display:
                                  account?.bankId === bankId ? "block" : "none",
                              }}
                            >
                              <div className="mat-expansion-panel-body ng-tns-c1859850774-54">
                                <div className="banks-details ng-tns-c1859850774-54">
                                  <ul>
                                    <li>
                                      <label>Account holder name</label>
                                      <p>{account?.bankAccountName}</p>
                                    </li>
                                    <li>
                                      <label>Account number</label>
                                      <p>{account?.accountNumber}</p>
                                    </li>
                                    <li>
                                      <label>IFSC Code</label>
                                      <p>{account?.ifsc}</p>
                                    </li>
                                    <li>
                                      <label>Account added on</label>
                                      <p>{account?.dateAdded}</p>
                                    </li>
                                  </ul>
                                  <div
                                    className="action-btn ng-star-inserted"
                                    style={{}}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banking;
