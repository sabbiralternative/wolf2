import { useDispatch, useSelector } from "react-redux";
import ModalWrapper from "../ModalWrapper/ModalWrapper";
import { setAddBank } from "../../../redux/features/global/globalSlice";
import { useBankAccountMutation } from "../../../hooks/bankAccount";
import { Fragment, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { API, Settings } from "../../../api";
import { AxiosSecure } from "../../../lib/AxiosSecure";
import { jwtDecode } from "jwt-decode";

const AddBankAccount = () => {
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(setAddBank(false));
  };

  const { mutate } = useBankAccountMutation();
  const [isFormValid, setIsFormValid] = useState(false);
  const [mobile, setMobile] = useState(null);
  const { token } = useSelector((state) => state.auth);
  const [orderId, setOrderId] = useState(null);
  const [timer, setTimer] = useState(null);
  const [bankDetails, setBankDetails] = useState({
    accountName: "",
    ifsc: "",
    accountNumber: "",
    confirmAccountNumber: "",
    upiId: "",
    otp: "",
  });

  /* Handle add bank function */
  const handleAddBank = async (e) => {
    e.preventDefault();

    if (bankDetails.accountNumber != bankDetails.confirmAccountNumber) {
      return toast.error("Account number not matched!");
    }

    if (mobile && !bankDetails.otp && Settings.otp) {
      return toast.error("Please enter otp to add new account");
    }
    /* generating random token for post data */

    let bankData = {
      accountName: bankDetails.accountName,
      ifsc: bankDetails.ifsc,
      accountNumber: bankDetails.accountNumber,
      upiId: bankDetails.upiId,
      type: "addBankAccount",
    };
    if (mobile) {
      bankData.mobile = mobile;
      bankData.otp = bankDetails.otp;
      bankData.orderId = orderId;
    }

    mutate(bankData, {
      onSuccess: (data) => {
        if (data?.success) {
          setBankDetails({
            accountName: "",
            ifsc: "",
            accountNumber: "",
            confirmAccountNumber: "",
            otp: "",
          });
          toast.success(data?.result?.message);
          // setTab("oldAccount");
          // refetchBankAccounts();
          window.scrollTo(0, 0);
        } else {
          toast.error(data?.result?.message);
        }
      },
    });
  };

  const validateForm = (bankDetails) => {
    const isaccountNameFilled = bankDetails.accountName.trim() !== "";
    const isaccountNumberFilled = bankDetails.accountNumber.trim() !== "";
    const isIfscFilled = bankDetails.ifsc.trim() !== "";
    const isOTPFilled =
      mobile && Settings.otp ? bankDetails.otp.trim() !== "" : true;
    const isFormValid =
      isaccountNameFilled &&
      isIfscFilled &&
      isaccountNumberFilled &&
      isOTPFilled;
    setIsFormValid(isFormValid);
  };

  useEffect(() => {
    validateForm(bankDetails);
  }, [bankDetails]);

  const getOtp = async () => {
    const otpData = {
      mobile,
    };

    const res = await AxiosSecure.post(API.otp, otpData);
    const data = res.data;
    if (data?.success) {
      setTimer(60);
      setOrderId(data?.result?.orderId);
      toast.success(data?.result?.message);
    } else {
      toast.error(data?.error?.errorMessage);
    }
  };

  useEffect(() => {
    const getMobile = () => {
      const decode = jwtDecode(token);

      if (decode?.mobile) {
        setMobile(decode?.mobile);
      }
    };
    getMobile();
  }, [token]);

  useEffect(() => {
    if (timer > 0) {
      setTimeout(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else {
      setTimer(null);
    }
  }, [timer]);

  const getOtpOnWhatsapp = async () => {
    const otpData = {
      mobile: mobile,
      type: "otpsend",
    };

    const res = await AxiosSecure.post(API.otpless, otpData);
    const data = res.data;

    if (data?.success) {
      toast.success(data?.result?.message);
    } else {
      toast.error(data?.error?.errorMessage);
    }
  };
  return (
    <div className="cdk-overlay-container">
      <div className="cdk-overlay-backdrop cdk-overlay-dark-backdrop cdk-overlay-backdrop-showing" />
      <div
        className="cdk-global-overlay-wrapper"
        dir="ltr"
        style={{ justifyContent: "center", alignItems: "flex-end" }}
      >
        <div
          id="cdk-overlay-0"
          className="cdk-overlay-pane add-bank-dialog"
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
            tabIndex={-1}
            className="mat-mdc-dialog-container mdc-dialog cdk-dialog-container mdc-dialog--open"
            id="mat-mdc-dialog-0"
            role="dialog"
            aria-modal="true"
            style={{ "--mat-dialog-transition-duration": "150ms" }}
          >
            <div className="mdc-dialog__container">
              <div className="mat-mdc-dialog-surface mdc-dialog__surface">
                <ModalWrapper setModal={setAddBank} redux={true}>
                  <div className="ng-star-inserted">
                    <div className="add-bank-modal">
                      <div className="modal-header">
                        <h2>Add new bank account</h2>
                        <button
                          onClick={closeModal}
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
                          <span className="mat-ripple mat-mdc-button-ripple" />
                        </button>
                      </div>
                      <form
                        onSubmit={handleAddBank}
                        noValidate
                        className="ng-untouched ng-pristine ng-invalid"
                      >
                        <div className="modal-body">
                          <div className="form-wrap">
                            <div className="input-wrap ng-star-inserted">
                              <label>Account holder name*</label>
                              <input
                                onChange={(e) => {
                                  setBankDetails({
                                    ...bankDetails,
                                    accountName: e.target.value,
                                  });
                                }}
                                value={bankDetails.accountName}
                                placeholder="Enter account holder name"
                                type="text"
                                maxLength={30}
                                className="ng-untouched ng-pristine ng-invalid"
                                required
                              />
                            </div>
                            <div className="input-wrap ng-star-inserted">
                              <label>Account number*</label>
                              <input
                                onChange={(e) => {
                                  setBankDetails({
                                    ...bankDetails,
                                    accountNumber: e.target.value,
                                  });
                                }}
                                value={bankDetails.accountNumber}
                                placeholder="Enter Account Number"
                                type="tel"
                                maxLength={30}
                                className="ng-untouched ng-pristine ng-invalid"
                                required
                              />
                            </div>
                            <div className="input-wrap ng-star-inserted">
                              <label>Confirm Account number*</label>
                              <input
                                onChange={(e) => {
                                  setBankDetails({
                                    ...bankDetails,
                                    confirmAccountNumber: e.target.value,
                                  });
                                }}
                                value={bankDetails.confirmAccountNumber}
                                placeholder="Enter Account Number"
                                type="tel"
                                maxLength={30}
                                className="ng-untouched ng-pristine ng-invalid"
                                required
                              />
                            </div>
                            <div className="input-wrap ng-star-inserted">
                              <label>IFSC code*</label>

                              <input
                                onChange={(e) => {
                                  setBankDetails({
                                    ...bankDetails,
                                    ifsc: e.target.value,
                                  });
                                }}
                                value={bankDetails.ifsc}
                                placeholder="Enter bank iFSC"
                                type="text"
                                maxLength={11}
                                className="ifsc-input ng-untouched ng-pristine ng-invalid"
                              />
                            </div>
                            {mobile && Settings.otp && (
                              <div className="input-wrap ng-star-inserted">
                                <label>Mobile*</label>
                                <div
                                  style={{
                                    width: "100%",
                                    position: "relative",
                                  }}
                                >
                                  {" "}
                                  <input
                                    style={{ width: "100%" }}
                                    value={mobile}
                                    placeholder="Enter bank iFSC"
                                    type="text"
                                    maxLength={11}
                                    className="ifsc-input ng-untouched ng-pristine ng-invalid"
                                  />
                                  <div
                                    style={{
                                      position: "absolute",
                                      right: "5px",
                                      top: "10px",
                                      display: "flex",
                                      alignItems: "center",
                                      gap: "0px 5px",
                                    }}
                                  >
                                    {timer ? (
                                      <div
                                        style={{
                                          border: "none",
                                          width: "fit-content",
                                          background:
                                            "var(--primary-color-shade)",
                                          padding: "6px 6px",
                                          borderRadius: "4px",
                                          color: "white",
                                          fontSize: "10px",
                                        }}
                                      >
                                        Retry in {timer}
                                      </div>
                                    ) : (
                                      <Fragment>
                                        <button
                                          type="button"
                                          onClick={getOtp}
                                          style={{
                                            border: "none",
                                            width: "fit-content",
                                            background:
                                              "var(--primary-color-shade)",
                                            padding: "6px 6px",
                                            borderRadius: "4px",
                                            color: "white",
                                            fontSize: "10px",
                                          }}
                                        >
                                          Get OTP Whatsapp
                                        </button>
                                        <button
                                          type="button"
                                          onClick={getOtpOnWhatsapp}
                                          style={{
                                            border: "none",
                                            width: "fit-content",
                                            background:
                                              "var(--primary-color-shade)",
                                            padding: "6px 6px",
                                            borderRadius: "4px",
                                            color: "white",
                                            fontSize: "10px",
                                          }}
                                        >
                                          Get OTP Whatsapp
                                        </button>
                                      </Fragment>
                                    )}
                                  </div>
                                </div>
                              </div>
                            )}
                            {mobile && Settings.otp && (
                              <div className="input-wrap ng-star-inserted">
                                <label>OTP*</label>
                                <div
                                  style={{
                                    width: "100%",
                                    position: "relative",
                                  }}
                                >
                                  {" "}
                                  <input
                                    style={{ width: "100%" }}
                                    maxLength={6}
                                    onChange={(e) => {
                                      setBankDetails({
                                        ...bankDetails,
                                        otp: e.target.value,
                                      });
                                    }}
                                    value={bankDetails.otp}
                                    placeholder="Enter OTP"
                                    type="text"
                                    className="ifsc-input ng-untouched ng-pristine ng-invalid"
                                  />
                                </div>
                              </div>
                            )}

                            <div className="address-wrap ng-star-inserted"></div>
                          </div>
                        </div>
                        <div className="modal-footer">
                          <button
                            type="submit"
                            className="btn secondary-btn mdc-button mat-mdc-button mat-unthemed mat-mdc-button-base"
                            disabled={!isFormValid}
                          >
                            <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                            <span className="mdc-button__label"> Submit </span>
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
          </div>
          <div
            tabIndex={0}
            className="cdk-visually-hidden cdk-focus-trap-anchor"
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  );
};

export default AddBankAccount;
