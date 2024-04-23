import { Button } from "flowbite-react";
import { useState } from "react";

export const QuantityBtn = () => {
    const [count, setCount] = useState(1)
    function Subtract (){
        if(count === 1){
            return
        }
        setCount(count - 1)
    }
    function Add(){
        setCount(count + 1)
    }
  return (
    <div>
      <div className="flex items-center">
        <Button pill size="sm" color="light" onClick={Subtract}>
          -
        </Button>
        <p className="p-2">{count}</p>
        <Button pill size="sm" color="light" onClick={Add}>
          +
        </Button>
      </div>
    </div>
  );
};
