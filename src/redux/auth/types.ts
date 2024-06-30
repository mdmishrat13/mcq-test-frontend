// src/types.ts
export interface LoginUser {
  email: string;
  password: string;
}
export interface RegisterUser {
  name: string;
  email: string;
  password: string;
}

export interface AuthState {
  user: LoginUser | null;
  loading: boolean;
  toasts: string|null;
  isLoggedIn: boolean;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface RegisterPayload {
  name: string;
  email: string;
  password: string;
}
export interface CheckLoggedIn {
  isLoggedIn: boolean
}


