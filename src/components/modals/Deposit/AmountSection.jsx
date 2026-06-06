import { useDispatch } from "react-redux";
import { useBankAccountQuery } from "../../../hooks/bankAccount";
import { useDepositBreakdownQuery } from "../../../hooks/depositBreakdown";
import toast from "react-hot-toast";
import { setShowDepositModal } from "../../../redux/features/global/globalSlice";

const AmountSection = ({ amount, setAmount, setDepositTab }) => {
  const dispatch = useDispatch();
  const { data: bankAccount } = useBankAccountQuery({
    type: "availableCoins",
  });

  const { data: depositBreakdown } = useDepositBreakdownQuery({
    amount: 100,
  });

  const handleNavigateDeposit = (e) => {
    e.preventDefault();
    const floatAmount = parseFloat(amount);

    if (typeof floatAmount !== "number") {
      return toast.error("Please enter a valid number");
    }

    if (floatAmount) {
      if (
        depositBreakdown?.minimumDeposit &&
        floatAmount < depositBreakdown?.minimumDeposit
      ) {
        toast.error(
          `Minimum deposit amount is ${depositBreakdown?.minimumDeposit}`,
        );
      } else {
        setAmount(floatAmount);
        setDepositTab("account");
      }
    } else {
      return toast.error("Amount is required");
    }
  };
  return (
    <div className="ng-star-inserted">
      <div className="transaction-modal ng-star-inserted">
        <div className="modal-header">
          <h2>Deposit</h2>
          <button
            onClick={() => dispatch(setShowDepositModal(false))}
            className="modal-close-btn mdc-button mat-mdc-button mat-unthemed mat-mdc-button-base"
          >
            <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
            <div
              style={{ color: "white" }}
              role="img"
              className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
              aria-hidden="true"
              data-mat-icon-type="font"
            >
              close{" "}
            </div>
            <span className="mdc-button__label" />
            <span className="mat-mdc-focus-indicator" />
            <span className="mat-mdc-button-touch-target" />
            <span className="mat-ripple mat-mdc-button-ripple" />
          </button>
        </div>
        <form
          onSubmit={handleNavigateDeposit}
          className="ng-touched ng-dirty ng-invalid"
        >
          <div className="modal-body">
            <div className="card-wrap">
              <div className="avl-bal show-bal">
                <span className="mat-label">Available Balance</span>
                <p className="ng-star-inserted">
                  {" "}
                  {bankAccount?.availableBalance}
                </p>
              </div>
            </div>
            <div className="form-wrap">
              <label>Deposit Coins</label>
              <input
                onChange={(e) =>
                  setAmount(
                    e.target.value <= 10000000 ? e.target.value : 10000000,
                  )
                }
                placeholder="Enter Coins"
                type="number"
                className="mat-mdc-input-element cdk-text-field-autofill-monitored ng-touched ng-dirty ng-invalid"
                id="mat-input-0"
                required
                aria-required="true"
              />
              <p className="note-message ng-star-inserted">
                Minimum deposit amount is {depositBreakdown?.minimumDeposit}{" "}
                coins
              </p>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="submit"
              className="btn secondary-btn mdc-button mat-mdc-button mat-unthemed mat-mdc-button-base"
            >
              <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
              <span className="mdc-button__label">Make Payment</span>
              <span className="mat-mdc-focus-indicator" />
              <span className="mat-mdc-button-touch-target" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AmountSection;
