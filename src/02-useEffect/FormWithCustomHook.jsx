import { useEffect } from "react";
import useForm from "../hook/useForm";



export const FormWithCustomHook = () => {
  
    const { formState, onInputChange, username, email, password} = useForm({
        username: '',
        email: '',
        password: ''
    }); 
    
    //const { username, email, password } = formState; 

    /* si se deja [] vacios, quiere decir que solo se va a ejecutar una sola vez, solo cuando se renderice la primera vez*/
   // useEffect(() => {
        //console.log('usedefect called');
   // }, []);

    /*y aqui no dice cuando el formulario ha sido editado por asi decilo, debido a la dependencia que se colocan dentro de []*/
    //useEffect(() => {
        //console.log('formState called');
    //}, [formState]);

    //{/*si le colocamos una dependencia, como en este caso el email, nos avisara cuando sea cambiaso el email*/}
   // useEffect(() => {
       //console.log('email called');
   // }, [email]);

    return (
        <>
            <h1>Fomulario con custo Hook</h1>
            <hr />


            <input 
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value = { username }
                onChange={ onInputChange }
            />

            <input 
                type="email"
                className="form-control mt-2"
                placeholder="Jaiver@google.com"
                name="email"
                value={ email }
                onChange={ onInputChange }
            />

            <input 
                type="password"
                className="form-control mt-2"
                placeholder="contrasena"
                name="password"
                value={ password }
                onChange={ onInputChange }
            />



            
        
        </>


  )
}

export default FormWithCustomHook
