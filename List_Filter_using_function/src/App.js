import "./App.css";
import { useState, useEffect } from "react";
import Cardlist from "./components/Card-list/Card-list";
import Searchbox from "./components/Search-box/Search-box";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [Robots, setRobots] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setRobots(users));
  }, []);

  const onsearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  const filterRobots = Robots.filter((Robots) => {
    return Robots.name.toLocaleLowerCase().includes(searchField);
  });

  return (
    <div>
      <header>
        <h1 style={{ color: "white" }}>Search Anyone By Name </h1>

        <Searchbox
          onChangeHandler={onsearchChange}
          placeholder="Search Here"
          className="search-box"
        />
        <Cardlist Robots={filterRobots} />
      </header>
    </div>
  );
};

export default App;
