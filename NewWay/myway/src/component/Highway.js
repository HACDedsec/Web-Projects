import {useState} from 'react';

function Highway(props) {
    let [string, setString] = useState('Its HIghway....');

    console.log(string);
    let newdata = props.data;
    const appClickHandler = () => {

        setString(props.data);
    }
    const clickHeandler = () => {
      
        setString("stay away from me");
       console.log('value changed to: ' + string);
    }

    

    return (
        <>
        <h1> {string} </h1>
        <button onClick={clickHeandler} >Click me</button>
        <button onClick={appClickHandler}> click me for change data using prop</button>
        </>

    )
}

export default Highway;
