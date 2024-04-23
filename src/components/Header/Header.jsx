import { Cart } from "../Cart";

export const Header = () => {

  return (
    <>
    <div className="w-full flex justify-between py-4 px-12 lg:px-24 border-b-2 border-gray-200">
          <p className=" text-xl font-bold ">{"Business Name"}</p>    
          <Cart />
      </div>
    </>
  )
}
