import { Outlet, useParams } from "react-router-dom"
import datas from "./data"

const Lessons = () => {
  const {id} = useParams()
  const notes = datas.find((data:any) =>id == data.id)
  return (
    <div className="p-8 bg-white">
      {/* <div className="border-b"> */}
      <h1 className="text-3xl text-center">{notes?.courseTitle}</h1>
      <Outlet/>
      </div>
      
    // </div>
  )
}

export default Lessons