import { LanguageKey } from "../../const";
import useLanguage from "../../hooks/use-language";

const Notification = () => {
  const { getLanguage } = useLanguage();
  return (
    <div className="page-body">
      <div className="ion-content-wrapper">
        <div
          role="main"
          className="md content-ltr hydrated"
          style={{
            "--offset-top": "0px",
            "--offset-bottom": "0px",
            height: "100%",
          }}
        >
          <div
            className="pagetab-body"
            style={{ marginTop: "0px", height: "100%" }}
          >
            <div className="pagetab-content" style={{ height: "100%" }}>
              <div className="offers-page-wrap">
                <div className="no-data ng-star-inserted">
                  <p>{getLanguage(LanguageKey.NO_RECORD_FOUND)}!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
