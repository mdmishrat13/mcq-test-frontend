import { useState } from "react"
import Mcq from "../../user/lessons/mcq"
import { MdKeyboardArrowDown } from "react-icons/md"
import EditChapter from "./editChapter"

const Edit = () => {
    const [titleExpand, setTitleExpand] = useState(false)
    const [descExpand, setDescExpand] = useState(false)
    const [chapterExpand, setChapterExpand] = useState(false)
    const [addMcqExpand, setAddMcqExpand] = useState(false)
    // const [chapterExpand, setChapterExpand] = useState(false)

    const [questions, setQuestions] = useState([
        {
            id: 1,
            question: "A number of students ______ suspended during the riots in 1998.",
            options: {
                id: 1,
                a: 'were',
                b: "is",
                c: "has been",
                d: "none of the above"
            },
            ans: "a"
        },
        {
            id: 2,
            question: "A number of students ______ suspended during the riots in 1998.",
            options: {
                id: 1,
                a: 'were',
                b: "is",
                c: "has been",
                d: "none of the above"
            },
            ans: "a"
        },
        {
            id: 3,
            question: "A number of students ______ suspended during the riots in 1998.",
            options: {
                id: 1,
                a: 'were',
                b: "is",
                c: "has been",
                d: "none of the above"
            },
            ans: "a"
        },
        {
            id: 4,
            question: "A number of students ______ suspended during the riots in 1998.",
            options: {
                id: 1,
                a: 'were',
                b: "is",
                c: "has been",
                d: "none of the above"
            },
            ans: "a"
        },
        {
            id: 5,
            question: "A number of students ______ suspended during the riots in 1998.",
            options: {
                id: 1,
                a: 'were',
                b: "is",
                c: "has been",
                d: "none of the above"
            },
            ans: "a"
        }
    ])
    const [chapters, setChapters] = useState([
        {
            id: 1,
            chapterTitle: "Chapter-1"
        },
        {
            id: 1,
            chapterTitle: "Chpter-2"
        },
        {
            id: 1,
            chapterTitle: "Chpter-3"
        },
        {
            id: 1,
            chapterTitle: "Chpter-4"
        },
        {
            id: 1,
            chapterTitle: "Chpter-5"
        },
    ])
    return (
        <div className="mt-[80px]">
            <div className="flex flex-col items-center p-4 my-4 md:p-8 bg-gray-200">
                <div className="h-12 w-full">
                    <div className="flex items-center gap-4 md:gap-8 justify-between">
                        {!titleExpand ? <h1 className="text-xl py-4">Introduction to Subject Verb Agreement </h1> :
                            <input type="text" id="courseTitle" className="block w-70% md:w-[80%] p-2.5 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500" />
                        }
                        <div className="text-right">
                            <button onClick={() => setTitleExpand(!titleExpand)} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5">{titleExpand ? "Save" : "Edit"}</button>
                        </div>
                    </div>
                </div>
                {/* course description input  */}
                <div className="h-12 w-full">
                    <div className="flex items-center gap-4 md:gap-8 justify-between">
                        {!descExpand ? <p className="text-md py-4">Introduction to Subject Verb Agreement </p> :

                            <input type="text" id="courseTitle" className="block w-70% md:w-[80%] p-2.5 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500" />
                        }
                        <div className="text-right">
                            <button onClick={() => setDescExpand(!descExpand)} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5">{titleExpand ? "Save" : "Edit"}</button>
                        </div>
                    </div>
                </div>

            </div>
            <div className="flex items-center justify-between p-4 md:px-8 bg-gray-200 border-b border-white">
                <p className="text-md font-semibold ">Total Chapters: {chapters.length}</p>  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"> Add New Chapter</button>

            </div>
            <div className="flex flex-col">

                {chapters?.map(chapter => (
                    <EditChapter chapter={chapter} questions={ questions} />
                ))}

                {chapterExpand && (
                    <div className="w-[80%]">
                        <div className="flex items-center gap-4 md:gap-8 justify-between">
                            <p className="text-md py-2">Chapter Title:</p>
                            <input type="text" id="courseTitle" className="block w-[70%] md:w-[80%] p-2.5 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500" />

                        </div>
                        {!questions.length && <p className="pt-4 pb-2 text-center">Now Add Atleast One MCQ</p>}

                        <div className="bg-gray-100 py-8 px-4 my-4">
                            {questions?.map((question: any) => <Mcq question={question} />)}
                            {!addMcqExpand && (
                                <div className="text-right py-4">
                                    <button onClick={() => setAddMcqExpand(true)} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 w-2/5">Add Question</button>
                                </div>
                            )}
                        </div>

                        {!questions.length || addMcqExpand && (
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
                )}
            </div>

        </div>
    )
}

export default Edit