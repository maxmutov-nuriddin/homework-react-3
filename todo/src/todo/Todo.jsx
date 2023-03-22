import { useState } from 'react'

import './todo.css'

const Todo = () => {

  const [todo, setTodos] = useState(() => {

    const storedTodos = localStorage.getItem('todos');
    return storedTodos ? JSON.parse(storedTodos) : [];
  });

  const [newTodo, setNewTodo] = useState('');
  const [newTodol, setNewTodol] = useState('');
  const [newTodoa, setNewTodoa] = useState('');

  const handleChangeEvent = (event) => {
    setNewTodo(event.target.value);
    console.log(event.target.value);
  }

  const handleChangeEventl = (event) => {
    setNewTodol(event.target.value);
    console.log(event.target.value);
  }

  const handleChangeEventa = (event) => {
    setNewTodoa(event.target.value);
    console.log(event.target.value);
  }


  const handleChangeSubmit = (event) => {
    event.preventDefault();

    if (!newTodo.trim(), !newTodol.trim(), !newTodoa.trim()) return;
    setTodos([...todo, {
      id: Date.now(),
      name: newTodo,
      surname: newTodol,
      age: newTodoa
    }]);

    setNewTodo('')
    setNewTodol('')
    setNewTodoa('')
  }
  localStorage.setItem('todos', JSON.stringify(todo));

  const handleDelete = (id) => {
    const updateTodo = todo.filter((item) => item.id !== id);
    setTodos(updateTodo);
  }

  const [drop, setdrop] = useState(false);


  const changedrop = () => {
    return setdrop(!drop)
  }
  return (
    <>
      <div className="container">
        <button onClick={changedrop}>button</button>
        <div className={`divs ${drop ? 'div' : ""}, ${drop ? '' : "div"}`}>
          <div className="box">

            <form className='form' onSubmit={handleChangeSubmit}>
              <input type="text" placeholder='First name' value={newTodo} onChange={handleChangeEvent} />
              <input type="text" placeholder='Last name' value={newTodol} onChange={handleChangeEventl} />
              <input type="number" placeholder='Your age' value={newTodoa} onChange={handleChangeEventa} />
              <button type="submit" onClick={changedrop}>Add</button>
            </form>
          </div>
        </div>
        <ul>
          {
            todo.map((element) => (
              <li key={element.id}>
                <div className='spand'>
                  <span className='spanf'>Name | {element.name}</span>
                  <span className='spans'>Surname | {element.surname}</span>
                  <span className='spant'>Age | {element.age}</span>
                  <button onClick={() => handleDelete(element.id)}>Delete</button>
                </div>
              </li>
            ))
          }
        </ul>
      </div>
    </>
  )
}

export default Todo