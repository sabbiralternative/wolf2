import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  group: 0,
  addBank: false,
  addUSDTAccount: false,
  showLoginModal: false,
  showChangePasswordModal: false,
  showRegisterModal: false,
  showForgotPasswordModal: false,
  selectedCategory: "ALL",
  showLanguageModal: false,
  showNotification: false,
  showBanner: false,
  showAppPopUp: false,
  showAPKModal: false,
  closePopupForForever: false,
  showSidebar: false,
  windowWidth: window.innerWidth,
  showDepositModal: false,
  showDepositSuccessModal: false,
  showEditStakeModal: false,
  showReferralModal: false,
  showLoginWarning: false,
  showHelpModal: false,
  headerHeight: 0,
};

const stateSlice = createSlice({
  name: "state",
  initialState,
  reducers: {
    setGroup: (state, action) => {
      state.group = action.payload;
    },
    setAddBank: (state, action) => {
      state.addBank = action.payload;
    },
    setAddUSDTAccount: (state, action) => {
      state.addUSDTAccount = action.payload;
    },
    setShowLoginModal: (state, action) => {
      state.showLoginModal = action.payload;
    },
    setShowChangePasswordModal: (state, action) => {
      state.showChangePasswordModal = action.payload;
    },
    setShowRegisterModal: (state, action) => {
      state.showRegisterModal = action.payload;
    },
    setShowForgotPasswordModal: (state, action) => {
      state.showForgotPasswordModal = action.payload;
    },
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    setShowLanguageModal: (state, action) => {
      state.showLanguageModal = action.payload;
    },
    setShowNotification: (state, action) => {
      state.showNotification = action.payload;
    },
    setShowBanner: (state, action) => {
      state.showBanner = action.payload;
    },
    setShowAppPopUp: (state, action) => {
      state.showAppPopUp = action.payload;
    },
    setWindowWidth: (state, action) => {
      state.windowWidth = action.payload;
    },
    setShowSidebar: (state, action) => {
      state.showSidebar = action.payload;
    },
    setShowDepositModal: (state, action) => {
      state.showDepositModal = action.payload;
    },
    setShowDepositSuccessModal: (state, action) => {
      state.showDepositSuccessModal = action.payload;
    },
    setShowEditStakeModal: (state, action) => {
      state.showEditStakeModal = action.payload;
    },
    setShowReferralModal: (state, action) => {
      state.showReferralModal = action.payload;
    },
    setShowLoginWarning: (state, action) => {
      state.showLoginWarning = action.payload;
    },
    setShowHelpModal: (state, action) => {
      state.showHelpModal = action.payload;
    },
    setShowAPKModal: (state, action) => {
      state.showAPKModal = action.payload;
    },

    setClosePopUpForForever: (state, action) => {
      state.closePopupForForever = action.payload;
    },
    setHeaderHeight: (state, action) => {
      state.headerHeight = action.payload;
    },
  },
});

export const {
  setGroup,
  setAddBank,
  setShowLoginModal,
  setShowForgotPasswordModal,
  setShowRegisterModal,
  setSelectedCategory,
  setShowLanguageModal,
  setShowNotification,
  setShowBanner,
  setShowAppPopUp,
  setWindowWidth,
  setShowSidebar,
  setShowDepositModal,
  setShowDepositSuccessModal,
  setShowEditStakeModal,
  setShowReferralModal,
  setShowLoginWarning,
  setShowHelpModal,
  setShowChangePasswordModal,
  setClosePopUpForForever,
  setShowAPKModal,
  setAddUSDTAccount,
  setHeaderHeight,
} = stateSlice.actions;

export default stateSlice.reducer;
