import React from "react";
import { useState } from "react";

export const Addtodo = (props) => {

    const [title, setTitle] = useState("");
    const submit = (e) =>{
        e.preventDefault();
        if(!title)  {
            alert("Please Enter valid Task to do ....")
        }
        else{
        props.addTodo(title);
        setTitle("");
    }
    }


  return (
    <div className="container my-3">
        <h2>Add new Task</h2>
      <form onSubmit={submit}>
  <div className="mb-3">
    <label for="text" className="form-label">Task</label>
    <input type="text" value={title} className="form-control"  onChange={(e)=>{setTitle(e.target.value)}} id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>

 
  <button type="submit" className="btn btn-sm btn-success">Add To List</button>
</form>
    </div>
  );
};
