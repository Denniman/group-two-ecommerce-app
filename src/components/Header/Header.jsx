import { Button } from "flowbite-react"
import { IoCartOutline } from "react-icons/io5";


export const Header = () => {
  return (
    <div className="w-full flex justify-between py-4 px-12 lg:px-24 border-b-2 border-gray-200">
        <div className=" text-xl font-bold ">
          <p>{"Business Name"}</p>
        </div>
        <div className="flex gap-4">
          <Button color="light">
            <IoCartOutline className="h-4 w-4 mr-2 mt-0.5" /> Cart
          </Button>
        </div>
      </div>
  )
}
