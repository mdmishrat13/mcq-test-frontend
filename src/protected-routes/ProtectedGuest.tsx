import React from "react"
import { useSelector } from "../hooks.tsx/hooks";
import { RootState } from "../redux/auth/store";
import GuestLayout from "../layouts/guestLayout";
import { Navigate } from "react-router-dom";

const ProtectedGuest: React.FC<{ children: React.ReactNode }> = () => {

  const isLoggedIn = useSelector((state: RootState) => state.auth.isAuthenticated);

  console.log(isLoggedIn)


  if (!isLoggedIn) {
    return <GuestLayout/>
  }
  return <Navigate to='/user'/>;
};

export default ProtectedGuest