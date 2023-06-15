import { TodoList } from "./TodoList"
import { TodoAdd } from "./TodoAdd"
import { useTodo } from "../hook"

     

export const TodoApp = () => {
  
    const { todos, todosCount, pendingTodosCount, handleNewTodo, handleDeleteTodo, handleToggleTodo  } = useTodo();
    

    return (

    <>
    
        <h1>Todo App {todosCount}, <small>pendientes: {pendingTodosCount}</small></h1>
        <hr />


        <div className="row">
            <div className="col-7">
                
                <TodoList todos={ todos } 
                onDeleteTodo={ handleDeleteTodo } 
                onToggleTodo={ handleToggleTodo }
                />
            {/* para poder agregar el poder borrar, se debe de enviar al hijo, osea a todoList */}
            
            </div>

            <div className="col-5">
                <h4>Agregar TODO</h4>
                <hr />
                <TodoAdd onNewTodo={ handleNewTodo } />
            </div> 

        </div>


        
    
    
    </>
  )
}
