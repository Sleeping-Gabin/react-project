import { configureStore, createSlice } from "@reduxjs/toolkit";

//cart
const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addCartItem: (state, action) => {
      let idx = state.findIndex(item => item.pid === action.payload.pid);

      if (idx < 0) {
        state.push(action.payload);
      }
      else {
        state[idx].count++;
      }
    },
    deleteCartItem: (state, action) => {
      let idx = state.findIndex(item => item.pid === action.payload);
      state.splice(idx, 1);
    },
    deleteAllCart: (state) => {
      state.splice(0, state.length);
    },
    increaseCartItem: (state, action) => {
      let idx = state.findIndex(item => item.pid === action.payload);
      state[idx].count++;
    },
    decreaseCartItem: (state, action) => {
      let idx = state.findIndex(item => item.pid === action.payload);
      state[idx].count--;

      if (state[idx].count <= 0) {
        state.splice(idx, 1);
      }
    }
  }
});
export const { addCartItem, deleteCartItem, deleteAllCart, increaseCartItem, decreaseCartItem } = cartSlice.actions;

//like
const likeSlice = createSlice({
  name: "like",
  initialState: [],
  reducers: {
    toggleLikeItem: (state, action) => {
      let idx = state.findIndex(item => item.pid === action.payload.pid);

      if (idx < 0) {
        state.push(action.payload);
      }
      else {
        state.splice(idx, 1);
      }
    }
  }
});
export const { toggleLikeItem } = likeSlice.actions;

//modal
const modalSlice = createSlice({
  name: "modal",
  initialState: {
    show: false,
  },
  reducers: {
    showModal: (state) => {
      state.show = true;
    },
    hideModal: (state) => {
      state.show = false;
    },
  }
});
export const { showModal, hideModal } = modalSlice.actions;

//store
export default configureStore({
  reducer: {
    cart: cartSlice.reducer,
    like: likeSlice.reducer,
    modal: modalSlice.reducer
  }
});