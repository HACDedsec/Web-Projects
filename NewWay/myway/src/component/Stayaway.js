import { useState } from "react";

function Stayaway(props) {

    let [content, setString] = useState('Its Stayaway....');

    let newdata2 = props.data;
    const appClickHandle = () => {

        setString(props.data);
    }

    return (
        <>
            <h2>{content}</h2>
            <button onClick={appClickHandle} >Click me 2</button>
        </>
    )
}
export default Stayaway;
