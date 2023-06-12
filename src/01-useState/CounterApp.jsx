import { useState } from "react"


export const CounterApp = () => {
  
        const [state, setCounter] = useState({
            counter1: 10,
            counter2: 20,
            counter3: 30
        })
    
        const { counter1,  counter2, counter3 } = state;
        
    return (
            <>
                <h1> Counter1: { counter1 } </h1>
                <h1> Counter2: { counter2 } </h1>
                <h1> Counter3: { counter3 } </h1>

                <hr/>
                    {/* cuando usamos el setcounter lo que le estamos diciendo es, que estamos cambiando de nuevo el estado de los objetos nuevamente*/} 
                    {/*otra manera de hacer un cambio del estado es de esta forma, pero la sintaxis es un poco mas larga
                    <button 
                    className="btn" 
                    onClick={
                        () => setCounter({
                                counter1: counter1 + 1, 
                                counter2: counter2, 
                                counter3: counter3}
                            )}
                        >+1</button> */}
                {/* esta forma se le conoce como el metodo spred, que hace que con los tres pts vuelva a llamar a los 3 counter*/ }
                <button 
                    className="btn" 
                    onClick={
                        () => setCounter({
                                ...state, 
                                counter1: counter1 + 1,
                            })}
                >+1</button>
                

            </>
            )
        }
export default CounterApp

