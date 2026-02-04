import { useDispatch } from "react-redux";
import { setShowDepositModal } from "../../../redux/features/global/globalSlice";
import UploadTransaction from "./UploadTransaction";
import BankDetails from "./BankDetails";
import UPIDetails from "./UPIDetails";
import QRDetails from "./QRDetails";
import USDTDetails from "./USDTDetails";
import PGDetails from "./PGDetails";

const DepositPaymentProof = ({
  amount,
  setDepositTab,
  paymentId,
  depositData,
  methodType,
  methodTitle,
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
              style={{ color: "white" }}
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
              {methodType === "bank" && <BankDetails data={depositData} />}
              {methodType === "upi" && <UPIDetails data={depositData} />}
              {methodType === "qr" && <QRDetails data={depositData} />}
              {(methodType === "usdt" || methodType === "usdt_bep20") && (
                <USDTDetails data={depositData} />
              )}
              {methodType === "pg" && <PGDetails data={depositData} />}

              <UploadTransaction
                paymentId={paymentId}
                amount={amount}
                methodType={methodType}
                methodTitle={methodTitle}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepositPaymentProof;
