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
import { removeHeaderPaths } from "../static/removeHeaderPaths";
import EditStake from "../components/modals/EditStake/EditStake";
import AddBankAccount from "../components/modals/AddBankAccount/AddBankAccount";
import Referral from "../components/modals/Referral/Referral";
import LoginWarning from "../components/modals/LoginWarning/LoginWarning";
import Help from "../components/modals/Help/Help";

const MainLayout = () => {
  const { pathname } = useLocation();
  const {
    showLoginModal,
    showForgotPasswordModal,
    showRegisterModal,
    showDepositModal,
    showDepositSuccessModal,
    showEditStakeModal,
    addBank,
    showReferralModal,
    showLoginWarning,
    showHelpModal,
  } = useSelector((state) => state.global);

  const shouldHideHeader = removeHeaderPaths.some((path) =>
    pathname.startsWith(path),
  );

  return (
    <Fragment>
      {showLoginModal && <Login />}
      {showForgotPasswordModal && <ForgotPassword />}
      {showRegisterModal && <Register />}
      {showDepositModal && <Deposit />}
      {showDepositSuccessModal && <DepositSuccessMessage />}
      {showEditStakeModal && <EditStake />}
      {addBank && <AddBankAccount />}
      {showReferralModal && <Referral />}
      {showLoginWarning && <LoginWarning />}
      {showHelpModal && <Help />}

      <LeftSidebar>
        <Header />
        <div
          style={{
            paddingTop: shouldHideHeader ? "43px" : "160px",
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
