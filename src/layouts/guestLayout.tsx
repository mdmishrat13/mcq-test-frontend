import GuestNavbar from "../components/guest/GuestNavbar"
import Footer from "../components/guest/Footer"
import { PropsWithChildren } from "react"
import { Outlet } from "react-router-dom"

const GuestLayout: React.FC<PropsWithChildren> = () => {
  return (
      <>
          <GuestNavbar/>
          <div className="min-h-[90vh] flex flex-col items-center justify-center">
          <Outlet/>
          </div>
          <Footer/>
      </>
  )
}

export default GuestLayout