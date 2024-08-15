import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md"
import api from "../../../redux/axios"
import Lessons from "./lessons"


type CourseType = {
  title: string,
  description: string,
  _id:string
}
type ChapterType = {
  chapterName: string,
  description: string,
  _id:string
}


const Layout = () => {
  const [expand, setExpand] = useState(false)
  const [course,setCourse] = useState<CourseType|null>(null)
  const [chapter,setChapter] = useState<ChapterType[]|null>(null)
  const params = useParams()

  useEffect(() => {
    const getCourse = async () => {
      try {
        const course = await api.get(`import.meta.env.VITE_BASE_URL_BACKEND/api/v1/course/${params.id}`)
        setCourse(course.data)
      } catch (error) {
        
      }
    }

    const getChapter = async () => {
      try {
        const chapter = await api.get(`import.meta.env.VITE_BASE_URL_BACKEND/api/v1/course/chapters/${params.id}`)
        setChapter(chapter.data)
      } catch (error) {
        
      }
    }
    getChapter()
    getCourse()
  },[])

  return (
    <div className="w-full">
      <div className="hidden md:block md:w-52 lg:w-72 bg-gray-200 h-[90vh] fixed left-0 top-[68px] z-10 overflow-scroll">
       
          <div className="rounded-md bg-white p-2 m-2">
            <Link onClick={()=>setExpand(!expand)} to="#" className="flex items-center justify-between gap-2 rounded-md bg-white">
              <div className="" key={course?._id}>
                <h1 className="font-semibold text-lg" key={course?._id}>{course?.title}</h1>
                <p className="text-muted">{course?.description.slice(0, 20)}..</p>
                <p className="text-sm">by Md Mishrat Hossain</p>
              </div>
              <p className="text-xl">{expand?<MdKeyboardArrowUp/> :<MdKeyboardArrowDown />}</p>
            </Link>
            <Link to="#" className={`${expand?"my-2 rounded-md block p-2 bg-gray-300":"hidden"}`}>
              {chapter?.map((chapter: any) => (
                <div className="flex gap-2 border-b"><p className="text-md font-bold">{chapter?.id}</p>
                  <h1>{chapter?.chapterName}</h1>
                </div>
              ))}
            </Link>
          </div>
      </div>
      <div className="w-6/10 mt-[85px] md:ml-52 lg:ml-72 bg-gray-300">
        <Lessons course={course} chapter={chapter} />
      </div>
    </div>
  )
}

export default Layout