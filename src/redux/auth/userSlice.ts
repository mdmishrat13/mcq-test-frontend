// src/features/auth/authSlice.ts
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { AuthState, LoginUser, LoginPayload, RegisterPayload, RegisterUser, CheckLoggedIn } from './types';
import api from '../axios';

const initialState: AuthState = {
  isLoggedIn: false,
  user: null,
  loading: false,
  toasts:"welcome to mcq test app",
};

// Async thunks for login and register
export const loginUser = createAsyncThunk(
  'auth/login',
  async (payload: LoginPayload, { rejectWithValue }) => {
    try {
      const response = await api.post<LoginUser>('/auth/login', payload);
      return response.data;
    } catch (error: any) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue(error.message);
    }
  }
);

export const registerUser = createAsyncThunk(
  'auth/register',
  async (payload: RegisterPayload, { rejectWithValue }) => {
    try {
      const response = await api.post<RegisterUser>('/auth/register', payload);
      return response.data;
    } catch (error: any) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue(error.message);
    }
  }
);

export const checkLoggedIn = createAsyncThunk(
  'auth/checkLoggedIn',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get<CheckLoggedIn>('/auth/checkloggedin');
      return response.data;
    } catch (error: any) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue(error.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get('/auth/logout');
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

const authSlice = createSlice({
  name: 'auth/logout',
  initialState,
  reducers: {
   
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        // state.toasts = null;
      })
      .addCase(loginUser.fulfilled, (state, action: PayloadAction<LoginUser>) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.loading = false;
        state.toasts = "Login Successfull"
      })
      .addCase(loginUser.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.isLoggedIn = true;
        state.toasts = action.payload
        state.user = null;
      })
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        // state.toasts = null;
      })
      .addCase(registerUser.fulfilled, (state, action: PayloadAction<RegisterPayload>) => {
        state.loading = false;
        state.isLoggedIn = true;
        state.user = action.payload;
      })
      .addCase(registerUser.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.toasts = action.payload;
      })
      .addCase(checkLoggedIn.pending, (state) => {
        state.loading = true;
      })
      .addCase(checkLoggedIn.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLoggedIn = action.payload;
        state.loading = false;
      })
      .addCase(checkLoggedIn.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.isLoggedIn = false
        state.toasts= action.payload
      })
      .addCase(logoutUser.pending, (state) => {
        state.loading = true
          // state.toasts =null
      })
      .addCase(logoutUser.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLoggedIn = false;
        state.loading = false;
        state.toasts = action.payload
      })
      .addCase(logoutUser.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.isLoggedIn= true
        state.toasts = action.payload;
      })
  },
});

export default authSlice.reducer;

