import "./App.css";
import React, { useState, useEffect } from "react";
import Axios from "axios";

function App() {
  const [productlist, setProductlist] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:30001/read").then((response) => {
      setProductlist(response.data);
    });
  }, []);

  const [productname, setProductname] = useState("");
  const [productprice, setProductprice] = useState("");
  const [productdescription, setProductdescription] = useState("");

  const [newDataname, setNewDataname] = useState("");

  const addToList = () => {
    Axios.post("http://localhost:30001/insert", {
      name: productname,
      price: productprice,
      description: productdescription,
    });
  };

  const updateData = (id) => {
    Axios.put("http://localhost:30001/update", {
      id: id,
      newDataname: newDataname,
    });
  };

  const deleteData = (id) => {
    Axios.delete(`http://localhost:30001/delete/${id}`);
  };

  return (
    <div className="App">
      <h1> Hello Friend</h1>
      <label> Name: </label>
      <input
        type="text"
        onChange={(event) => {
          setProductname(event.target.value);
        }}
      />
      <label> Price: </label>
      <input
        type="number"
        onChange={(event) => {
          setProductprice(event.target.value);
        }}
      />
      <label> Description: </label>
      <input
        type="text"
        onChange={(event) => {
          setProductdescription(event.target.value);
        }}
      />
      <button onClick={addToList}> Add to DB</button>

      <hr />
      <h2>Read Operation</h2>
      {productlist.map((product, key) => {
        return (
          <div>
            <h3>{product.name}</h3>
            <h3>{product.price}</h3>
            <h3>{product.description}</h3>
            <input
              type="text"
              placeholder="Enter new data"
              onChange={(event) => {
                setNewDataname(event.target.value);
              }}
            />
            <button onClick={() => updateData(product._id)}>Update</button>
            <br />
            <button onClick={() => deleteData(product._id)}>
              Delete this data
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
