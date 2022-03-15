import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "HAC",
      company: "Mobmaxime",
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>
            I am {this.state.name} I work at {this.state.company}
          </h1>
          <button
            onClick={() => {
              this.setState(
                () => {
                  return {
                    name: "Dedsec",
                  };
                },
                () => {
                  console.log(this.state);
                }
              );
            }}
          > 
            Chnage Text
          </button>
          
        </header>
      </div>
    );
  }
}

export default App;
