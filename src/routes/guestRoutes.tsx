import About from '../pages/guest/about-us.js'
import Login from '../pages/guest/login.js'
import Register from '../pages/guest/register.js'
const GuestRoutes = [
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
        element:<About/>
    }
]

export default GuestRoutes