import { Link } from "react-router-dom"

const GuestNavbar = () => {
    return (
        <nav className="flex justify-between bg-gray-900 text-white">
          <div className="px-5 xl:px-12 py-4 flex w-full items-center">
            <a className="text-3xl font-bold font-heading" href="#">
              MCQ Test System
            </a>
            {/* Nav Links */}
            <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
              <li><a className="hover:text-gray-200" href="#">Home</a></li>
              <li><a className="hover:text-gray-200" href="#">Catagory</a></li>
              <li><a className="hover:text-gray-200" href="#">Collections</a></li>
              <li><a className="hover:text-gray-200" href="#">Contact Us</a></li>
            </ul>
            {/* Header Icons */}
            
          </div>
          {/* Responsive navbar */}
        
          <Link to="login" className="navbar-burger self-center mr-12 xl:hidden">
            Login
        </Link>
          <Link to="register" className="navbar-burger self-center mr-12 xl:hidden">
            Register
          </Link>
        </nav>
    )
  }
  
  export default GuestNavbar