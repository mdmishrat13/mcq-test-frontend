import { createAsyncThunk } from "@reduxjs/toolkit";
import {LoginUser, LoginPayload, RegisterPayload, RegisterUser} from './types';
import {
    registerRequest,
    registerFail,
    registerSuccess,
    loginRequest,
    loginFail,
    loginSuccess,
    logoutRequest,
    logoutFail,
    logoutSuccess,
} from './userSlice'
import api from "../axios";

export const loginUser = createAsyncThunk(
    'auth/login',
    async (credentials: LoginPayload, { dispatch }) => {
      try {
          dispatch(loginRequest());
          const response = await api.post<LoginUser>('/auth/login', credentials);
          dispatch(loginSuccess({data:response.data}))
      } catch (error: any) {
        dispatch(
          loginFail(error.respons?.data?.message||"Login Fail")
        )
      }
    }
  );
  
  export const registerUser = createAsyncThunk(
    'auth/register',
    async (credentials: RegisterPayload, { dispatch }) => {
      try {
        dispatch(registerRequest());
        const response = await api.post<RegisterUser>('/auth/register', credentials);
        dispatch(registerSuccess({data:response.data}))
      } catch (error: any) {
        dispatch(registerFail(error.response?.data?.message||"Registration Fail"))
      }
    }
  );
  
  export const logoutUser = createAsyncThunk(
    'auth/logout',
    async (_, { dispatch }) => {
      try {
        dispatch(logoutRequest());
        const response = await api.get('/auth/logout');
        dispatch(logoutSuccess());
        return response.data;
      } catch (error: any) {
        dispatch(logoutFail(error.response?.data?.message||"Logout Fail"))
      }
    }
  );