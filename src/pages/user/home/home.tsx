import { useSelector } from "../../../hooks.tsx/hooks";
import { RootState } from "../../../redux/auth/store";

const Home = () => {
    const toasts = useSelector((state: RootState) => state.auth.toasts);
    
    console.log(toasts)

  return (
      <div>
          <h1 className="text-2xl text-center">this is homepage</h1>
    </div>
  )
}

export default Home