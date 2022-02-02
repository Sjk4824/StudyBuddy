import React, {useEffect, useState} from 'react'; 
import "./Todo.css"; 
import {AiOutlineClose} from "react-icons/ai";
import {BsCheck2Square} from "react-icons/bs";
import TodoCard from "./TodoCard"; 
import axios from 'axios';

function Todo(props) {

    const [task, setTask] = useState(""); 
    const [deadline, setDeadline] = useState(""); 
    const [todos, setTodos] = useState([]); 


    const [color2, setcolor2] = useState(true);

    const handleClick = () =>{
        props.removeSidebar(true); 
        props.setToDo(false); 
    }

    //On first render of the component, we always the below: 
    useEffect(() => {
        const fetchTodos = async () => {
            const todos = await axios.get("http://localhost:4000/getalltodos", {
                params : {
                    googleID : JSON.parse(localStorage.getItem("user")).userId,
                }
            }).then((response) => {
                setTodos(response.data); 
            }).catch((err) => {
                console.log(err);
            })
        }

        fetchTodos(); 
    }, []); 

    const handleSubmit= async (event) =>{
        event.preventDefault(); 
        if (!event) return;

        //send the information to the backend: 
        await axios.post("http://localhost:4000/addtodo", {
            googleID : JSON.parse(localStorage.getItem("user")).userId,
            todo : {
                task : task, 
                deadline : deadline
            }
        }).then((response) => {
            const newTodo = {
                task : response.data.task, 
                deadline : response.data.deadline,
            }
            makeNewList(newTodo); 
            setTask(""); 
            setDeadline(""); 
        }).catch((err) => {
            console.log(err);
        })
    }
    
    const makeNewList = (toadd) => {
        const newItem = [...todos, toadd]
        setTodos(newItem); 
    }

    const removeTodo = async (index) => {
        const updated = [...todos];
        updated.splice(index, 1);
        //here we make a put request to modify the array: 
        await axios.put("http://localhost:4000/deletetodo", {
            googleID : JSON.parse(localStorage.getItem("user")).userId,
            updatedArray : updated
        }).then((response) => {
            setTodos(response.data);
        })
    }

    return (
        <div className = "todo">
            <div className = "todo__container">
                <AiOutlineClose onClick={handleClick} size={15} color="#354477" style={{marginLeft : "250px", position : "relative", cursor:"pointer"}}/>
                <div className = "todo__heading">
                    <button onMouseEnter = {() => {setcolor2(false)}} onMouseLeave ={() => {setcolor2(true)}} className = "sidebar__button"><BsCheck2Square size={33} color= {color2 ? "#354477" : "#fff"}/></button>
                    <p>To-Do List</p>
                </div>
                <div>
                    <form onSubmit={handleSubmit} className = "todo__form">
                        <input value={task} type="text" placeholder="Task" onChange={(event) => setTask(event.target.value)}></input>
                        <input value={deadline} type="date" placeholder="Deadline" onChange={(event) => setDeadline(event.target.value)} style={{color : "#354477", fontFamily: 'Montserrat', paddingRight : "15px"}}></input>
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
