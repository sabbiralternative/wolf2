import { useBankAccountQuery } from "../../../hooks/bankAccount";
import { API } from "../../../api";
import { AxiosSecure } from "../../../lib/AxiosSecure";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setShowDepositModal } from "../../../redux/features/global/globalSlice";

const DepositPaymentGateway = ({
  amount,
  setDepositTab,
  setDepositData,
  setMethodType,
  setPaymentId,
  setMethodTitle,
}) => {
  const dispatch = useDispatch();
  const { data: depositMethods } = useBankAccountQuery({
    type: "depositMethods",
    amount: amount,
  });

  const handleVisibleBankMethod = async (method) => {
    setMethodType(method?.type);
    setPaymentId(method?.paymentId);
    setMethodTitle(method?.title);

    if (
      method?.type === "upigateway" ||
      method?.type === "toitgateway" ||
      method?.type === "i100gateway" ||
      method?.type === "upiclick"
    ) {
      let pgPayload = {
        paymentId: method?.paymentId,
        amount: amount,
        method: method?.type,
      };

      const res = await AxiosSecure.post(API.pg, pgPayload);

      if (res?.data?.success) {
        window.location.href = res?.data?.result?.link;
      } else {
        toast.error(res?.data?.result);
      }
    } else {
      const depositDetail = {
        type: "depositDetails",
        paymentId: method?.paymentId,
        amount: amount,
      };

      const res = await AxiosSecure.post(API.bankAccount, depositDetail);

      const data = res?.data;
      if (data?.success) {
        if (method?.type === "whatsapp") {
          window.location.href = data?.result?.link;
        } else {
          setDepositData(data?.result);
          setDepositTab("paymentProof");
        }
      }
    }
  };
  return (
    <div className="ng-star-inserted">
      <div className="deposit-system-modal">
        <div className="modal-header">
          <button
            onClick={() => {
              setDepositTab("amount");
            }}
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
          <div className="pay-methods-wrap">
            {Array.isArray(depositMethods) &&
              depositMethods?.length > 0 &&
              depositMethods
                ?.sort((a, b) => a?.sort - b?.sort)
                ?.map((method) => {
                  return (
                    <div
                      onClick={() => handleVisibleBankMethod(method)}
                      key={method?.paymentId}
                      className="pay-item f-order- ng-star-inserted"
                    >
                      <div className="title">
                        <h2>{method?.title}</h2>
                      </div>
                      <div className="img-wrap">
                        {
                          <img
                            alt="icon"
                            className="pay-icon"
                            src={`/assets/${method?.type}.png`}
                          />
                        }
                      </div>
                    </div>
                  );
                })}
          </div>
        </div>
        {/* <div className="modal-footer ng-star-inserted">
          <p className="ng-star-inserted">
            Payment Gateway Unapproved Payments?{" "}
            <span className="link-text">Click here</span>
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default DepositPaymentGateway;
