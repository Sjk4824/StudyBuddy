import React, {useState} from 'react'; 
import "./Todo.css"; 
import {AiOutlineClose} from "react-icons/ai";
import {BsCheck2Square} from "react-icons/bs";
import TodoCard from "./TodoCard"; 

function Todo(props) {

    const [task, setTask] = useState(""); 
    const [deadline, setDeadline] = useState(""); 

    const [todos, setTodos] = useState([
    ]); 
    const [color2, setcolor2] = useState(true);

    const handleClick = () =>{
        props.removeSidebar(true); 
        props.setToDo(false); 
    }

    const handleSubmit= (event) =>{
        event.preventDefault(); 
        if (!event) return;
        const newTodo = {
            task : task, 
            deadline : deadline,
            isDone: false
        }
        makeNewList(newTodo); 
        setTask(""); 
        setDeadline(""); 
    }
    const makeNewList = (toadd) => {
        const newItem = [...todos, toadd]
        setTodos(newItem); 
    }

    const removeTodo = (index) => {
        const updated = [...todos];
        updated.splice(index, 1);
        setTodos(updated);
    }

    return (
        <div className = "todo">
            <div className = "todo__container">
                <AiOutlineClose onClick={handleClick} size={15} color="#354477" style={{marginLeft : "250px", position : "relative"}}/>
                <div className = "todo__heading">
                    <button onMouseEnter = {() => {setcolor2(false)}} onMouseLeave ={() => {setcolor2(true)}} className = "sidebar__button"><BsCheck2Square size={33} color= {color2 ? "#354477" : "#fff"}/></button>
                    <p>To-Do List</p>
                </div>
                <div>
                    <form onSubmit={handleSubmit} className = "todo__form">
                        <input value={task} type="text" placeholder="Task" onChange={(event) => setTask(event.target.value)}></input>
                        <input value={deadline} type="text" placeholder="Deadline(dd/mm/yy)" onChange={(event) => setDeadline(event.target.value)}></input>
                        <button className="todo__add" type = "submit">+</button>
                    </form>
                </div>
                {/* now we have to iterate over todos and render the todo-card component */}
                <div className = "todo__items__all">
                    {todos.map((todo, index) => (
                        <TodoCard key={index} index={index} deadline = {todo.deadline} task={todo.task} removeTodo={removeTodo}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Todo
