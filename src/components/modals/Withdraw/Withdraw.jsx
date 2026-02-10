import { useState } from "react";
import useWithdrawBreakdown from "../../../hooks/withdrawBreakdown";
import {
  useBankAccountMutation,
  useBankAccountQuery,
} from "../../../hooks/bankAccount";
import toast from "react-hot-toast";
import ModalWrapper from "../ModalWrapper/ModalWrapper";

const Withdraw = ({ setShowWithdrawModal }) => {
  const [amount, setAmount] = useState();
  const { data } = useWithdrawBreakdown();
  const { data: bankAccounts } = useBankAccountQuery({
    type: "getBankAccounts",
    status: "1",
  });
  const { mutate: handleBank } = useBankAccountMutation();
  const [bankId, setBankId] = useState("");
  const [disable, setDisable] = useState(false);

  const closeModal = () => {
    setShowWithdrawModal(false);
  };

  const handleWithdraw = async (e) => {
    e.preventDefault();
    setDisable(true);
    if (amount?.length > 0 && bankId) {
      const bankData = {
        type: "withdrawCoins",
        amount: amount,
        bankId,
      };
      handleBank(bankData, {
        onSuccess: (data) => {
          if (data?.success) {
            toast.success(data?.result?.message);
            closeModal();
          } else {
            toast.error(data?.error?.errorMessage);
          }
        },
        onError: (data) => {
          toast.error(data?.error?.errorMessage);
        },
      });
    }
  };

  const bankData = bankAccounts?.find((bank) => bank?.bankId === bankId);

  return (
    <div className="cdk-overlay-container" style={{ zIndex: 2000 }}>
      <div className="cdk-overlay-backdrop cdk-overlay-dark-backdrop cdk-overlay-backdrop-showing"></div>
      <div
        className="cdk-global-overlay-wrapper"
        dir="ltr"
        style={{ justifyContent: "center", alignItems: "flex-end" }}
      >
        <div
          id="cdk-overlay-3"
          className="cdk-overlay-pane dw-dialog"
          style={{
            width: "100%",
            maxWidth: "500px",
            position: "static",
            marginBottom: "0px",
          }}
        >
          <div
            tabIndex={0}
            className="cdk-visually-hidden cdk-focus-trap-anchor"
            aria-hidden="true"
          />
          <div
            className="mat-mdc-dialog-container mdc-dialog cdk-dialog-container mdc-dialog--open"
            id="mat-mdc-dialog-2"
            role="dialog"
            aria-modal="true"
            style={{ "--mat-dialog-transition-duration": "150ms" }}
          >
            <div className="mdc-dialog__container">
              <div className="mat-mdc-dialog-surface mdc-dialog__surface">
                <ModalWrapper setModal={setShowWithdrawModal}>
                  <div className="ng-star-inserted">
                    <div className="transaction-modal ng-star-inserted">
                      <div className="modal-header">
                        <h2>Withdraw</h2>
                        <button
                          onClick={closeModal}
                          className="modal-close-btn mdc-button mat-mdc-button mat-unthemed mat-mdc-button-base"
                          type="button"
                        >
                          <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                          <div
                            role="img"
                            className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                            aria-hidden="true"
                            data-mat-icon-type="font"
                          >
                            close{" "}
                          </div>
                          <span className="mdc-button__label" />
                          <span className="mat-mdc-focus-indicator" />
                          <span className="mat-mdc-button-touch-target" />
                          <span className="mat-ripple mat-mdc-button-ripple" />
                        </button>
                      </div>
                      <form
                        onSubmit={handleWithdraw}
                        noValidate
                        className="ng-pristine ng-invalid ng-touched"
                      >
                        <div className="modal-body">
                          <div className="card-wrap">
                            <div className="avl-bal show-bal">
                              <div>Available Balance</div>
                              <p>{data?.mainWallet}</p>
                            </div>
                          </div>
                          <div className="form-wrap">
                            <label>Withdraw Coins</label>
                            <input
                              onChange={(e) => setAmount(e.target.value)}
                              placeholder="Enter Coins"
                              type="number"
                              className="ng-pristine ng-invalid ng-touched"
                            />
                            <p className="note-message ng-star-inserted">
                              Minimum withdrawal amount is{" "}
                              {data?.minimumWithdraw} coins
                            </p>
                          </div>
                          <div className="withdraw-bankDetails ng-star-inserted">
                            <div className="bankDetails-list">
                              <div className="pref-head">
                                {" "}
                                Preferred Bank
                                <div>
                                  <select
                                    style={{
                                      padding: "4px 8px",
                                      borderRadius: "10px",
                                      border: "1px solid #000",
                                      fontSize: "10px",
                                    }}
                                    onChange={(e) => setBankId(e.target.value)}
                                    name=""
                                    id=""
                                  >
                                    <option value="">
                                      Select Bank Account
                                    </option>
                                    {bankAccounts?.map((item, index) => {
                                      return (
                                        <option
                                          key={index}
                                          value={item?.bankId}
                                        >
                                          {item?.bankName}
                                        </option>
                                      );
                                    })}
                                  </select>
                                </div>
                              </div>
                              {bankData && (
                                <ul className="bankinfo-list">
                                  <li>
                                    <label>Account Holder</label>
                                    <p>{bankData?.bankAccountName}</p>
                                  </li>
                                  <li>
                                    <label>Account number</label>
                                    <p>{bankData?.accountNumber}</p>
                                  </li>
                                  <li>
                                    <label>IFSC</label>
                                    <p>{bankData?.ifsc}</p>
                                  </li>
                                  <li>
                                    <label>Bank Name</label>
                                    <p>{bankData?.bankName}</p>
                                  </li>
                                </ul>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="modal-footer">
                          <button
                            disabled={
                              disable ||
                              !bankId ||
                              amount < data?.minimumWithdraw ||
                              amount > data?.mainWallet
                            }
                            type="submit"
                            className="btn secondary-btn mdc-button mat-mdc-button mat-unthemed mat-mdc-button-base"
                          >
                            <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                            <span className="mdc-button__label">
                              {" "}
                              Withdraw Coins
                            </span>
                            <span className="mat-mdc-focus-indicator" />
                            <span className="mat-mdc-button-touch-target" />
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </ModalWrapper>
              </div>
            </div>
            <div
              tabIndex={0}
              className="cdk-visually-hidden cdk-focus-trap-anchor"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Withdraw;
