import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  group: 0,
  addBank: false,
  showLoginModal: false,
  showRegisterModal: false,
  showForgotPasswordModal: false,
  selectedCategory: "ALL",
  showLanguageModal: false,
  showNotification: false,
  showBanner: false,
  showAppPopUp: false,
  showSidebar: false,
  windowWidth: window.innerWidth,
  showDepositModal: false,
  showDepositSuccessModal: false,
  showEditStakeModal: false,
  showReferralModal: false,
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
    setShowLoginModal: (state, action) => {
      state.showLoginModal = action.payload;
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
} = stateSlice.actions;

export default stateSlice.reducer;
