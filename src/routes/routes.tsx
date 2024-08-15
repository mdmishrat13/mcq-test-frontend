import { createBrowserRouter} from "react-router-dom";
import GuestRoutes from "./guestRoutes";
import GuestLayout from "../layouts/guestLayout";
import UserLayout from "../layouts/userLayout";
import ProtectedGuest from "../protected-routes/ProtectedGuest";
import ProtectedStudent from "../protected-routes/ProtectedStudent";
import studentRoutes from "./studentRoutes";
import Home from "../pages/user/home/home";
import Teachers from "../pages/user/teachers/teachers";
import AllLessons from "../pages/user/all-lessons/all-lessons";
import Profile from "../pages/user/profile/profile";
import Layout from "../pages/user/lessons/layout";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <ProtectedGuest><GuestLayout /></ProtectedGuest>,
        children:GuestRoutes
    },
    {
        path: '/user',
        element:<ProtectedStudent><UserLayout/></ProtectedStudent>,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "teachers",
                element: <Teachers />
            },
            {
                path: "lessons",
                element: <AllLessons />
            },
            {
                path: "profile",
                element: <Profile />
            },
            {
                path: "my-lessons/:id",
                element: <Layout />,
                children: [
                    // {
                    //     path: "",
                    //     element: <Lessons />,
                    //     children: [
                    //         {
                    //             path: ":id",
                    //             element: <Lesson/>
                    //         }
                    //     ]
                    // },
                ]
            }
        ]
    },
])

export default routes