import React from "react"
import { useSelector } from "../hooks.tsx/hooks";
import { RootState } from "../redux/auth/store";
// import { useDispatch } from "react-redux";
// import { checkLoggedIn } from "../redux/auth/userSlice";
// import { Navigate, useNavigate,} from "react-router-dom";

const UserRoute: React.FC<{ children: React.ReactNode }> = ({ children }: { children: React.ReactNode }) => {
  // const dispatch = useDispatch<AppDispatch>();
  // const navigate = useNavigate()
  const loading = useSelector((state: RootState) => state.auth.loading);
  // const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

  // useEffect(() => {
  //   dispatch(checkLoggedIn())
  //   if (!isLoggedIn) {
  //     navigate('/login')
  //   }
  // },[dispatch,isLoggedIn])

  if (loading) {
    return <h1 className="text-2xl text-center">Loading...</h1>
  }
  
  // if (isLoggedIn) {
    return <>{children}</>
  // }
  // return <Navigate to="/" replace/>

}

export default UserRoute