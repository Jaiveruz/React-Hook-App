import useForm from "../hook/useForm"



export const TodoAdd = ( { onNewTodo } ) => {

    const { description, onInputChange, onResetform } =  useForm({
        description: ''
    });

    const onFormSubmit = ( event ) => {
        event.preventDefault();
        if (description.length <= 1) return; 

        const NewTodo = {
            id: new Date().getTime(), 
            done: false, 
            description: description
        }

        onNewTodo(NewTodo);
        onResetform();

    }

  return (

    <form onSubmit={ onFormSubmit }>
        <input 
            type="text"
            placeholder="¿Que hay que hacer?"
            className="form-control"
            name="description"
            value={ description }
            onChange={ onInputChange } 
        />

        <button
            type="submit"
            className="btn btn-outline-primary mt-1"
        >
            Agregar
        </button>
    </form>

  )
}
