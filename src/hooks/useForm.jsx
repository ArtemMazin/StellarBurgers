import { useState, useCallback } from 'react';

export function useFormAndValidation({ initialValues = {}, initialValid = {} }) {
  const [values, setValues] = useState(initialValues);
  const [isFormValid, setIsFormValid] = useState(false);
  const [inputsValid, setInputsValid] = useState(initialValid);
  const [errors, setErrors] = useState(null);

  function handleChangeValidation(e) {
    setIsFormValid(e.target.form.checkValidity());
    //записываем имя инпута и сообщение об ошибке в объект, чтобы потом передать сообщение в <span>
    setErrors({ ...errors, [e.target.name]: e.target.validationMessage });
    //записываем имя инпута и проверку валидности в объект, чтобы использовать подсветку невалидного инпута
    setInputsValid({ ...inputsValid, [e.target.name]: e.target.checkValidity() });
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  function handleInput(e, regExp, message) {
    e.target.setCustomValidity('');
    regExp.test(e.target.value)
      ? e.target.setCustomValidity('')
      : e.target.setCustomValidity(e.target.validationMessage || message);
    handleChangeValidation(e);
  }

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsFormValid(newIsValid);
    },
    [setValues, setErrors, setIsFormValid],
  );

  return {
    isFormValid,
    setIsFormValid,
    errors,
    setErrors,
    handleChangeValidation,
    inputsValid,
    setInputsValid,
    resetForm,
    values,
    setValues,
    handleInput,
  };
}
