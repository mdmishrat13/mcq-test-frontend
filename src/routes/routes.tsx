import { createBrowserRouter } from "react-router-dom";
import UserRoutes from "./userRoutes";
import GuestRoutes from "./guestRoutes";
import GuestRoute from "./../protected-routes/guestRoutes"
import UserRoute from "./../protected-routes/userRoutes"
import GuestLayout from "../layouts/guestLayout";
import UserLayout from "../layouts/userLayout";
import TeacherRoutes from "./teacherRoutes";
import TeacherLayout from "../layouts/teacherLayout";
import TeacherRoute from "../protected-routes/teacherRoutes";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <GuestRoute> <GuestLayout/> </GuestRoute>,
        children: GuestRoutes
    },
    {
        path: "/student",
        element:<UserRoute><UserLayout/></UserRoute>,
        children: UserRoutes
    },
    {
        path: "/teacher",
        element:<TeacherRoute><TeacherLayout/></TeacherRoute>,
        children: TeacherRoutes
    }
])

export default routes