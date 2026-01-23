import { useEffect, useState } from "react";

const CounterWithEffect = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(`Counter has changed to: ${count}`) //using template literals to
    }, [count])

    return(
        <div>
        <p>Secondary effect (check the console!)</p>
            <p>{count}</p>
            <button onClick={() => setCount(count => count + 1)}>Add</button>
        </div>
    )
}

/*Analogy to distinguish useEffect from useState

React is a smart house, useState is like the light switches,thermostate and controls
that help with turning on the lights, making the house warmer or cooler, and opening
one or more doors. The internal state of the house changes and is clearly visible.

useEffect, is the automatic system that reacts after something.  If you open a window,
the aircon turns off. If there's no movement for 30mins, the lights turn off.
The smoke detector turns on, then call 000. Nothing visual really changes, but something
happens.*/

export default CounterWithEffect;