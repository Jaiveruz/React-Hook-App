import { TodoItems } from "./TodoItems"


export const TodoList = ({ todos = [], onDeleteTodo, onToggleTodo  }) => {
  
    // aqui debe ser llamado el onDeleteTodo, aunque no sea definido, debe ser enviado al hijo
    // osea al TodoItems

    return (
    <ul className="list-group">
        {
            todos.map( todo => (
                <TodoItems 
                key={ todo.id } 
                todo={ todo } 
                onDeleteTodo={ onDeleteTodo }
                onToggleTodo={ onToggleTodo } 
                />
            ))
        };
    </ul>
    )
}
