import { createSlice} from '@reduxjs/toolkit';
import { AuthState } from './types';
import Cookies from 'js-cookie';

const initialState: AuthState = {
  isAuthenticated:false,
  user: null,
  loading: false,
  toasts:null,
};


const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    registerRequest: (state) => {
      state.loading = true;
      state.toasts = null
    },
    registerSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
      state.loading = false;
      Cookies.set('authToken', action.payload.token);
    },
    registerFail: (state, action) => {
      state.loading = false;
      state.toasts = action.payload;
    },
    loginRequest: (state) => {
      state.loading = true;
      state.toasts = null;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
      Cookies.set('authToken', action.payload.token);
    },
    loginFail: (state,action) => {
      state.loading = false;
      state.toasts = action.payload
    },
    logoutRequest: (state) => {
      state.loading = true;
      state.toasts = null;
    },
    logoutSuccess: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.loading = false;
      Cookies.remove('authToken');
    },
    logoutFail: (state, action) => {
      state.loading = false;
      state.toasts = action.payload;
    },
  },
 
});

export const {
  registerRequest,
  registerSuccess,
  registerFail,
  loginRequest,
  loginSuccess,
  loginFail,
  logoutRequest,
  logoutSuccess,
  logoutFail
} = authSlice.actions

export default authSlice.reducer;

