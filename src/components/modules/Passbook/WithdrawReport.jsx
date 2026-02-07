import { Fragment, useEffect, useState } from "react";
import { useAccountStatement } from "../../../hooks/accountStatement";
import { Settings } from "../../../api";
import images from "../../../assets/images";
import ImagePreview from "../../modals/ImagePreview/ImagePreview";

const WithdrawReport = () => {
  const fromDate = new Date(new Date().setDate(new Date().getDate() - 7))
    .toISOString()
    .split("T")[0];
  /* current date */
  const toDate = new Date().toISOString().split("T")[0];
  const payload = {
    from: fromDate,
    to: toDate,
    type: "WITHDRAW",
    status: "ALL",
  };
  //   const [complaintId, setComplaintId] = useState(null);
  const [image, setImage] = useState("");
  const [accordion, setAccordion] = useState("");

  const { data } = useAccountStatement(payload);
  const withdrawTab = [
    'If you face any issue with your withdraw, click the "Report Issue" button next to your withdraw details to let us know.',
    "यदि आपको अपने निकासी (Withdrawal) में कोई समस्या आती है, तो हमें बताने के लिए अपनी निकासी विवरण के पास दिए गए  Report Issue बटन पर क्लिक करें",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      // fade out
      setFade(false);

      setTimeout(() => {
        setCurrentIndex((prev) => {
          return (prev + 1) % withdrawTab.length;
        });
        setFade(true);
      }, 500); // fade out duration
    }, 10000); // 10s display time

    return () => clearInterval(interval);
  }, []);

  const handleToggleVisible = (index) => {
    if (accordion === index) {
      setAccordion("");
    } else {
      setAccordion(index);
    }
  };

  return (
    <Fragment>
      {image && <ImagePreview image={image} setImage={setImage} />}
      {Settings.complaint && (
        <div
          style={{
            minHeight: "20px",
            backgroundColor: "white",
            textAlign: "start",
            margin: "10px 0px",
            paddingLeft: "0.625rem",
            paddingRight: "0.625rem",
            paddingTop: "0.25rem",
            paddingBottom: "0.25rem",
            color: "var(--text_color_primary1)",
            borderRadius: "0.25rem",
            fontSize: "12px",
            boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            transitionProperty: "opacity",
            transitionDuration: "500ms",
            opacity: fade ? 1 : 0,
            fontWeight: 500,
          }}
        >
          <img style={{ height: "15px" }} src={images.info} alt="" />
          <span>{withdrawTab[currentIndex]}</span>
        </div>
      )}
      {data?.result?.map((item, index) => {
        return (
          <div key={index} className="transaction-item ng-star-inserted">
            <div className="wrapper">
              <ul>
                <li>
                  <p className="txn-type">
                    Withdraw
                    <span>{item?.date}</span>
                  </p>
                  <p className="amount">
                    <span className="coins">{item?.amount}</span>
                    <span
                      className={`${item?.status?.charAt(0).toUpperCase() + item?.status?.slice(1).toLowerCase()} status ng-star-inserted`}
                    >
                      {item?.status}
                    </span>
                  </p>
                </li>
              </ul>
              {accordion === index + 1 ? (
                <div
                  onClick={() => handleToggleVisible(index + 1)}
                  role="img"
                  className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color ng-star-inserted"
                  aria-hidden="true"
                  data-mat-icon-type="font"
                  style={{}}
                >
                  arrow_drop_down
                </div>
              ) : (
                <div
                  onClick={() => handleToggleVisible(index + 1)}
                  role="img"
                  className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color ng-star-inserted"
                  aria-hidden="true"
                  data-mat-icon-type="font"
                  style={{}}
                >
                  arrow_right
                </div>
              )}
            </div>
            {accordion === index + 1 && (
              <div className="txn-detail ng-star-inserted" style={{}}>
                <div className="txn-detail-header">
                  <p className="ng-star-inserted">
                    <span>Coins</span>
                    <span>{item?.amount}</span>
                  </p>
                  <p className="ng-star-inserted">
                    <span>Modified on</span>
                    <span>{item?.date_modified}</span>
                  </p>
                </div>
                <div className="txn-detail-body ng-star-inserted">
                  <div className="txn-screenshot ng-star-inserted">
                    {item?.image && (
                      <div
                        onClick={() => setImage(item?.image)}
                        className="img-wrap"
                      >
                        <img
                          alt="Screenshot"
                          src={item?.image}
                          className="ng-star-inserted"
                        />
                      </div>
                    )}

                    <p className="status">
                      <span className="ng-star-inserted" />
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </Fragment>
  );
};

export default WithdrawReport;
