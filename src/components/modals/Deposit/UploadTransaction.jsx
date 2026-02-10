import { useEffect, useState } from "react";
import useUTR from "../../../hooks/utr";
import { useAccountStatement } from "../../../hooks/accountStatement";
import { useBankAccountMutation } from "../../../redux/features/deposit/deposit.api";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { API } from "../../../api";
import toast from "react-hot-toast";
import { FaSpinner } from "react-icons/fa";
import {
  setShowDepositModal,
  setShowDepositSuccessModal,
} from "../../../redux/features/global/globalSlice";
import { GrCopy } from "react-icons/gr";

const UploadTransaction = ({ paymentId, amount, methodType, methodTitle }) => {
  const [imageUploadMessage, setImageUploadMessage] = useState(null);
  const { mutate: getUTR } = useUTR();
  const { refetch } = useAccountStatement();
  const [handlePayment] = useBankAccountMutation();
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [utr, setUtr] = useState(null);
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [filePath, setFilePath] = useState(null);

  useEffect(() => {
    if (image) {
      setLoading(true);
      setImageUploadMessage("Uploading Image");
      const handleSubmitImage = async () => {
        const formData = new FormData();
        formData.append("image", image);

        const res = await axios.post(API.uploadScreenshot, formData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = res.data;
        if (data?.success) {
          setImageUploadMessage("Image uploaded, Fetching UTR");
          getUTR(data?.filePath, {
            onSuccess: (data) => {
              if (data?.success) {
                setImageUploadMessage(null);
                if (data?.utr !== null) {
                  toast.success(data?.message);
                  setUtr(data?.utr);
                }
              } else {
                toast.error(data?.message);
                setImageUploadMessage(null);
              }
            },
            onError: () => {
              setImageUploadMessage(null);
            },
          });
          setLoading(false);
          setUploadedImage(data?.fileName);

          setFilePath(data?.filePath);
          setImage(null);
        } else {
          setImageUploadMessage(null);
          setLoading(false);
          setUtr(null);
          setImage(null);
          setFilePath("");
          setUploadedImage(null);
          toast.error(data?.error);
        }
      };
      handleSubmitImage();
    }
  }, [image, token, getUTR]);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
    e.target.value = null;
  };

  const handleDepositSubmit = async (e) => {
    e.preventDefault();
    if (!filePath || !utr) {
      return;
    }
    if (uploadedImage || utr) {
      let screenshotPostData = {
        type: "depositSubmit",
        paymentId,
        amount: amount,
        fileName: uploadedImage,
        utr: String(utr),
      };

      const result = await handlePayment(screenshotPostData).unwrap();

      if (result?.success) {
        refetch();
        setUtr(null);
        setImage(null);
        toast.success(result?.result?.message);
        setTimeout(() => {
          dispatch(setShowDepositModal(false));
          dispatch(setShowDepositSuccessModal(true));
        }, 2000);
      } else {
        setUtr("");
        setImage(null);
        setFilePath("");
        setUploadedImage(null);
        toast.error(result?.error?.errorMessage || result?.result?.message);
      }
    }
  };
  const handleUTRChange = (e) => {
    const value = e.target.value;
    setUtr(value);
  };

  const handlePasteClick = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setUtr(text);
    } catch (err) {
      console.error("Clipboard permission denied", err);
    }
  };
  return (
    <div className="upload-screenshot-wrap ng-star-inserted">
      <div className="screenshot-wrapper">
        <div className="upload-screenshot">
          <div className="ng-star-inserted">
            <div>
              {!filePath && !loading && (
                <div className="filepond--wrapper">
                  <div
                    className="filepond--root filepond--hopper"
                    data-style-button-remove-item-position="left"
                    data-style-button-process-item-position="right"
                    data-style-load-indicator-position="right"
                    data-style-progress-indicator-position="right"
                    data-style-button-remove-item-align="false"
                    style={{ height: "24px" }}
                  >
                    <input
                      onChange={handleImageChange}
                      className="filepond--browser"
                      type="file"
                      id="filepond--browser-e1yxutkfw"
                      name="filepond"
                      aria-controls="filepond--assistant-e1yxutkfw"
                      aria-labelledby="filepond--drop-label-e1yxutkfw"
                      accept="image/jpeg,image/jpg,image/png,image/webp"
                    />
                    <div
                      className="filepond--drop-label"
                      style={{
                        transform: "translate3d(0px, 0px, 0px)",
                        opacity: 1,
                      }}
                    >
                      <label
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                        }}
                        htmlFor="filepond--browser-e1yxutkfw"
                        id="filepond--drop-label-e1yxutkfw"
                      >
                        <div className="material-icons">add_circle</div>
                        <span> Click here to upload payment screenshot</span>
                      </label>
                    </div>
                  </div>
                </div>
              )}
              {imageUploadMessage && (
                <div
                  style={{
                    padding: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                  }}
                >
                  <span>{imageUploadMessage}</span>
                  <FaSpinner className="animate-spin" size={15} color="black" />
                </div>
              )}

              {filePath && !loading && (
                <div
                  className="uploaded-img-wrap ng-star-inserted"
                  style={{ padding: "0px" }}
                >
                  <h2>Added Screenshots/UTR</h2>
                  <div className="uploaded-img-list ng-star-inserted">
                    <div className="left-text ng-star-inserted">
                      <div className="img-wrap">
                        <img src={filePath} />
                      </div>
                      <p>{methodTitle}</p>
                    </div>
                    <a
                      onClick={() => {
                        setFilePath("");
                        setUploadedImage(null);
                        setImage(null);
                      }}
                      className="remove-btn"
                    >
                      {" "}
                      Remove{" "}
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
          {/* <p className="ss-note ng-star-inserted">
            * Facing issue uploading screenshot? Paste the UTR above.
          </p> */}
        </div>
        <div className="utr-wrapper ng-star-inserted">
          <div className="input-wrap">
            <label>
              {methodType === "usdt" || methodType === "usdt_bep20"
                ? "Hash Code"
                : " Unique Transaction Reference"}
              <span className="instant-note">
                <div
                  role="img"
                  className="mat-icon notranslate material-icon material-icons mat-ligature-font mat-icon-no-color"
                  aria-hidden="true"
                  data-mat-icon-type="font"
                >
                  bolt
                </div>
                Instant
              </span>
            </label>
            <input
              onChange={handleUTRChange}
              placeholder={
                methodType === "usdt" || methodType === "usdt_bep20"
                  ? "Enter Hash code"
                  : "6 to 23 Digit UTR/RRN Number"
              }
              name="utr"
              type="text"
              className="ng-untouched ng-pristine ng-valid"
              value={utr !== null ? utr : null}
            />
            <span
              onClick={handlePasteClick}
              className="paste-icon ng-star-inserted"
            >
              <GrCopy style={{ marginRight: "5px" }} /> Paste
            </span>
          </div>
        </div>
        {/* <p className="seprator ng-star-inserted">Or</p> */}

        <div className="modal-footer ng-star-inserted">
          <button
            disabled={!filePath || !utr}
            onClick={handleDepositSubmit}
            className="btn secondary-btn ng-star-inserted"
          >
            Submit{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadTransaction;
