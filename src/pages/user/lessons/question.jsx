
const Question = ({question}) => {
  return (
    <div>
      {Object.entries(question).map(([key, value]) => (
        <div key={key}>
          Question: {key}, Answer: {value}
        </div>
      ))}
    </div>
  )
}

export default Question