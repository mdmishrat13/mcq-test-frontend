import { useState } from "react"
import { MdKeyboardArrowDown } from "react-icons/md"
import Mcq from "../../user/lessons/mcq"

const EditChapter = ({ chapter, questions }: { chapter: any, questions: any }) => {
    const [mcqAddExpand, setAddMcqExpand] = useState(false)
    const [mcqExpand, setMcqExpand] = useState(false)
    console.log(chapter)
    return (
        <>
            <div className="flex items-center justify-between p-4 px-8 bg-gray-100 mt-2">
                <p className="">{chapter.chapterTitle}</p>
                <button onClick={() => setMcqExpand(!mcqExpand)} className="text-xl"><MdKeyboardArrowDown /></button>
            </div>
            {mcqExpand && <div className="bg-gray-100">
                {questions.map((question: any) => (
                    <Mcq question={question} />
                ))}
                {!mcqAddExpand&&<div className="text-right py-4">
                    <button onClick={() => setAddMcqExpand(!mcqAddExpand)} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 w-2/5">Add MCQ</button>
                </div>}
            </div>}

                {mcqAddExpand && (
                    <div className="bg-gray-100 p-4">
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
        </>
    )
}

export default EditChapter