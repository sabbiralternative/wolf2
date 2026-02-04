import { useDispatch } from "react-redux";
import images from "../../../assets/images";
import { useRef } from "react";
import useCloseModalClickOutside from "../../../hooks/closeModal";
import {
  setShowLoginModal,
  setShowLoginWarning,
} from "../../../redux/features/global/globalSlice";

const LoginWarning = () => {
  const ref = useRef();
  const dispatch = useDispatch();

  useCloseModalClickOutside(ref, () => {
    dispatch(setShowLoginWarning(false));
  });

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
        className="swal2-popup swal2-modal warning-alert alert-dialog"
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
            <p>Alert</p>
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
          Please login/signup to continue
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
            onClick={() => {
              dispatch(setShowLoginWarning(false));
              dispatch(setShowLoginModal(true));
            }}
            type="button"
            className="swal2-confirm swal2-styled"
            aria-label
            style={{
              display: "inline-block",
              "--swal2ActionButtonFocusBoxShadow":
                "0 0 0 3px rgba(112, 102, 224, 0.5)",
            }}
          >
            OK
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
            type="button"
            className="swal2-cancel swal2-styled"
            aria-label
            style={{
              display: "none",
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

export default LoginWarning;
