import React, { useEffect } from "react"
import { useDispatch, useSelector } from "../hooks.tsx/hooks";
import { RootState } from "../redux/auth/store";
import { checkLoggedIn } from "../redux/auth/userSlice";

const GuestRoutes: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkLoggedIn())
  },[dispatch])

  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);


  
  console.log(isLoggedIn)

  // if (!isLoggedIn) {
    
    return  <>{children}</>
  // }
  // return <Navigate to="student" replace/>
}

export default GuestRoutes