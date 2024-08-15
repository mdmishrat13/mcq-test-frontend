import { ReactNode, useEffect, useState } from "react"
import EditChapter from "./editChapter"
import { FaEdit } from "react-icons/fa"
import { TiTick } from "react-icons/ti"
import { useParams } from "react-router-dom"
import api from "../../../redux/axios"
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"

type CourseType = {
    _id:string
    title: string,
    description: string
}

type ChapterType = {
    chapterName: string,
    index: number
}

const chapterSchema = yup.object().shape({
    chapterName: yup.string().required("Name is required").max(100, "Max length exceeded"),
});

const Edit = () => {
    const [titleExpand, setTitleExpand] = useState(false)
    const [descExpand, setDescExpand] = useState(false)
    // const [chapterExpand, setChapterExpand] = useState(true)
    const [editChapterExpand, setEditChapterExpand] = useState(false)
    // const [addMcqExpand, setAddMcqExpand] = useState(false)
    // const [chapterExpand, setChapterExpand] = useState(false)

    const [courseData, setCourseData] = useState<CourseType | null>(null)
    const [chapters, setChapters] = useState<ChapterType[] | null>(null)
    // const [questions, setQuestions] = useState<QuestionType[] | null>(null)

    const params = useParams()

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(chapterSchema),
    });


    useEffect(() => {
        const fetchCourseData = async () => {
            try {
                const course = await api.get(`import.meta.env.VITE_BASE_URL_BACKEND/api/v1/course/${params.id}`)
                setCourseData(course.data)

            } catch (error) {
                console.log(error)
            }
        }
        const fetchChapter = async () => {
            try {
                const chapters = await api.get(`import.meta.env.VITE_BASE_URL_BACKEND/api/v1/course/chapters/${params.id}`)
                setChapters(chapters.data)

            } catch (error) {
                console.log(error)
            }
        }
        fetchCourseData()
        fetchChapter()
    }, [])

    const createChapter = async (data: any) => {
        try {
            const createdChapter = await api.post(`import.meta.env.VITE_BASE_URL_BACKEND/api/v1/course/chapter`, {...data,courseId:params.id})
            if (chapters) {
                setChapters([...chapters, createdChapter.data.data]);
            } else {
                setChapters([createdChapter.data.data]);
            }
        } catch (error) {
            console.log(error)
        }
        setEditChapterExpand(false)
    }

    return (
        <div className="mt-[80px] mb-8">
            <div className="flex flex-col items-center p-4 my-4 md:p-8 bg-gray-200">
                <div className="h-16 w-full">
                    <div className="flex gap-4 md:gap-8 justify-between">
                        {!titleExpand ? <h1 className="text-xl py-4"> {courseData?.title} </h1> :
                            <input type="text" id="courseTitle" className="block w-70% md:w-[80%] p-2.5 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base" />
                        }
                        <div className="text-right mt-2">
                            <button onClick={() => setTitleExpand(!titleExpand)} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5">{titleExpand ? <TiTick /> : <FaEdit />}</button>
                        </div>
                    </div>
                </div>
                {/* course description input  */}
                <div className="h-16 w-full">
                    <div className="flex gap-4 md:gap-8 justify-between">
                        {!descExpand ? <p className="text-md py-4">{courseData?.description} </p> :

                            <input type="text" id="courseTitle" className="block w-70% md:w-[80%] p-2.5 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base" />
                        }
                        <div className="text-right mt-2">
                            <button onClick={() => setDescExpand(!descExpand)} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5">{descExpand ? <TiTick /> : <FaEdit />}</button>
                        </div>
                    </div>
                </div>

            </div>
            <div className="flex items-center justify-between p-4 md:px-8 bg-gray-200 border-b border-white">
                <p className="text-md font-semibold ">Total Chapters: {chapters?.length}</p>
                <button onClick={() => setEditChapterExpand(true)} className="text-white bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5"> Add New Chapter</button>

            </div>
            <div className="flex flex-col">
                {editChapterExpand && (<div className="p-4 px-8 bg-gray-100 mt-2">
                    <form className="bg-gray-100 flex justify-between" onSubmit={handleSubmit(createChapter)}>

                        <input type="text" {...register("chapterName")} id="courseTitle" className="block w-70% md:w-[80%] p-2.5 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base" />
                        {errors.chapterName && (
                            <span className="text-red-600" role="alert">{errors?.chapterName?.message as ReactNode}</span>
                        )}
                        <div className="flex justify-ceter items-center gap-2 ml-2">
                            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5">Add</button>
                            <button onClick={() => setEditChapterExpand(false)} className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5">Cancel</button>

                        </div>
                    </form>
                </div>)}

                {!chapters?.length && (
                    <div className="p-4 px-8 bg-gray-100 mt-2">
                        <div className="bg-gray-100">
                            <h1 className="text-center">No Chapter Found</h1>
                        </div>
                    </div>
                )}



                {chapters?.map(chapter => (
                    <EditChapter chapter={chapter}/>
                ))}

                {/* {chapterExpand && (
                    <div className="w-[80%]">
                        <div className="flex items-center gap-4 md:gap-8 justify-between">
                            <p className="text-md py-2">Chapter Title:</p>
                            <input type="text" id="courseTitle" className="block w-[70%] md:w-[80%] p-2.5 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500" />

                        </div>
                        {!questions?.length && <p className="pt-4 pb-2 text-center">Now Add Atleast One MCQ</p>}

                        <div className="bg-gray-100 py-8 px-4 my-4">
                            {questions?.map((question: any) => <Mcq question={question} />)}
                            {!addMcqExpand && (
                                <div className="text-right py-4">
                                    <button onClick={() => setAddMcqExpand(true)} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 w-2/5">Add Question</button>
                                </div>
                            )}
                        </div>

                        {!addMcqExpand && (
                            <div className="bg-gray-100 py-8 px-4 my-4">
                                <p className="text-md py-2">Question:</p>
                                <div className="flex items-center gap-4 md:gap-8 justify-between">
                                    <input type="text" id="courseTitle" className="block w-[70%] md:w-[80%] p-2.5 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 ml-6" />

                                </div>
                                <p className="text-md py-2">Options:</p>
                                <div className="flex items-center gap-4 md:gap-8">
                                    <div className="w-full grid grid-cols-4 justify-between items-center gap-4">
                                        <div className="flex gap-2 justify-between items-center">
                                            A. <input type="text" id="courseTitle" className="block p-2.5 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 w-full" />
                                        </div>
                                        <div className="flex gap-2 justify-between items-center">
                                            A. <input type="text" id="courseTitle" className="block p-2.5 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 w-full" />
                                        </div>
                                        <div className="flex gap-2 justify-between items-center">
                                            A. <input type="text" id="courseTitle" className="block p-2.5 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 w-full" />
                                        </div>
                                        <div className="flex gap-2 justify-between items-center">
                                            A. <input type="text" id="courseTitle" className="block p-2.5 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 w-full" />
                                        </div>
                                    </div>
                                </div>
                                <p className="pt-4 pb-2">Correct Ans: </p> <input type="text" id="courseTitle" className="block p-2.5 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 w-48" placeholder="A/B/C/D" />

                                <div className="text-right py-4">
                                    <button onClick={() => setAddMcqExpand(false)} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 w-2/5">Save</button>
                                </div>
                            </div>
                        )}
                        <div className="text-center py-4">
                            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 w-2/5">Create Chapter</button>
                        </div>
                    </div>
                )} */}
            </div>

        </div>
    )
}

export default Edit