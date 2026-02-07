import { useState } from "react";
import DepositReport from "./DepositReport";
import WithdrawReport from "./WithdrawReport";

const DepositWithdrawReport = () => {
  const [activeTab, setActiveTab] = useState("deposit");

  return (
    <div
      className="mat-mdc-tab-body-wrapper"
      style={{ flexDirection: "column" }}
    >
      <div
        style={{
          marginTop: "10px",
          padding: "10px",
          display: "flex",
          gap: "0px 10px",
          maxWidth: "400px",
        }}
      >
        <button
          onClick={() => setActiveTab("deposit")}
          className={`btn  ${activeTab === "deposit" ? "secondary-btn" : "white-bg"}`}
        >
          Deposit
        </button>
        <button
          onClick={() => setActiveTab("withdraw")}
          className={`btn  ${activeTab === "withdraw" ? "secondary-btn" : "white-bg"}`}
        >
          Withdraw
        </button>
      </div>

      <div
        role="tabpanel"
        className="mat-mdc-tab-body ng-tns-c737557735-31 ng-star-inserted mat-mdc-tab-body-active"
        id="mat-tab-content-4-0"
        aria-labelledby="mat-tab-label-4-0"
        aria-hidden="false"
      >
        <div
          className="mat-mdc-tab-body-content ng-tns-c737557735-31 ng-trigger ng-trigger-translateTab"
          style={{ transform: "none" }}
        >
          <div className="ng-star-inserted">
            <div
              role="main"
              className="ios overscroll content-ltr hydrated"
              style={{ "--offset-top": "0px", "--offset-bottom": "0px" }}
            >
              <div className="transactions-wrap">
                <div className="title">
                  <h2>Transactions</h2>
                </div>
                {activeTab === "deposit" && <DepositReport />}
                {activeTab === "withdraw" && <WithdrawReport />}
              </div>{" "}
            </div>
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default DepositWithdrawReport;
