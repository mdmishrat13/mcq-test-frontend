// import Lesson from "./lesson"

const Lessons = ({ course, chapter }: { chapter: any, course: any }) => {
  console.log(course)
  console.log(chapter)
  return (
    <div className="p-8 bg-white">
      <div className="border-b">
        <h1 className="text-3xl text-center">{course?.title}</h1>
        <p className="text-center py-4">{course?.description}</p>
        {/* <Lesson chapter={chapter}/> */}
      </div>
     </div>
  )
}

export default Lessons