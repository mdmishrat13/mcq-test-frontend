import { useEffect, useState } from "react"
import api from "../../../redux/axios"
import { Link } from "react-router-dom"

type Teachers ={
    name: string,
    email:string
}

const Teachers = () => {
    const [teachers, setTeachers] = useState<Teachers[]>([])
    const [loading,setLoading] = useState(false)
    useEffect(() => {
        const fetchTeachers = async () => {
            try {
                setLoading(true)
                const response = await api.get("import.meta.env.VITE_BASE_URL_BACKEND/api/v1/auth/users");
                setTeachers(response.data);
               setLoading(false)
              } catch (error) {
               setLoading(false)
              }
            };
        
            fetchTeachers();
    }, [])
    if (loading) {
        return <h1 className="text-center text-xl">Loading...</h1>
    }
  return (
      <div className="mx-auto md:w-[50%]">
          <div className="grid grid-cols-2 items-center justify-between gap-2">
          {teachers?.map((teacher: Teachers) => (
              <div className="p-4 shadow-md bg-gray-100">
                  <div className="">
                  <img className="w-full" src="https://i.ibb.co/rw47WrY/mishrat.jpg" />
                      <h1 className="text-lg text-center p2-4 pt-4">{teacher.name}</h1>
                      <p className=" font-light text-sm text-center pb-2 border-b"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, deleniti.</p>
                      <Link to="#" className="py-2.5 px-4 bg-gray-900 w-full block text-white text-center rounded-md mt-2">View Profile</Link>
                  </div>
                  
                  </div>
          ))}
              </div>
    </div>
  )
}

export default Teachers