import { Outlet } from "react-router-dom"
import TeacherNavbar from "../components/teacher/navbar"
import { PropsWithChildren } from "react"

const TeacherLayout:React.FC<PropsWithChildren> = () => {
  return (
      <>
         <div className="fixed w-full left-0 top-0 z-50"> <TeacherNavbar/></div>
          <div className="min-h-[90vh] px-4 md:px-8">
          <Outlet/>
          </div>
      </>
  )
}

export default TeacherLayout