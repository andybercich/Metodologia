import * as Yup from "yup"

export const formSchema = Yup.object().shape({

    Nombre : Yup.string()
    .required("El nombre es obligatorio")
    .min(3, "El nombre debe tener 3 caracteres"),
    Mail: Yup.string()
    .required("El correo es obligatorio")
    .email("El mail debe ser de tipo mail"),
    Password: Yup.string()
    .required("La contraseña es obligatoria")
    .min(6, "La contraseña debe tener 6 caracteres"),
    PasswordRepetir: Yup.string()
    .required("Debe repetir la contraseña")
    .oneOf([Yup.ref("Password")],"Las contraseña debe ser igual que la anterior" )




})



