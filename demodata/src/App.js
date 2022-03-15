import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor(){
    super();

    this.state = {
      people: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) =>  response.json())
    .then((users) => this.setState(() => {
      return {people : users}
    },
    () => {
      console.log(this.state);

    }
    ));

  }

  render(){

    const filterpeople = this.state.people.filter((people) => {
      return people.name.toLocaleLowerCase().includes(this.state.searchField);
    });

    return (
      <div className="App">
        <header className="App-header">
          <input className='search-box' type='search' placeholder='Search people' 
          onChange={(event) => {
            console.log(event.target.value);
            const searchField = event.target.value.toLocaleLowerCase();

            

            this.setState(() => {

              return{searchField };
            })
            
          }}/>
          <h2> Random people Details</h2>
          {filterpeople.map((people) => {
            return(
              <div key={people.id}>
                <h3> {people.name}</h3>
              </div>
            )

          })}
        </header>
      </div>
    );
    }
}


export default App;
