import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <>
      <footer className="relative bg-gray-300 pt-8 pb-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-left lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl fonat-semibold text-blueGray-700">Let's keep in touch!</h4>
              <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
                Find us on any of these platforms, we respond 1-2 business days.
              </h5>
              <div className="mt-6 lg:mb-0 mb-6">
                <button className="bg-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none mr-2" type="button">
                  <FaFacebook className="w-full h-full text-blue-600" /></button>
                <button className="bg-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none mr-2" type="button">
                <FaGithub className="w-full h-full text-gray-900" /></button>
                <button className="bg-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none mr-2" type="button">
                <FaLinkedin className="w-full h-full text-blue-600 rounded-full"/></button>
                <button className="bg-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none mr-2" type="button">
                <FaXTwitter className="w-full h-full text-gray-900 roudend-sm"/>
                </button>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Useful Links</span>
                  <ul className="list-unstyled">
                    <li>
                      <Link className="text-blueGray-600 font-semibold block pb-2 text-sm" to="/about-us">About Us</Link>
                    </li>
                    <li>
                      <Link className="text-blueGray-600 font-semibold block pb-2 text-sm" to="/contact-us">Contact Us</Link>
                    </li>
                    <li>
                      <Link className="text-blueGray-600 font-semibold block pb-2 text-sm" to="/services">Services</Link>
                    </li>
                    <li>
                      <Link className="text-blueGray-600 font-semibold block pb-2 text-sm" to="home">Free Products</Link>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Other Resources</span>
                  <ul className="list-unstyled">
                    <li>
                      <Link className="text-blueGray-600 font-semibold block pb-2 text-sm" to="#">MIT License</Link>
                    </li>
                    <li>
                      <Link className="text-blueGray-600 font-semibold block pb-2 text-sm" to="#">Terms &amp; Conditions</Link>
                    </li>
                    <li>
                      <Link className="text-blueGray-600 font-semibold block pb-2 text-sm" to="#">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link className="text-blueGray-600 font-semibold block pb-2 text-sm" to="#">Contact Us</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-blueGray-300" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-blueGray-500 font-semibold py-1">
                Copyright © <span id="get-current-year">2024</span><Link to="#" className="text-blueGray-500 hover:text-gray-800" target="_blank"> by
                </Link><Link to="#" className="text-blueGray-500 hover:text-blueGray-800"> MCQ Test App</Link>.
              </div>
            </div>
          </div>
        </div>
      </footer>

    </>
  )
}

export default Footer