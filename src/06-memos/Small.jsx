import React from "react";
//import { memo } from "react";


{/*otra forma de exportar el memo es asi*/ }
export const Small = React.memo(({ value }) => {

    console.log('me volvi a dibujar')

    return (
        <small>{ value }</small>
  )
})
