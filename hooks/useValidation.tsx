import { useEffect, useState } from "react";
import { Login } from "../validation/loginValidation";

const useValidation = (stateInicial, validar, fn) => {
  const [values, setValues] = useState(stateInicial);
  const [errores, setErrores] = useState<Login>({});
  const [submitForm, setSubmitForm] = useState(false);

  useEffect(() => {
    if (submitForm) {
      const noErrores = Object.keys(errores).length === 0;

      if (noErrores) {
        fn();
      }
      setSubmitForm(false);
    }
  }, [errores, fn, submitForm]);

  //función que ejecuta conforme el usuario escribe
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  //función que se ejecuta cuando el usuario hace submit
  const handlerSubmit = (e) => {
    e.preventDefault();
    const ErroresValidacion = validar(values);
    setErrores(ErroresValidacion);
    setSubmitForm(true);
  };

  const handlerBlur = (e) => {
    e.preventDefault();
    const ErroresValidacion = validar(values);
    setErrores(ErroresValidacion);
  };

  return {
    values,
    errores,
    submitForm,
    handlerSubmit,
    handleChange,
    handlerBlur,
  };
};

export default useValidation;
