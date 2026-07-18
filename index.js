
        // import valorPredeterminado from './prueba.js'

      const fragmento = document.createDocumentFragment()

        const btn_buscar=document.getElementById("btn_Buscador");

        let controles = document.getElementById('video_controles')
      // const contenedor = document.getElementById('form')
        let contenedorVIDEO=document.querySelectorAll("Content_video")

        const contenedor = document.getElementById('Contenedor_Principal')
      const content_VIDEO = document.querySelector(".ContenedorVIDEO")
      const btnBuscar = document.querySelector("#buscar")
    const sentinela = document.querySelector('.sentinel')


      import {conectionAPP} from "./data.js";

    let contador=0;
let pagina=0
    ////////////////////////////////


let  dataGLOBAL;
let resultado = conectionAPP("./apiVideo.json")
   resultado.then(data =>{
        
      dataGLOBAL=data
      cargarVideos(data,6)
    







            }
          )



 
  
  

          const cargarVideos=(data,num)=>{
    // console.log(elementall)
    // corregir lo de que si no   hay  mas videos de los que se le pasa por parametro a la funcion no ejecuta los ultimos videos




    // en pantalla
  let posterVIDEO;      
  let visitas_video;     
  let indentificador;     
  let indentificador_video;
  let Video;      
  let title;       



    for (let i=0; i<num; i++){

    // console.log(data[contador])

      if(data[contador] !== undefined){

            posterVIDEO =         data[contador].imagen
            visitas_video =       data[contador].view
            indentificador =      data[contador].id
            indentificador_video= data[contador].idVideo
            Video =               data[contador].video
            title=                data[contador].titulo

      fragmento.appendChild(crearVIDEO(
            posterVIDEO,
            title,
            visitas_video

              )) 

    }

                  
    contador++;
   
              }
          contenedor.appendChild(fragmento)








              }
        
   const cargarmasvideo=entries=>{
    if(entries[0].isIntersecting){
    cargarVideos(dataGLOBAL,3)
  
    }
      

        }





 const observer = new IntersectionObserver(cargarmasvideo);


  observer.observe(sentinela)



      const crearVIDEO=(Imagen,titulo,NombreCanal)=>{

    let cont=document.createElement('div')
    let imagen=document.createElement("img")
    let video=document.createElement('video')
      let  h4=document.createElement("h3")
    let  persona=document.createElement('p')

    cont.classList.add("Content_video","video")
    imagen.src=Imagen
    imagen.classList.add('element-video')
    video.classList.add("element-video",'oculto')
    h4.textContent=titulo;

    persona.textContent=NombreCanal;
    persona.classList.add("modificador_titulo")
    cont.append(imagen,video,h4,persona)

    return cont;

    }

   


    // buscador de videos

  
  // .addEventListener('click',alert('hola'))
// 
const mostrarVIDEO=(input_palabra)=>{


  // console.log(dataGLOBAL,input_palabra)
  for (let  i= 0;  i<dataGLOBAL.length; i++) {
 
  let titulos = dataGLOBAL[i].titulo
  let  posterVIDEO = dataGLOBAL[i].imagen
  //  titulos = dataGLOBAL[i].titulo
  //  visitas_video =       dataGLOBAL[i].view



  let  visitas_video =       dataGLOBAL[i].view
  let  indentificador =      dataGLOBAL[i].id
  let  indentificador_video= dataGLOBAL[i].idVideo
  let  Video =               dataGLOBAL[i].video
  let  palabraClave =  dataGLOBAL[i].clave

  
  let verfificacion=palabraClave.includes(input_palabra);

if(verfificacion){

contenedor.innerHTML="";
 
console.log(input_palabra)

console.log(titulos)

fragmento.appendChild(crearVIDEO(posterVIDEO,titulos))
contenedor.appendChild(fragmento)

// contenedor.appendChild(crearVIDEO(posterVIDEO,titulos))

   }
    
  }

















}






// //////////////////


// btnBuscar.addEventListener('click',(e)=>{
// const  input_palabra = document.querySelector('#entrada')

// e.preventDefault()

// if(input_palabra.value){
// mostrarVIDEO(input_palabra.value)
//  observer.unobserve(sentinela)

// }



// })





      // programaodr es todo el que entienda el lenguaje o la contrucion de un programa y lo puede adpatar a su manera no solo crear soluciones


        // no hay una sola forma de hacer las cosas hay una que es mas eficiente y que est actulizada
        // ejemplo  usar stlyle. vs usar classlist.add('.stlyle')


        // puedes programar como quieras lo importante es optimizar el codigo
        // consiste en hacer las cosas que consuman menos recursos redimiento y que no sean obsoletas 

        // hay propiedades que tienen su uso especifico  y que la uses aunque funciones en un lugar
        // se considera mala implementacion de herramienta


        // estoy construyendo la las mejores formas de trabajar con x funciones o cosas que quiera hacer 

        // que no sea obsoleta y que sean las recomendas por la comunidad de desarrollo

        // / para luego optimizar el codigo 
















    //  se hacen proyecto para estudiar  lo que no se   y ponerlo en practica 


    // conocer lo que exites y buscar eso es ser junior


    // los patrones de diseños son todos los problemas que tienen un forma unica de resolverse estandar



        
// hacer las cosas  y buscar  no importa  ya que estoy consolidando lo que se y no se 
// lo importante es que me puedo familiarizar con las ideas una persona que empieza no puede entender nada 
// aunque busque no sabria nada  de nada en cambio el que  hace el curso sabe donde colocar las cosa y recuerda algo 












// ir haciendo proyectos para saber si puedo  fluir haciendo  asi  es la forma de trabajar como programador
// y conociendo la forma de hacer proyectos  mediante otros proyectos ya creados  y integrar esos proyectos a  mis proyectos
// la idea es entender el codigo e integrando esas ideas    y saber cual es el proceso de creacion de una aplicacion 
// mediante la investigacion despues de conocer esos procesos  ya lo que quedaria es la investigacion de codigo y conceptos 
// que no se entiendan 


// la duda mas grande del que trabaja como programador freelancer es que no sabe cuando conseguira el dinero del mes 
