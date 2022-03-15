import { Component } from "react";
import Cardlist from "./components/Card-list/Card-list";
import "./App.css";
import Searchbox from "./components/Search-box/Search-box";

class App extends Component {
  constructor() {
    super();

    this.state = {
      people: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return { people: users };
        })
      );
  }

  onsearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    const { people, searchField } = this.state;
    const { onsearchChange } = this;

    const filterpeople = this.state.people.filter((people) => {
      return people.name.toLocaleLowerCase().includes(this.state.searchField);
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
          <Cardlist people={filterpeople} />
        </header>
      </div>
    );
  }
}

export default App;
