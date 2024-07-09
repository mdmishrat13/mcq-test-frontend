import { ReactNode, useEffect, useState } from "react"
import { MdKeyboardArrowDown } from "react-icons/md"
import Mcq from "../../user/lessons/mcq"
import axios from "axios"
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, SubmitHandler, useForm } from "react-hook-form";


type QuestionType = {
    question: string;
    options: {
        a: string;
        b: string;
        c: string;
        d: string;
    };
    ans: string;
};

type EditChapterProps = {
    chapter: any
}


const schema = yup.object().shape({
    question: yup.string().required(),
    options: yup.object().shape({
        a: yup.string().required(),
        b: yup.string().required(),
        c: yup.string().required(),
        d: yup.string().required(),
    }),
    ans: yup.string().required()
});


const EditChapter: React.FC<EditChapterProps> = ({ chapter }) => {
    const [questions, setQuestions] = useState<QuestionType[] | null>(null)
    const [mcqAddExpand, setAddMcqExpand] = useState(false)
    const [mcqExpand, setMcqExpand] = useState(false)

    const { control, handleSubmit, register, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            question: '',
            options: { a: '', b: '', c: '', d: '' },
            ans: ''
        }
    });

    useEffect(() => {
        const getQuestions = async () => {
            try {
                const question = await axios.get(`https://e-learning-server-git-main-mdmishrat13s-projects.vercel.app/api/v1/course/chapter/question/${chapter._id}`)
                if (questions) {

                    setQuestions([...questions, question.data])
                }
                else (
                    setQuestions(question.data)
                )
                console.log("all questions", question.data)

            } catch (error) {

            }
        }
        getQuestions()
    }, [])

    console.log("all questions", questions)

    const createQuestion: SubmitHandler<QuestionType> = async (data: any) => {
        try {
            const createdQuestion = await axios.post(`https://e-learning-server-git-main-mdmishrat13s-projects.vercel.app/api/v1/course/chapter/question`, { ...data, chapterId: chapter._id })
            console.log("created question", createdQuestion)
            if (questions) {
                setQuestions([...questions, createdQuestion.data.data])
            }
            else (
                setQuestions(createdQuestion.data.data)
            )
            setAddMcqExpand(false)
            alert("created successfully")
        } catch (error) {

        }
    }

    return (
        <>
            <div className="flex items-center justify-between p-4 px-8 bg-gray-100 mt-2">
                <p className="">{ chapter?.index}. {chapter?.chapterName}</p>
                <button onClick={() => { setMcqExpand(!mcqExpand); setAddMcqExpand(false) }} className="text-xl"><MdKeyboardArrowDown /></button>
            </div>
            {mcqExpand && <div className="bg-gray-100">
                {questions?.map((question: any) => (
                    <Mcq question={question} />

                ))}
                {!mcqAddExpand && <div className="text-right py-4 border-t">
                    <button onClick={() => setAddMcqExpand(!mcqAddExpand)} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 w-2/5">Add MCQ</button>
                </div>}
            </div>}

            {mcqAddExpand && (
                <div className="bg-gray-100 p-4">

                    <form onSubmit={handleSubmit(createQuestion)}>
                        <div className="mb-4">
                            <label htmlFor="question" className="block text-sm font-medium text-gray-700">Question</label>
                            <input
                                id="question"
                                {...register('question')}
                                className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            />
                            {errors.question && <span className="text-red-500">{errors.question.message as ReactNode}</span>}
                        </div>

                        <div className="space-y-6">
                            {(['a', 'b', 'c', 'd'] as const).map((key) => (
                                <div key={key} className="flex gap-2 items-center">
                                    <label className="w-8">{key.toUpperCase()}:</label>
                                    <Controller
                                        name={`options.${key}`}
                                        control={control}
                                        render={({ field }) => (
                                            <input
                                                {...field}
                                                type="text"
                                                className="block p-2.5 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 w-full"
                                            />
                                        )}
                                    />
                                </div>
                            ))}
                        </div>

                        <div className="mt-4">
                            <label htmlFor="ans" className="block text-sm font-medium text-gray-700">Answer</label>
                            <input
                                id="ans"
                                {...register('ans')}
                                className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            />
                            {errors.ans && <span className="text-red-500">{errors.ans.message as ReactNode}</span>}
                        </div>

                        <button
                            type="submit"
                            className="block w-full mt-2 p-2 bg-red-500 text-white rounded-lg"
                        >
                            Add Question
                        </button>
                    </form>
                </div>

            )}
        </>
    )
}

export default EditChapter