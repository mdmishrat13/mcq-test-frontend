import { Outlet } from "react-router-dom"
import UserNavbar from "../components/user/UserNavbar"

const UserLayout = () => {
  return (
      <>
         <div className="fixed w-full left-0 top-0 z-50"> <UserNavbar/></div>
          <div className="min-h-[90vh] mt-[78px] px-4 md:px-8">
          <Outlet />
          </div>
      </>
  )
}

export default UserLayout