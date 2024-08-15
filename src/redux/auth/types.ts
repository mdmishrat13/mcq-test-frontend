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

export interface User {
  name: string;
  email: string;
  bio?: string;
  profilePicture?:string
}

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  loading: boolean;
  toasts: string|null;
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


