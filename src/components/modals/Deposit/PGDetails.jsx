import { GrCopy } from "react-icons/gr";
import { handleCopyToClipBoard } from "../../../utils/handleCopyToClipBoard";
import images from "../../../assets/images";

const PGDetails = ({ data }) => {
  return (
    <div className="payment-type-details bank-transfer ng-star-inserted">
      <div className="card-title">
        <h4>
          <div className="img-wrap bank-img">
            <img src={images.bankTransfer} />
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
          UPI payments may get failed, make UPI payments by UPI mode only.
        </p>
      </div>
      <ul>
        <li>
          <label>Bank Name</label>
          <p>
            {data?.bankName}
            <a
              onClick={() => handleCopyToClipBoard(data?.bankName)}
              style={{ marginLeft: "4px" }}
            >
              <GrCopy /> <span style={{ marginLeft: "4px" }}>Copy</span>
            </a>
          </p>
        </li>
        <li>
          <label>Account Holder Name</label>
          <p>
            {data?.accountName}
            <a
              onClick={() => handleCopyToClipBoard(data?.accountName)}
              style={{ marginLeft: "4px" }}
            >
              <GrCopy /> <span style={{ marginLeft: "4px" }}>Copy</span>
            </a>
          </p>
        </li>
        <li>
          <label>Account Number</label>
          <p>
            {data?.accountNumber}
            <a
              onClick={() => handleCopyToClipBoard(data?.accountNumber)}
              style={{ marginLeft: "4px" }}
            >
              <GrCopy /> <span style={{ marginLeft: "4px" }}>Copy</span>
            </a>
          </p>
        </li>
        <li>
          <label>IFSC Code</label>
          <p>
            {data?.ifsc}
            <a
              onClick={() => handleCopyToClipBoard(data?.ifsc)}
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

export default PGDetails;
