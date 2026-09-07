import { GrCopy } from "react-icons/gr";
import { handleCopyToClipBoard } from "../../../utils/handleCopyToClipBoard";
import useLanguage from "../../../hooks/use-language";
import { LanguageKey } from "../../../const";

const QRDetails = ({ data }) => {
  const { getLanguage } = useLanguage();
  return (
    <div className="payment-type-details bank-transfer ng-star-inserted">
      {data?.qrDisplayName && (
        <ul>
          <li>
            <label>{getLanguage(LanguageKey.DISPLAY_NAME)}</label>
            <p>
              {data?.qrDisplayName}
              <a
                onClick={() => handleCopyToClipBoard(data?.bankName)}
                style={{ marginLeft: "4px" }}
              >
                <GrCopy />{" "}
                <span style={{ marginLeft: "4px" }}>
                  {getLanguage(LanguageKey.COPY)}
                </span>
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
