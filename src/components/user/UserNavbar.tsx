import { IoLogOutOutline } from "react-icons/io5"
import { Link } from "react-router-dom"
import { useDispatch } from "../../hooks.tsx/hooks";
import { logoutUser } from "../../redux/auth/userSlice";

const UserNavbar = () => {
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(logoutUser())
  }
  return (
      <nav className="flex justify-between bg-gray-900 text-white">
        <div className="px-5 xl:px-12 py-4 flex w-full items-center">
          <a className="text-3xl font-bold font-heading" href="#">
           MCQ TEST APP
          </a>
          {/* Nav Links */}
          <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
            <li><Link className="hover:text-gray-200" to="#">Home</Link></li>
            <li><Link className="hover:text-gray-200" to="lessons">Lessons</Link></li>
            <li><Link className="hover:text-gray-200" to="my-lessons">My Classes</Link></li>
            <li><Link className="hover:text-gray-200" to="teachers">Teachers</Link></li>
          </ul>
          {/* Header Icons */}
          <div className="hidden xl:flex items-center space-x-5">
            {/* Sign In / Register      */}
            <a className="flex items-center hover:text-gray-200" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </a>
          </div>
        </div>
        {/* Responsive navbar */}
        
        {/* <a className="navbar-burger self-center mr-12 xl:hidden" href="#">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </a> */}
      
      <button onClick={logOut} className="navbar-burger self-center mr-12">
        <IoLogOutOutline className="text-2xl font-white" />
      </button>
      </nav>

  )
}

export default UserNavbar