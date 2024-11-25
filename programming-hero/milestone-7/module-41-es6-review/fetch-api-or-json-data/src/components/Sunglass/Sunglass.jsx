
import { useEffect } from "react";
import { add, calculator, divideTheFirstNumberByTheSecondNumber as divide } from "../../Utils/calculator";
import "./Sunglass.css"

export default function Sunglass() {


        const first = 55;
        const second = 33;
        const sum = add(first, second)
        console.log("The sum of the two number is: ",sum);

        const vagg = divide(first , second)


        const num1 = 5;
        const num2 = 6;
        const calculate = calculator(num1, num2);
        console.log("multiply is: ", calculate);
  return (
    <div>
        <h5>Sunglass</h5>
    </div>
  )
}
