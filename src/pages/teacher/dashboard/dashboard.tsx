import { Outlet } from "react-router-dom"
import { Link } from "react-router-dom"
import { useState } from "react"
const Dashboard = () => {
  const [expand, setExpand] = useState({})

  
  return (
    <div className="w-full">
      <div className="hidden md:block md:w-52 lg:w-72 bg-gray-200 h-[90vh] fixed left-0 top-[68px] z-10 overflow-scroll">       
            <Link to="my-courses" className={`my-2 rounded-md block p-2 bg-white mx-2`}>
              My Courses
            </Link>
            <Link to="create" className={`my-2 rounded-md block p-2 bg-white mx-2`}>
              Create New
            </Link>
            <Link to="analytics" className={`my-2 rounded-md block p-2 bg-white mx-2`}>
              Analytics
            </Link>
            <Link to="#" className={`my-2 rounded-md block p-2 bg-white mx-2`}>
              Settings
            </Link>
          </div>
      <div className="w-6/10 mt-[85px] md:ml-52 lg:ml-72">
        <Outlet/>
      </div>
    </div>
  )
}

export default Dashboard