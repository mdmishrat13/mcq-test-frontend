import React from "react"
import { useSelector } from "../hooks.tsx/hooks";
import { RootState } from "../redux/auth/store";
import { Navigate } from "react-router-dom";
import UserLayout from "../layouts/userLayout";

const ProtectedStudent: React.FC<{ children: React.ReactNode }> = () => {

  const isLoggedIn = useSelector((state: RootState) => state.auth.isAuthenticated);

  console.log(isLoggedIn)


  if (isLoggedIn) {
    return <UserLayout/>
  }
  return <Navigate to='/login'/>;
};

export default ProtectedStudent