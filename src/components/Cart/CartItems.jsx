import { QuantityBtn } from "../Buttons"


const CartItems = () => {
  return (
    <div className="flex justify-between">
    <div className="flex flex-col gap-1">
      <p className="text-lg text-slate-800">
        {'Apple Pro Max 17"'}
      </p>
      <p className="text-slate-600">{"NGN" + " 1,250,000"}</p>
    </div>
    <QuantityBtn />
  </div>
  )
}

export default CartItems