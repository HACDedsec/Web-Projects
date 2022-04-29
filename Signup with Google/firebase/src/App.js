import './App.css';
import {signInWithGoogle} from './Firebase'

function App() {
  return (
    <div className="App">
      <button onClick={signInWithGoogle}> Signup</button>
      <h1>{localStorage.getItem("name")}</h1>
      <h2>{localStorage.getItem("email")}</h2>
      <img  src={localStorage.getItem("profilePic") } alt=''/>
    </div>
  );
}

export default App;
