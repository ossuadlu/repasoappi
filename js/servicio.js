  export async function consumirApi(URI,TOKEN){
     let parametros={
         method:"GET",
         headers:{Authorization:TOKEN}

     }
    let respuesta= await fetch(URI,parametros)
     let respuestaFinal=respuesta.json()
    return(respuestaFinal)
}