import Dashboard from "../pages/teacher/dashboard/dashboard"
import Create from "../pages/teacher/lessons/create"
import Edit from "../pages/teacher/lessons/edit"
import MyCourses from "../pages/teacher/my-lessons/myCourses"

const TeacherRoutes = [
    {
        path: "dashboard",
        element: <Dashboard />,
        children: [
            {
                path: "my-courses",
                element: <MyCourses/>
            },
            {
                path: "create",
                element: <Create />
            },
            {
                path: "create/:id",
                element: <Edit/>
            },
            
            {
                path: "analytics",
                element: <h1 className="text-2xl text-center py-4 bg-gray-200"> Analytics is comming soon</h1>
            },
        ]
   }
]

export default TeacherRoutes