import Home from "../pages/user/home/home"
import Layout from "../pages/user/lessons/layout"
import Lesson from "../pages/user/lessons/lesson"
import Lessons from "../pages/user/lessons/lessons"
import Profile from "../pages/user/profile/profile"

const UserRoutes = [
    {
        path: "",
        element: <Home/>
    },
    {
        path: "profile",
        element: <Profile/>
    },
    {
        path: "lessons",
        element: <Layout />,
        children: [
            {
                path: ":id",
                element: <Lessons />,
                children: [
                    {
                        path: ":id",
                        element: <Lesson/>
                    }
                ]
            },
        ]
    },
    
]

export default UserRoutes