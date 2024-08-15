import AllLessons from "../pages/user/all-lessons/all-lessons"
import Home from "../pages/user/home/home"
import Layout from "../pages/user/lessons/layout"
// import Lesson from "../pages/user/lessons/lesson"
// import Lessons from "../pages/user/lessons/lessons"
import Profile from "../pages/user/profile/profile"
import Teachers from "../pages/user/teachers/teachers"

const studentRoutes = [
    {
        path:'/',
        element: <Home/>
    },
    {
        path: "teachers",
        element: <Teachers/>
    },
    {
        path: "lessons",
        element: <AllLessons/>
    },
    {
        path: "profile",
        element: <Profile/>
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
    },
    
]

export default studentRoutes