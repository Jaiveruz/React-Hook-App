import { useCounter, useFetch } from "../hook";
import { LoadingQuotes, Quotes } from "../03-examples";



export const Layout = () => {
    
    const { counter, increment } = useCounter(1);
    const { data, isLoading, hasError } = useFetch( `https://api.breakingbadquotes.xyz/v1/quotes/${counter}`);
    const { author, quote } = !!data && data[0]; 
  
  
    return (
    <>

            <h1>BreakindBad Quotes</h1>
            <hr /> 
            {/* se crea un div con el proposito que aparezca solo si esta cargando, apoyandonos del isloading */}
            {/* cuando se abren las llaves quiere decir que ahi uno puede colocar codigo abierto  */}
            {/* se usa codigo ternario, osea if pero simplificado solo cuando son pocas lineas de codigo, para dar una mejor lectura del codigo  */}

          {/*  {
              isLoading 
                    ? (
                      <div className="alert alert-info text center"> 
                          Loading...
                      </div>
                    )
                    : (
                      <blockquote className="blockquote text-right">
                          <p className="mb-1"> { quote }</p>
                          <footer className="blockquote-footer">{ author } </footer>
                      </blockquote>
                    )
            } */}


            {
              isLoading 
              ? <LoadingQuotes/>
              : <Quotes author={ author } quote={ quote }/>
            }

            <button 
              className="btn btn-primary"
              disabled= { isLoading } 
              onClick={ () => increment() }>
              Next quote
            </button>
            
    </>
            
  )
}
