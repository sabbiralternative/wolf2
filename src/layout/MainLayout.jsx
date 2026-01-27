import { Fragment } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/UI/Footer/Footer";
import Header from "../components/UI/Header/Header";
import Login from "../components/modals/Login/Login";
import { useSelector } from "react-redux";
import ForgotPassword from "../components/modals/ForgotPassword/ForgotPassword";
import Register from "../components/modals/Register/Register";
import LeftSidebar from "../components/UI/LeftSidebar/LeftSidebar";

import Deposit from "../components/modals/Deposit/Deposit";
import DepositSuccessMessage from "../components/modals/Deposit/DepositSuccessMessage";

const MainLayout = () => {
  const { pathname } = useLocation();
  const {
    showLoginModal,
    showForgotPasswordModal,
    showRegisterModal,
    showDepositModal,
    showDepositSuccessModal,
  } = useSelector((state) => state.global);

  return (
    <Fragment>
      {showLoginModal && <Login />}
      {showForgotPasswordModal && <ForgotPassword />}
      {showRegisterModal && <Register />}
      {showDepositModal && <Deposit />}
      {showDepositSuccessModal && <DepositSuccessMessage />}

      <LeftSidebar>
        <Header />
        <div
          style={{
            paddingTop:
              pathname.includes("/casino/") ||
              pathname.includes("/event-details")
                ? "43px"
                : "160px",
            height: "100%",
          }}
        >
          <Outlet />
        </div>
        {!pathname.includes("/casino/") &&
          !pathname.includes("/event-details") && <Footer />}
      </LeftSidebar>
    </Fragment>
  );
};

export default MainLayout;
