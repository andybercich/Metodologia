
import { useState } from "react";
import { formSchema } from "../../Schema/FormSchema";
import style from "./Form.module.css"
import { badContest, godContest } from "../../PopUps/Alerts/ServerBadAlert";


export const Forms = () => {
  const [values, setValues] = useState({
    Nombre: "",
    Mail: "",
    Password: "",
    PasswordRepetir: "",
  });

  const [errors, setErrors] = useState<Partial<typeof values>>({});

  const validateField = async (name: string, value: string) => {
    try {
      await formSchema.validateAt(name, { ...values, [name]: value });

      setErrors(prev => {
        const { [name]: _, ...rest } = prev;
        return rest;
      });
    } catch (err: any) {
      setErrors(prev => ({
        ...prev,
        [name]: err.message,
      }));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    validateField(name, value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await formSchema.validate(values, { abortEarly: false });

      godContest("El formulario ha sido enviado con exito!!!")

      setValues({
        Nombre: "",
        Mail: "",
        Password: "",
        PasswordRepetir: "",
      });
      setErrors({});
    } catch (err: any) {

      const formErrors: Partial<typeof values> = {};
      if (err.inner && err.inner.length) {
        err.inner.forEach((validationError: any) => {
          if (validationError.path) {
            formErrors[validationError.path as keyof typeof formErrors] =
              validationError.message;
          }
        });
      }
      setErrors(formErrors);
      badContest("Revisa que los datos del formulario estén correctamente")
    }
  };

  return (
    <div className={style.mainForm}>
      <div className={style.divTitulo}>
        <h1 className={style.titulo}>Crear usuario</h1>
      </div>
      <form onSubmit={handleSubmit} noValidate>
        
        <div>
          <input
            name="Nombre"
            type="text"
            placeholder="Ingresa tu nombre"
            value={values.Nombre}
            onChange={handleChange}
          />
          {errors.Nombre ? 
            <p className={style.error}>{errors.Nombre}</p> : <p className={style.error}></p>}
        </div>

        <div>
          <input
            name="Mail"
            type="email"
            placeholder="Ingresa tu mail"
            value={values.Mail}
            onChange={handleChange}
          />
          {errors.Mail ? 
            <p className={style.error}>{errors.Mail}</p> : <p className={style.error}></p>}
        </div>

        <div>
          <input
            name="Password"
            type="password"
            placeholder="Ingresa tu nueva contraseña"
            value={values.Password}
            onChange={handleChange}
          />
          {errors.Password ? 
            <p className={style.error}>{errors.Password}</p> : <p className={style.error}></p>}
        </div>

        <div>
          <input
            name="PasswordRepetir"
            type="password"
            placeholder="Repite tu contraseña"
            value={values.PasswordRepetir}
            onChange={handleChange}
          />
          {errors.PasswordRepetir ? 
            <p className={style.error}>{errors.PasswordRepetir}</p> : <p className={style.error}></p>}
        </div>

        <button className={style.enviar} type="submit">Enviar datos</button>

      </form>
    </div>
  );
};