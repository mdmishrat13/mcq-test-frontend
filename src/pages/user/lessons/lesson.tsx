
import { useParams } from 'react-router-dom'
import Mcq from "./mcq"
import { useEffect, useState } from 'react'
import api from '../../../redux/axios'

type QusetionType = {
  question: string,
  options: [{
    a: string,
    b: string,
    c: string,
    d: string
  },
    ans: string,
    _id: string
  ]
}
type ChapterType = {
  chapterName: string,
  description: string,

}
const Lesson = () => {
  const [questions, setQuestions] = useState<QusetionType[] | null>(null)
  const [chapter, setChapter] = useState<ChapterType | null>(null)
  const params = useParams()
  useEffect(() => {

    const getQuestion = async () => {
      try {
        const question = await api.get(`import.meta.env.VITE_BASE_URL_BACKEND/api/v1/course/chapter/question/${params.id}`)
        if (!questions) {
          setQuestions(question.data)
        }
        else {
          setQuestions([...questions, question.data])
        }
      } catch (error) {

      }
    }
    const getChapter = async () => {
      try {
        const chapterData = await api.get(`import.meta.env.VITE_BASE_URL_BACKEND/api/v1/course/chapter/${params.id}`)
        
       
          setChapter( chapterData.data )
       
      } catch (error) {

      }
    }
    getQuestion()
    getChapter()
  }, [])
  return (
    <div>
      <p className="text-lg text-center py-2 border-b">{chapter?.chapterName}</p>
      <Mcq question={questions} />
    </div>
  )
}

export default Lesson