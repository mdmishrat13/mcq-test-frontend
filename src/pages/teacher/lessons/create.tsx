import { yupResolver } from "@hookform/resolvers/yup";
import { ReactNode } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import api from "../../../redux/axios";
import { useNavigate } from "react-router-dom";

const schema = yup.object().shape({
  title: yup.string().required("Title is required").max(100, "Max length exceeded"),
  description: yup.string().required("Description is required").max(200, "Max length exceeded").min(6,"Minimum length 6 character"),
});

const Create = () => {
  const navigate = useNavigate()

  const {register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  // const dispatch = useDispatch();
  
  const onSubmit = async(data: any) => {
    try {
      const createdCourse = await api.post('import.meta.env.VITE_BASE_URL_BACKEND/api/v1/course/create', data)
      console.log(createdCourse.data.data._id)
      navigate(`${createdCourse.data.data._id}`)
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className="mt-[80px] bg-gray-200 py-4">
      <h1 className="text-3xl text-center pt-4">Md Mishrat Hossain</h1>
      <p className="text-xl text-center">BBA in Accounting</p>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          {/* course title input  */}
          <div className="mb-5 w-[80%] mx-auto">
            <label htmlFor="courseTitle" className="block mb-2 text-sm font-medium text-gray-900">Course Title</label>
            <input type="text" {...register('title')} id="courseTitle" className="block w-full p-2.5 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base" />
            {errors.title && (
        <span className="text-red-600" role="alert">{errors?.title?.message as ReactNode}</span>
      )}
        </div>
          {/* course description input  */}
          <div className="mb-5 w-[80%] mx-auto">
            <label htmlFor="courseTitle" className="block mb-2 text-sm font-medium text-gray-900">Course Description</label>
            <input type="text" id="courseTitle" {...register('description')} className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base" />
            {errors.description && (
        <span className="text-red-600" role="alert">{errors?.description?.message as ReactNode}</span>
      )}
        </div>
          <div className="text-right w-[80%] ml-auto">
            <button type="submit" className="mr-4 text-white bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5">Create Course</button>
          </div>
        </form>
    </div>
  )
}

export default Create