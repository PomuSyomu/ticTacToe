import { useState } from "react";
import "./style.scss";
import Board from "./components/Board.jsx";

function App() {
    const [counter,setCounter]=useState(1);
    const onBtnClick = (event) => {
        console.log("Hello", event);
        setCounter((currentCounter)=>{
			return currentCounter+1;
		});
    };

    return (
        <div className="app">
            <div>
                <button onClick={onBtnClick}>Click me please</button>
				<p>{counter}</p>
            </div>
        </div>
    );
}

export default App;
