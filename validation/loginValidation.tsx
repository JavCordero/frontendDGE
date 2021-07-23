export interface Login {
  email?: string;
  password?: string;
}

export default function loginValidation(values: Login) {
  let errores: Login = {};

  //validar el nombre
  if (!values.email) {
    errores.email = "Ingrese Email";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errores.email = "Debe ingresar un email valido";
  }

  if (!values.password) {
    errores.password = "Ingrese contraseña";
  }

  return errores;
}
