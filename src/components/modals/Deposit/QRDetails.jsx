import { GrCopy } from "react-icons/gr";
import { handleCopyToClipBoard } from "../../../utils/handleCopyToClipBoard";

const QRDetails = ({ data }) => {
  return (
    <div className="payment-type-details bank-transfer ng-star-inserted">
      {data?.qrDisplayName && (
        <ul>
          <li>
            <label>Display Name</label>
            <p>
              {data?.qrDisplayName}
              <a
                onClick={() => handleCopyToClipBoard(data?.bankName)}
                style={{ marginLeft: "4px" }}
              >
                <GrCopy /> <span style={{ marginLeft: "4px" }}>Copy</span>
              </a>
            </p>
          </li>
        </ul>
      )}
      <img
        style={{
          height: "100%",
          maxHeight: "250px",
          width: "100%",
          objectFit: "contain",
        }}
        src={data?.qrCodeLink}
        alt="qrCodeLink"
      />
    </div>
  );
};

export default QRDetails;
