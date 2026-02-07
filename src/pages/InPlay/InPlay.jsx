import InPlay from "../../components/modules/Home/InPlay";

const InPlayPage = () => {
  return (
    <div className="page-body">
      <div className="ion-content-wrapper">
        <div
          role="main"
          className="md content-ltr hydrated"
          style={{
            "--offset-top": "0px",
            "--offset-bottom": "0px",
          }}
        >
          <div className="pagetab-body">
            <div className="pagetab-content">
              <InPlay />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InPlayPage;
