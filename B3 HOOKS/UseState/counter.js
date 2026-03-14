import { useState } from "react";

function App(){
    const [counter, setCounter] = useState(0);

    const handleIncrease = () => {
        setCounter(counter + 1);
    }

    return(
        <div className="App">
            <h1>Counter: {counter}</h1>
            <button onClick={handleIncrease}>
                Increase
            </button>
        </div>

    );
}
export default App;