import Card from "../../components/UI/Card/Card";
import styles from "./SimpleInput.module.css";
// import { useState } from "react";
// import { useRef } from "react";
import useInput from "../../Hooks/user-input";

const SimpleInput = () => {
  const {
    value: enteredName,
    inputChangeHandler: nameChangeHandler,
    inputBlurHandler: nameInputBlurHandler,
    resetValues: resetNameInput,
    hasError: enteredNameIsValid,
    touchedValue: enteredNameIsTouched
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
    touchedValue: enteredEmailIsTouched,
    hasError: enteredEmailIsValid,
    resetValues: reserEmailInput
  } = useInput((value) => value.trim().includes("@"));

  let formIsValid = false;
  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }
    resetNameInput();
    reserEmailInput();
  };
  return (
    <Card className={styles.Card}>
      <form onSubmit={formSubmitHandler}>
        <div className={styles.input}>
          <label htmlFor="name">Your Name</label>
          <input
            onBlur={nameInputBlurHandler}
            onChange={nameChangeHandler}
            value={enteredName}
            id="name"
          ></input>
          {enteredNameIsTouched && !enteredNameIsValid && (
            <p>name must not be empty</p>
          )}
        </div>

        <div className={styles.input}>
          <label>Your Email</label>
          <input
            onBlur={emailInputBlurHandler}
            onChange={emailChangeHandler}
            value={enteredEmail}
            id="email"
            type="email"
          ></input>
          {enteredEmailIsTouched && !enteredEmailIsValid && (
            <p>Email must not be empty</p>
          )}
        </div>
        <div className={styles.button_division}>
          <button type="submit">Submit</button>
        </div>
      </form>
    </Card>
  );
};

export default SimpleInput;
