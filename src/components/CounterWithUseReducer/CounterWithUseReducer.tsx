import { useReducer } from "react";

type State = { count: number}
type Action = { type: "increment" | "decrement" | "reset"}

const reducer = (state: State, action: Action): State => {

    switch (action.type) {
        case "increment":
            return { count : state.count + 1 };
        case "decrement":
            return { count: state.count -1 };
        case "reset":
            return { count: 0 }
        default:
            return state;
    }
}

const CounterWithUseReact = () => {
    const [state, dispatch] = useReducer(reducer, { count:0 });

    return (
        <div className="w-[100%] border-solid border-white-300 border-1 rounded-xl my-[50px] py-[10px]">
            <h1>Counter using useReducer</h1>
            <p className="mt-[10px]">Counter: {state.count}</p>
            <div className="flex justify-center gap-[10px] my-[20px]">
                <button onClick={() => dispatch({type: "increment"}) }>Count up</button>
                <button onClick={() => dispatch({type: "decrement"}) }>Count down</button>
                <button onClick={() => dispatch({type: "reset"}) }>Reset</button>
            </div>
        </div>
    )
}

export default CounterWithUseReact;