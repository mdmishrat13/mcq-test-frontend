
const Create = () => {
  return (
    <div className="mt-[80px] bg-gray-200 py-4">
      <h1 className="text-3xl text-center pt-4">Md Mishrat Hossain</h1>
      <p className="text-xl text-center">BBA in Accounting</p>
      <div className="flex flex-col items-center p-4">

        {/* course title input  */}
        <div className="mb-5 w-[80%]">
          <label htmlFor="courseTitle" className="block mb-2 text-sm font-medium text-gray-900">Course Title</label>
          <input type="text" id="courseTitle" className="block w-full p-2.5 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500" />
        </div>
        {/* course description input  */}
        <div className="mb-5 w-[80%]">
          <label htmlFor="courseTitle" className="block mb-2 text-sm font-medium text-gray-900">Course Description</label>
          <input type="text" id="courseTitle" className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500" />
          </div>
        <div className="text-right w-[80%]">
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5">Create Course</button>
          </div>
      </div>
    </div>
  )
}

export default Create