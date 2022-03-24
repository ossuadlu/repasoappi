import {nombrePersona}from"./generadorNombre.js"
import {estatura}from "./generadorEstatura.js"
import {institucion}from "./generadorInstitucion.js"
import {TOKEN}from "./generadorToken.js"
import{generarURI}from"./generadorUri.js"
import {consumirApi} from "./servicio.js"
import {pintarCanciones}from "./pintar.js"
//traigo el token
//hacer una rutina para detectar el click en el boton del formulario
let boton=document.getElementById("boton")
boton.addEventListener("click",function(evento){
    evento.preventDefault()
    let frutaSeleccionada=document.getElementById("fruta").value
let URI=generarURI(frutaSeleccionada)

    async function activarApi(){
        let datosConsultadosApi= await consumirApi(URI,TOKEN)
        console.log(datosConsultadosApi)
        
        //llamar a pintar canciones
        pintarCanciones(datosConsultadosApi)
 
    }
    activarApi()
   
     
     
})  
