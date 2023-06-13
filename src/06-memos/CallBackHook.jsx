import { useCallback, useEffect, useState } from "react"
import { ShowIncrement } from "./ShowIncrement";


export const CallBackHook = () => {

    const [counter, setcounter] = useState(20); 
    
    const incrementFather = useCallback(
        (value) => {
            setcounter( (c) => c + value );
        }, 
        [],
    );

    useEffect(() => {
      //incrementFather();
    }, [incrementFather])
    

    
    //const incrementFather = () => {
    //    setcounter( counter + 1 );
    //}


    return (
        <>
            <h1>useCallback Hook: {counter} </h1>
            <hr />
        
            <ShowIncrement increment={ incrementFather }/>
        </>


    )
}
