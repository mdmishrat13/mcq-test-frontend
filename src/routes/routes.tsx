import { createBrowserRouter } from "react-router-dom";
import UserRoutes from "./userRoutes";
import GuestRoutes from "./guestRoutes";
import GuestRoute from "./../protected-routes/guestRoutes"
import UserRoute from "./../protected-routes/userRoutes"
import GuestLayout from "../layouts/guestLayout";
import UserLayout from "../layouts/userLayout";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <GuestRoute> <GuestLayout/> </GuestRoute>,
        children: GuestRoutes
    },
    {
        path: "/user",
        element:<UserRoute><UserLayout/></UserRoute>,
        children: UserRoutes
    }
])

export default routes