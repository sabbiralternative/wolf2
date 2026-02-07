import { Fragment } from "react";
import useBalance from "../../../hooks/balance";
import { useDispatch } from "react-redux";
import { setShowDepositModal } from "../../../redux/features/global/globalSlice";
import { Settings } from "../../../api";
import images from "../../../assets/images";

const LoggedIn = ({ setShowLanguage }) => {
  const language = localStorage.getItem("language");
  const dispatch = useDispatch();
  const { data } = useBalance();

  return (
    <Fragment>
      <div className="loggedIn ng-star-inserted">
        {/* <div className="bal-cont">
          <div
            style={{ justifyContent: "space-between", paddingLeft: "0px" }}
            className="bal-amount show-bal ng-star-inserted"
          >
            <p>{data?.availBalance}</p>
            <p style={{ marginRight: "2.5px" }}>Bal</p>
          </div>
          <div
            style={{ justifyContent: "space-between", paddingLeft: "0px" }}
            className="bal-amount exp-bal ng-star-inserted"
          >
            <p className="ng-star-inserted">Exp</p>
            <p className="ng-star-inserted">{data?.deductedExposure}</p>
          </div>
        </div> */}
        <div
          style={{
            display: "flex",
            fontSize: "10px",
            gap: "0px 10px",
            marginRight: "2px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "end",
            }}
          >
            <p style={{ color: "white" }}>{data?.availBalance}</p>
            <p style={{ color: "white" }}>{data?.deductedExposure}</p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
            }}
          >
            <p style={{ color: "white" }}>Bal</p>
            <p style={{ color: "white" }}>Exp</p>
          </div>
        </div>
        <button
          onClick={() => dispatch(setShowDepositModal(true))}
          className="btn deposit-btn mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base ng-star-inserted"
        >
          <span className="mat-mdc-button-persistent-ripple mdc-button__ripple"></span>
          <span className="mdc-button__label"> Deposit </span>
          <span className="mat-mdc-focus-indicator"></span>
          <span className="mat-mdc-button-touch-target"></span>
        </button>
        {Settings.language && (
          <div
            onClick={() => setShowLanguage((prev) => !prev)}
            style={{
              position: "static",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "3px",
              cursor: "pointer",
            }}
            className="notranslate selected-lang ng-star-inserted"
          >
            <img style={{ height: "20px" }} src={images.globe} alt="" />
            <span> {language || "EN"}</span>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default LoggedIn;
