import { Fragment, useEffect } from "react";
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
import EditStake from "../components/modals/EditStake/EditStake";
import AddBankAccount from "../components/modals/AddBankAccount/AddBankAccount";
import Referral from "../components/modals/Referral/Referral";
import LoginWarning from "../components/modals/LoginWarning/LoginWarning";
import Help from "../components/modals/Help/Help";
import ChangePassword from "../components/modals/ChangePassword/ChangePassword";
import AddUSDTAccount from "../components/modals/AddUSDTAccount/AddUSDTAccount";
import { useLanguage } from "../context/LanguageProvider";

const MainLayout = () => {
  const { setLanguage } = useLanguage();
  const { pathname } = useLocation();
  const {
    showLoginModal,
    showForgotPasswordModal,
    showRegisterModal,
    showDepositModal,
    showDepositSuccessModal,
    showEditStakeModal,
    addBank,
    addUSDTAccount,
    showReferralModal,
    showLoginWarning,
    showHelpModal,
    showChangePasswordModal,
    headerHeight,
  } = useSelector((state) => state.global);

  useEffect(() => {
    setLanguage(localStorage.getItem("language") || "english");
  }, [setLanguage]);

  return (
    <Fragment>
      {showLoginModal && <Login />}
      {showForgotPasswordModal && <ForgotPassword />}
      {showRegisterModal && <Register />}
      {showDepositModal && <Deposit />}
      {showDepositSuccessModal && <DepositSuccessMessage />}
      {showEditStakeModal && <EditStake />}
      {addBank && <AddBankAccount />}
      {addUSDTAccount && <AddUSDTAccount />}
      {showReferralModal && <Referral />}
      {showLoginWarning && <LoginWarning />}
      {showHelpModal && <Help />}
      {showChangePasswordModal && <ChangePassword />}

      <LeftSidebar>
        <Header />
        <div
          style={{
            paddingTop: `${headerHeight + 5}px`,
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
