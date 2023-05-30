import * as Yup from "yup";

//Inicializacion de los name de los input
export function initialValues(){
    return {
        email: "",
        username: "",
        name: "",
        password: "",
    }
}

//Validacion de los input del formulario con Yup
export function validationSchema(){
    return Yup.object({
        email: Yup.string().email(true).required(true),
        username: Yup.string().required(true),    
        name: Yup.string().required(true),
        password: Yup.string().required(true)
    });
}