import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    return(
        <div>
            <p>How manny times would you like to go?</p>
            <p>{count}</p>
            <button onClick={() => setCount(count => count + 1)}>Add</button>
            <button onClick={() => setCount(count => count - 1)}>Subtract</button>
        </div>
    )
}

export default Counter;