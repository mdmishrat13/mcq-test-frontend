import datas from "./data"
import { useParams } from 'react-router-dom'
import Mcq from "./mcq"

const Lesson = () => {
    const { id } = useParams()
    const notes = datas?.find(data => id == data.id)
    // console.log(notes)
    const lesson = notes?.chapters.find(data => id == data.id)
    console.log(lesson.questions)
  return (
      <div>
          <p className="text-lg text-center py-2 border-b">{lesson?.chapterName}</p>
          {lesson?.questions?.map((question:any) => <Mcq question={question} />)}
        </div>
  )
}

export default Lesson