(function(){
    let lista = document.getElementById("lista");
    console.log(lista)

    let tareaInput= document.getElementById("tareaInput");
    console.log(tareaInput);

    let boton= document.getElementById("btn-agregar");

     
       //  funciones

     let agregarTarea = function(){
           let tareaInput= document.getElementById("tareaInput");
             console.log(tareaInput);
             tarea = tareaInput.value,
            
             nuevaTarea = document.createElement("li"),
             enlace = document.createElement("a"),
             contenido = document.createTextNode(tarea);
             
             
             if (tarea === "") {
                 tareaInput.setAttribute("placeholder" , "agregar tarea valida")
                 tareaInput.className= "error";
                 return false;
                 
             }

             enlace.appendChild(contenido);
             enlace.setAttribute("href" , "#");
             nuevaTarea.appendChild(enlace);
             lista.appendChild(nuevaTarea);

             tareaInput.value = "";

             for (let i = 0; i <= lista.children.length -1 ; i++) {
                 lista.children[i].addEventListener("click" , function(){
                     this.parentNode.removeChild(this);

                 })
             }
                 
     };

     let comprobarInput = function(){}
             tareaInput.className = "";
             tareaInput.setAttribute("placeholder" , "agrega tu tarea");

     let eliminarTarea = function(){
        this.parentNode.removeChild(this)};


   // eventos
    boton.addEventListener("click" , agregarTarea)

    tareaInput = addEventListener("click" , comprobarInput)

    for (let i = 0; i <= lista.children.length -1; i++) {
        lista.children[i].addEventListener("click" , eliminarTarea);
     }
     
     

} ())
