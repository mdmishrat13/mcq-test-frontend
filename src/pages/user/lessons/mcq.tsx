import Question from "./question"
const Mcq = ({ question}:{question:any}) => {
  return (
      <div className="py-4 border-2 border-b p-4">
      <p>{ question.id}. {question?.question}</p>
      <div className="flex items-center justify-between gap-2 ml-3 max-w-[90%]">
      {Object.entries(question.options).filter(([key]) => key !== 'id').map(([key, value]) => (
        <div className="flex items-center justify-center" key={key}>
          <p className="border border-blue-500 rounded-full w-5 h-5 mx-2 flex items-center justify-center"> <span> {key}</span></p> {value}
        </div>
      ))}
      </div>
        <p className="text-right">Ans: {question?.ans}</p>
    </div>
  )
}

export default Mcq