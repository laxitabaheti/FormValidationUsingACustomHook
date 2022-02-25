import { useState } from "react";
const useInput = (validityFunction) => {
  const [enteredValue, setEnteredvalue] = useState(" ");
  const [valueIsTouched, setValueIsTouched] = useState(false);
  const inputChangeHandler = (event) => {
    setEnteredvalue(event.target.value);
  };
  const inputBlurHandler = () => {
    setValueIsTouched(true);
  };
  const hasError = validityFunction(enteredValue);

  const resetValues = () => {
    setValueIsTouched(false);
    setEnteredvalue(" ");
  };
  return {
    value: enteredValue,
    touchedValue: valueIsTouched,
    inputChangeHandler,
    inputBlurHandler,
    resetValues,
    hasError
  };
};
export default useInput;
