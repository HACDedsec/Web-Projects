import './App.css';
import Header from './components/Header';
import { Todos } from './components/Todos';
import { Footer } from './components/Footer';
import {Addtodo} from './components/Addtodo';
import { useState, useEffect } from 'react';



function App() {

  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo =[];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));

  }

  const addTodo = (title) =>{
    let sno;
    if (todos.length==0){
      sno = 0;
    }
    else{
      let sno = todos[todos.length-1].sno + 1;
    }
    const myTodo ={
      sno : sno,
      title: title,
    }
    setTodos([...todos, myTodo]);
  }

  const onDelete = (todo) => {
    console.log("iam on delete", todo);

    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    
    localStorage.setItem("todos", JSON.stringify(todos));


  }

  const [todos, setTodos] = useState([initTodo]);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos])



  return (
    <>
      <Header title="My Todo's List" />
      <Addtodo addTodo={addTodo}/>
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
