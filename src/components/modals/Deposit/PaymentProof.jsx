import { useDispatch } from "react-redux";
import { setShowDepositModal } from "../../../redux/features/global/globalSlice";
import UploadTransaction from "./UploadTransaction";

const DepositPaymentProof = ({
  amount,
  setDepositTab,
  paymentId,
  depositData,
  methodType,
}) => {
  const dispatch = useDispatch();

  return (
    <div className="ng-star-inserted">
      <div className="deposit-system-modal">
        <div className="modal-header">
          <button
            onClick={() => setDepositTab("account")}
            className="modal-back-btn mdc-button mat-mdc-button mat-unthemed mat-mdc-button-base"
          >
            <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
            <div
              role="img"
              className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
              aria-hidden="true"
              data-mat-icon-type="font"
            >
              {" "}
              arrow_back
            </div>
            <span className="mdc-button__label" />
            <span className="mat-mdc-focus-indicator" />
            <span className="mat-mdc-button-touch-target" />
            <span className="mat-ripple mat-mdc-button-ripple" />
          </button>
          <h2>
            {" "}
            Deposit <span className="amount"> ₹{amount}</span>
          </h2>
          <button
            onClick={() => {
              dispatch(setShowDepositModal(false));
            }}
            className="modal-close-btn mdc-button mat-mdc-button mat-unthemed mat-mdc-button-base"
          >
            <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
            <div
              role="img"
              className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
              aria-hidden="true"
              data-mat-icon-type="font"
            >
              {" "}
              close{" "}
            </div>
            <span className="mdc-button__label" />
            <span className="mat-mdc-focus-indicator" />
            <span className="mat-mdc-button-touch-target" />
          </button>
        </div>
        <div className="modal-body ng-star-inserted">
          <div className="payment-wrap">
            <div className="select-method-wrap">
              {methodType === "bank" && (
                <div className="payment-type-details bank-transfer ng-star-inserted">
                  <div className="card-title">
                    <h4>
                      <div className="img-wrap bank-img">
                        <img src="/src/assets/img/bank-transfer-icon.svg" />
                      </div>{" "}
                      Bank Details
                    </h4>
                    <div className="timerWrap">
                      <span className="timer">
                        <div
                          role="img"
                          className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                          aria-hidden="true"
                          data-mat-icon-type="font"
                        >
                          access_time
                        </div>{" "}
                        04:52
                      </span>
                    </div>
                  </div>
                  <div className="pay-info-txt-Wrp ng-star-inserted">
                    <p className="green-text">
                      <span className="material-icons"> check</span>
                      Use only net banking or mobile banking.
                    </p>
                    <p className="red-text">
                      <span className="material-icons"> clear</span>
                      Do not deposit cash in the bank or the ATM.
                    </p>
                    <p className="red-text">
                      <span className="material-icons"> clear</span>
                      UPI payments may get failed, make UPI payments by UPI mode
                      only.
                    </p>
                  </div>
                  <ul>
                    <li>
                      <label>Bank Name</label>
                      <p>
                        DCB Bank{" "}
                        <a>
                          <span className="appico-copy" /> Copy{" "}
                        </a>
                      </p>
                    </li>
                    <li>
                      <label>Account Holder Name</label>
                      <p>
                        Style junction{" "}
                        <a>
                          <span className="appico-copy" /> Copy{" "}
                        </a>
                      </p>
                    </li>
                    <li>
                      <label>Account Number</label>
                      <p>
                        18622401012005{" "}
                        <a>
                          <span className="appico-copy" /> Copy{" "}
                        </a>
                      </p>
                    </li>
                    <li>
                      <label>IFSC Code</label>
                      <p>
                        DCBL0000186{" "}
                        <a>
                          <span className="appico-copy" /> Copy{" "}
                        </a>
                      </p>
                    </li>
                  </ul>
                </div>
              )}

              <UploadTransaction
                paymentId={paymentId}
                amount={amount}
                methodType={methodType}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepositPaymentProof;
