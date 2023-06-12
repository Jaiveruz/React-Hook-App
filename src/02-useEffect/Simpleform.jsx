import { useEffect, useState } from "react"
import Message from "./Message";


export const SimpleForm = () => {
  
    const [formState, setFormState] = useState({
        username: 'strider',
        email: 'jaiver@google.com'
    });

    const { username, email} = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target
        setFormState ({
            ...formState,
            [ name ]: value
        });
    }

    /* si se deja [] vacios, quiere decir que solo se va a ejecutar una sola vez, solo cuando se renderice la primera vez*/
    useEffect(() => {
        //console.log('usedefect called');
    }, []);

    /*y aqui no dice cuando el formulario ha sido editado por asi decilo, debido a la dependencia que se colocan dentro de []*/
    useEffect(() => {
        //console.log('formState called');
    }, [formState]);

    {/*si le colocamos una dependencia, como en este caso el email, nos avisara cuando sea cambiaso el email*/}
    useEffect(() => {
       //console.log('email called');
    }, [email]);

    return (
        <>
            <h1>Fomulario Simple</h1>
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
        
            {
                ( username === 'strider2' ) && <Message/>
            };
        
        </>


  )
}

export default SimpleForm
