


export const TodoItems = ({ todo, onDeleteTodo, onToggleTodo }) => {
  return (
        <li className="list-group-item d-flex justify-content-between">
            <span 
            className= {`align-self-center ${ (todo.done) ? 'text-decoration-line-through' : '' }`}
            onClick={ () => onToggleTodo( todo.id ) }
            >
              { todo.description } 
            </span>

            <button 
            className="btn btn-danger"
            onClick={ () => onDeleteTodo( todo.id ) }
            >Borrar </button>
        </li>
  )
}
//  aqui si usamos el onDeleteTodo y con ello se se hace la funcion que tenga como parametro
//  el id para que asi sea borrado 