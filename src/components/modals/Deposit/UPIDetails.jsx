import { GrCopy } from "react-icons/gr";
import { handleCopyToClipBoard } from "../../../utils/handleCopyToClipBoard";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setShowDepositModal } from "../../../redux/features/global/globalSlice";

const UPIDetails = ({ data }) => {
  const dispatch = useDispatch();
  const [secondsLeft, setSecondsLeft] = useState(5 * 60);

  useEffect(() => {
    if (secondsLeft === 0) return;

    const timer = setInterval(() => {
      setSecondsLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [secondsLeft]);

  const minutes = String(Math.floor(secondsLeft / 60)).padStart(2, "0");
  const seconds = String(secondsLeft % 60).padStart(2, "0");

  useEffect(() => {
    if (secondsLeft === 0) {
      dispatch(setShowDepositModal(false));
    }
  }, [secondsLeft, dispatch]);
  return (
    <div className="payment-type-details bank-transfer ng-star-inserted">
      <div className="card-title">
        <h4>
          <div className="img-wrap bank-img">
            <img style={{ height: "30px" }} src="/assets/upi.png" />
          </div>{" "}
          UPI
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
            {minutes}:{seconds}
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
          UPI payments may get failed, make UPI payments by UPI mode only.
        </p>
      </div>
      <ul>
        <li>
          <label>Display Name</label>
          <p>
            {data?.upiAccountName}
            <a
              onClick={() => handleCopyToClipBoard(data?.upiAccountName)}
              style={{ marginLeft: "4px" }}
            >
              <GrCopy /> <span style={{ marginLeft: "4px" }}>Copy</span>
            </a>
          </p>
        </li>
        <li>
          <label>UPI Details</label>
          <p>
            {data?.upiId}
            <a
              onClick={() => handleCopyToClipBoard(data?.upiId)}
              style={{ marginLeft: "4px" }}
            >
              <GrCopy /> <span style={{ marginLeft: "4px" }}>Copy</span>
            </a>
          </p>
        </li>
      </ul>
    </div>
  );
};

export default UPIDetails;
