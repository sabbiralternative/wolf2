import { useRef } from "react";
import images from "../../../assets/images";
import { useBankAccountMutation } from "../../../hooks/bankAccount";
import toast from "react-hot-toast";
import useCloseModalClickOutside from "../../../hooks/closeModal";

const DeleteBank = ({ setDeleteBankId, deleteBankId, refetchBankAccounts }) => {
  const closeModal = () => {
    setDeleteBankId(null);
  };

  const { mutate } = useBankAccountMutation();
  const ref = useRef();
  useCloseModalClickOutside(ref, () => {
    closeModal();
  });

  const handleDeleteBank = async () => {
    const bankData = {
      type: "deleteBankAccount",
      bankId: deleteBankId,
    };
    mutate(bankData, {
      onSuccess: (data) => {
        if (data?.success) {
          closeModal();
          toast.success(data?.result?.message);
          refetchBankAccounts();
        } else {
          toast.error(data?.error?.errorMessage);
        }
      },
    });
  };
  return (
    <div
      className="swal2-container swal2-bottom swal2-backdrop-show"
      data-swal2-theme="light"
      style={{ overflowY: "auto" }}
    >
      <div
        ref={ref}
        aria-labelledby="swal2-title"
        aria-describedby="swal2-html-container"
        className="swal2-popup swal2-modal success-alert alert-dialog"
        tabIndex={-1}
        role="dialog"
        aria-live="assertive"
        aria-modal="true"
        style={{ display: "grid" }}
      >
        <button
          type="button"
          className="swal2-close"
          aria-label="Close this dialog"
          style={{ display: "none" }}
        >
          ×
        </button>
        <ul className="swal2-progress-steps" style={{ display: "none" }} />
        <div className="swal2-icon swal2-icon-show" style={{ display: "flex" }}>
          <div className="swal2-icon-content">
            <img src={images.warning} />
            <p>Delete</p>
          </div>
        </div>
        <img className="swal2-image" style={{ display: "none" }} />
        <h2
          className="swal2-title"
          id="swal2-title"
          style={{ display: "none" }}
        />
        <div
          className="swal2-html-container"
          id="swal2-html-container"
          style={{ display: "block" }}
        >
          Are you sure you want to delete this?
        </div>
        <input
          id="swal2-input"
          className="swal2-input"
          style={{ display: "none" }}
        />
        <input type="file" className="swal2-file" style={{ display: "none" }} />
        <div className="swal2-range" style={{ display: "none" }}>
          <input type="range" />
          <output />
        </div>
        <select
          id="swal2-select"
          className="swal2-select"
          style={{ display: "none" }}
        />
        <div className="swal2-radio" style={{ display: "none" }} />
        <label className="swal2-checkbox" style={{ display: "none" }}>
          <input type="checkbox" id="swal2-checkbox" />
          <span className="swal2-label" />
        </label>
        <textarea
          id="swal2-textarea"
          className="swal2-textarea"
          style={{ display: "none" }}
          defaultValue={""}
        />
        <div
          className="swal2-validation-message"
          id="swal2-validation-message"
          style={{ display: "none" }}
        />
        <div className="swal2-actions" style={{ display: "flex" }}>
          <div className="swal2-loader" />
          <button
            onClick={handleDeleteBank}
            type="button"
            className="swal2-confirm swal2-styled"
            aria-label
            style={{
              display: "inline-block",
              "-swal2ActionButtonFocusBoxShadow":
                "0 0 0 3px rgba(112, 102, 224, 0.5)",
            }}
          >
            Yes, Delete
          </button>
          <button
            type="button"
            className="swal2-deny swal2-styled"
            aria-label
            style={{
              display: "none",
              "-swal2ActionButtonFocusBoxShadow":
                "0 0 0 3px rgba(220, 55, 65, 0.5)",
            }}
          >
            No
          </button>
          <button
            onClick={closeModal}
            type="button"
            className="swal2-cancel swal2-styled"
            aria-label
            style={{
              display: "inline-block",
              "-swal2ActionButtonFocusBoxShadow":
                "0 0 0 3px rgba(110, 120, 129, 0.5)",
            }}
          >
            Cancel
          </button>
        </div>
        <div className="swal2-footer" style={{ display: "none" }} />
        <div className="swal2-timer-progress-bar-container">
          <div
            className="swal2-timer-progress-bar"
            style={{ display: "none" }}
          />
        </div>
      </div>
    </div>
  );
};

export default DeleteBank;
