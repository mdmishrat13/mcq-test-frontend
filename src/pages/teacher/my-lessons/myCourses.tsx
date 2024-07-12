
import { useEffect, useState } from "react"
import api from "../../../redux/axios"
import { Link } from "react-router-dom"

type CourseType = {
  title: string,
  description:string
}

const MyCourses = () => {

  const [courses, setCourses] = useState<CourseType[] | null>(null)
  const [courseLoading,setCourseLoading] = useState(false)


  useEffect(() => {
    const getCourses = async () => {
      setCourseLoading(true)
      try {
        const course = await api.get("https://e-learning-server-git-main-mdmishrat13s-projects.vercel.app/api/v1/courses")
        if (courses) {
          setCourses([...courses,course.data])
        }
        else {
          setCourses(course.data)
        }
        setCourseLoading(false)
      } catch (error) {
        setCourseLoading(false)
      }

    }

    getCourses()
  }, [])
  
  if (courseLoading) {
    return <h1 className="text-2xl text-center">Loading....</h1>
  }
  
  return (
    <div className='grid md:grid-cols-2 items-center center gap-2 py-4'>
      {courses?.map((course:any) => (
        <div key={course._id} className="w-full h-full p-6 bg-gray-200 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{ course.title}</h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{ course.description}</p>
          <Link to={`https://e-learning-git-main-mdmishrat13s-projects.vercel.app/teacher/dashboard/create/${course._id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg">
            Open Course
            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default MyCourses