import useBalance from "../../../hooks/balance";

const LoggedIn = () => {
  const { data } = useBalance();

  return (
    <div className="loggedIn ng-star-inserted">
      <div className="bal-cont">
        <div className="bal-amount show-bal ng-star-inserted">
          <p>Bal</p>
          <p>{data?.availBalance}</p>
        </div>
        <div className="bal-amount exp-bal ng-star-inserted">
          <p className="ng-star-inserted">Exp</p>
          <p className="ng-star-inserted">{data?.deductedExposure}</p>
        </div>
      </div>
      <button className="btn deposit-btn mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base ng-star-inserted">
        <span className="mat-mdc-button-persistent-ripple mdc-button__ripple"></span>
        <span className="mdc-button__label"> Deposit </span>
        <span className="mat-mdc-focus-indicator"></span>
        <span className="mat-mdc-button-touch-target"></span>
      </button>
    </div>
  );
};

export default LoggedIn;
