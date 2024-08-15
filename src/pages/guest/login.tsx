import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ReactNode} from "react";
import { loginUser } from "../../redux/auth/userThunk";
import { useDispatch,} from "../../hooks.tsx/hooks";
import { LoginPayload } from "../../redux/auth/types";


const schema = yup.object().shape({
  email: yup.string().required("Name is required").max(100, "Max length exceeded"),
  password: yup.string().required("Name is required").max(100, "Max length exceeded").min(6,"Minimum length 6 character"),
});


const Login = () => {
  const {register, handleSubmit, formState: { errors } } = useForm<LoginPayload>({
    resolver: yupResolver(schema),
  });

  const dispatch = useDispatch();
  
  const onSubmit = (data:LoginPayload) => {
    dispatch(loginUser(data));
  };
  return (
   <div className="min-h-screen w-full bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 px-6">
  <div className="sm:mx-auto sm:w-full sm:max-w-md">
    <img className="mx-auto h-10 w-auto" src="https://www.svgrepo.com/show/301692/login.svg" alt="Workflow" />
    <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
      Sign in to your account
    </h2>
    <p className="mt-2 text-center text-sm leading-5 text-blue-500 max-w">
      Or
      <a href="#" className="ml-2 font-medium text-blue-500 hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150">
        create a new acccount
      </a>
    </p>
  </div>
  <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
    <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="email" className="block text-sm font-medium leading-5  text-gray-700">Email address</label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <input id="email" placeholder="user@example.com" type="email" {...register("email")} required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
            {errors.email && (
        <span className="text-red-600" role="alert">{errors?.email?.message as ReactNode}</span>
      )}
          </div>
        </div>
        <div className="mt-6">
          <label htmlFor="password" className="block text-sm font-medium leading-5 text-gray-700">Password</label>
          <div className="mt-1 rounded-md shadow-sm">
                <input id="password" {...register("password")} type="password" required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                {errors.password && (
        <span className="text-red-600" role="alert">{errors?.password?.message as ReactNode}</span>
      )}
          </div>
        </div>
        <div className="mt-6 flex items-center justify-between">
          <div className="flex items-center">
            <input id="remember_me" name="remember" type="checkbox" defaultValue={1} className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out" />
            <label htmlFor="remember_me" className="ml-2 block text-sm leading-5 text-gray-900">Remember me</label>
          </div>
          <div className="text-sm leading-5">
            <a href="#" className="font-medium text-blue-500 hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150">
              Forgot your password?
            </a>
          </div>
        </div>
        <div className="mt-6">
          <span className="block w-full rounded-md shadow-sm">
            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
              Sign in
            </button>
          </span>
        </div>
      </form>
    </div>
  </div>
</div>

  )
}

export default Login