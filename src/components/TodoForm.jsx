import { useState } from "react"

export function TodoForm({ setAddTodo }) {
    const [value, setValue] = useState('');
    const [category, setCategory] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!value || !category) return;
        setAddTodo(value, category);
        setValue('');
        setCategory('');
    } 

    return (
        <div className="todo-form">
            <h2>Criar tarefa: </h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="digite o título" 
                    value={value}
                    onChange={(e) => setValue(e.target.value)}    
                />

                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="">selecione uma categoria</option>
                    <option value="trabalho">trabalho</option>
                    <option value="pessoal">pessoal</option>
                    <option value="estudos">estudos</option>
                </select>

                <button type="submit">Criar tarefa</button>
            </form>
        </div>
    )
}