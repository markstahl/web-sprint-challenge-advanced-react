import { useLocalStorage } from "./useLocalStorage";
import React, { useState } from "react";

export const useForm = (initialState, key) => {

    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [values, setValues] = useLocalStorage(
    initialState,
    key
  );

  const handleChanges = e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };


  const clearForm = () => {
    setValues(initialState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccessMessage(true);
    clearForm();
   };

  return [values, handleChanges, clearForm, handleSubmit];
};