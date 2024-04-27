import { Cart } from "../Cart";
import { useLocation } from "react-router-dom";
export const Header = () => {

  const { pathname } = useLocation();
  return (
    <>
    <div className="w-full flex justify-between py-4 px-12 lg:px-24 border-b-2 border-gray-200">
          <p className=" text-xl font-bold ">{pathname}</p>    
          <Cart />
      </div>
    </>
  )
}
