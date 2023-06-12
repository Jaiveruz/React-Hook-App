import { useCounter } from "../hook/useCounter";


export const CounterWhithCustomHook = () => {
  
    const { counter, increment, reset, decrement } = useCounter(); 

    return (
        <>
            {/* se desectrutura mejor como un objeto para que se pueda llamar de una mejor manera*/ }
            <h1>Counter whit Hokk: {counter} </h1>

            <button className="btn btn-primary" onClick={() => increment(2)}>+1</button>
            <button className="btn btn-primary" onClick={reset}>reset</button>
            <button className="btn btn-primary" onClick={() => decrement(2)}>-1</button>

        </>
    
  )
}

export default CounterWhithCustomHook
