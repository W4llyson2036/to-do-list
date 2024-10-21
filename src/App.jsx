import { useState } from 'react'

// componets
import { Todo }     from './components/Todo';
import { TodoForm } from './components/TodoForm';
import { Search }   from './components/Search';
import { Filter }   from './components/Filter';

// CSS
import './App.css'

function App() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');
  const [sortt, setSort] = useState('');
  const [todo, setTodo] = useState([{
    id:1,
    text: "criar funcionalidade x no sistema",
    category: "Trabalho",
    isCompleted: false,
  },
  {
    id:2,
    text: "Ir pra academia",
    category: "Pessoal",
    isCompleted: false,
  },
  {
    id:3,
    text: "Estudar React",
    category: "Estudos",
    isCompleted: false,

  }]);

  function addTodo(text, category) {
    let newTodos = [...todo, {
      id: Math.floor(Math.random() * 10000),
      text,
      category,
      isCompleted: false,
    }]

    setTodo(newTodos);
  }

  function removeToDo(itemID) {
    const newTodos = [...todo];
    const filteredTodos = newTodos.filter(todo => todo.id != itemID ? todo : null);
    setTodo(filteredTodos);
  }

  function completeTodo(itemID) {
    const newTodos = [...todo];
    newTodos.map(todo => todo.id === itemID ? (todo.isCompleted = !todo.isCompleted) : todo);
    setTodo(newTodos);
  }

  function filterByStatus(todo) {
    if (filter === 'All') return todo;
    
    if (filter === 'Completed') return todo.isCompleted;
    
    if (filter === 'Incompleted') return !todo.isCompleted;
  }

  function filterBySubString(todo) {
    return todo.text.toLowerCase().includes(search.toLowerCase());
  }

  return (
   <div className='app'>
    <h1>Lista de tarefas</h1>
    
    <Search search={search} setSearch={setSearch}/>
    <Filter filter={filter} setFilter={setFilter} setSort={setSort}/>
    
    <div className='todo-list'>
      {todo
        .filter(filterByStatus)
        .filter(filterBySubString) 
        .sort((a, b) => {
          return sortt === 'Asc' 
            ? a.text.localeCompare(b.text) 
            : b.text.localeCompare(a.text)
        })
        .map(todoS => (
          <Todo 
            todo={todoS}  
            key={todoS.id} 
            setRemove={removeToDo}
            setCompleteTodo={completeTodo}
          />
      ))}

      <TodoForm setAddTodo={addTodo}/>
    </div>
   </div>
  )
}

export default App;