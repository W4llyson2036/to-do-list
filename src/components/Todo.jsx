export function Todo({ todo, setRemove, setCompleteTodo }) {
    return (
        <div 
            className='todo'
            style={{textDecoration: todo.isCompleted ? 'line-through' : null }}
        > 
            <div className="content">
                <p >{todo.text}</p>
                <p className="category">({todo.category})</p>
            </div>

            <div>
                <button className="complete" onClick={() => setCompleteTodo(todo.id)}>Completar</button>
                <button className="remove"onClick={() => setRemove(todo.id)}>X</button>
            </div>
        </div> 
    ) 
}