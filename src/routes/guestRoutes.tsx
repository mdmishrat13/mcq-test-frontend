import AboutUs from '../pages/guest/about.js'
import ContactUs from '../pages/guest/contact.js'
import Login from '../pages/guest/login.js'
import Register from '../pages/guest/register.js'
import Home from '../pages/guest/home.js'
const GuestRoutes = [
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "login",
        element: <Login/>
    },
    {
        path: "register",
        element: <Register/>
    },
    {
        path: "about-us",
        element:<AboutUs/>
    },
    {
        path: "contact-us",
        element:<ContactUs/>
    }
]

export default GuestRoutes