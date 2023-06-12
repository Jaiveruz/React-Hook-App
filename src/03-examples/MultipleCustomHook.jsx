import { useFetch } from "../hook/useFetch";

export const MultipleCustomHook = () => {
    
    const { data, isLoading, hasError } = useFetch('https://api.breakingbadquotes.xyz/v1/quotes');
  
  
  
    return (
    <>

            <h1>BreakindBad Quotes</h1>
            <hr />   
    </>
            
  )
}
