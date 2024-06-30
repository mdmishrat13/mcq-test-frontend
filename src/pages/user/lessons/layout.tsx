import { Outlet } from "react-router-dom"
import datas from "./data"
import { Link } from "react-router-dom"
import { useState } from "react"
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md"
console.log(datas)
const Layout = () => {
  const [expand, setExpand] = useState({})

  const handleExpand = (id: string) => {
    setExpand(prevExpand => {
      if (prevExpand[id]) {
        const { [id]: _, ...expand } = prevExpand;
        return expand;
      }
      return { ...prevExpand, [id]: id };
    });
  }
  return (
    <div className="w-full">
      <div className="hidden md:block md:w-52 lg:w-72 bg-gray-200 h-[90vh] fixed left-0 top-[68px] z-10 overflow-scroll">
        {datas.map((data: any) => (
          <div className="rounded-md bg-white p-2 m-2">
            <Link onClick={()=>handleExpand(data.id)} to="#" className="flex items-center justify-between gap-2 rounded-md bg-white">
              <div className="" key={data.id}>
                <h1 className="font-semibold text-lg" key={data?.id}>{data?.courseTitle}</h1>
                <p className="text-muted">{data?.description.slice(0, 20)}..</p>
                <p className="text-sm">by Md Mishrat Hossain</p>
              </div>
              <p className="text-xl">{Object.values(expand).includes(data.id)?<MdKeyboardArrowUp/> :<MdKeyboardArrowDown />}</p>
            </Link>
            <Link to="#" className={`${Object.values(expand).includes(data.id)?"my-2 rounded-md block p-2 bg-gray-300":"hidden"}`}>
              {data?.chapters?.map((chapter: any) => (
                <div className="flex gap-2 border-b"><p className="text-md font-bold">{chapter?.id}</p>
                  <h1>{chapter?.chapterName}</h1>
                </div>
              ))}
            </Link>
          </div>
        ))}
      </div>
      <div className="w-6/10 mt-[85px] md:ml-52 lg:ml-72 bg-gray-300">
        <Outlet/>
        {/* <Lessons data={datas} /> */}
      </div>
    </div>
  )
}

export default Layout