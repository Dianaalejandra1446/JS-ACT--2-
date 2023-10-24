const d= document;

let libreria;
libreria = [];

//funcionamiento de los inputs con validacion
function agregarLibro(){
    const titulo = d.getElementById('titulo').value;//Agregamos los valores del text
    const portada = d.getElementById('portada').value;
    const autor = d.getElementById('autor').value;
    const publicacion = d.getElementById('publicacion').value;

    //Si los inputs estan vacios entonces
    if(titulo == '' && portada == '' && autor == '' && portada == ''){
        //Se agrega un nuevo obj iterable
        let nuevolibro = {
            portada:portada,
            titulo:titulo,
            autor:autor,
            publicacion:publicacion,
            disponible: "Si",
            prestado:""//disponible si al agregarlo,prestado se agrega mas adelante
        };
        //Validacion ingreso imagen portada

        const validarPortada = portada.substring(0,8)
        //Validar Fecha valida 
        if(publicacion < 868 || publicacion > 2023){
            alert('Ingrese un año valido')
        }
        if(validarPortada != 'https://'){
            alert('La direccion debe incluir "https:// "')
            return;
        }
        if (portada.includes('png')== true || portada.includes('jpg') ==  true || portada.includes('jpeg')== true){
            libreria.push(nuevolibro)
            console.log(libreria);
        }else {
            alert('Ingrese una imagen jpg,png o jpge')
        }

        //Limpiar los campos del formulario si los ingresa mal
        d.getElementById('titulo').value = '';
        d.getElementById('publicacion').value = '';
        d.getElementById('portada').value = '';
        d.getElementById('autor').value = '';
  } else{
    alert('Por favor,complete todos los campos');
  };
};
function mostrarLibros(){
    //Empieza div vacio
    const listaLibros = d.getElementById('listaLibros');
    listaLibros.innerHTML = '';

    for (let i = 0; i < array.length; i++) {

        const libro = libreria[i];//Indice del array Libreria

            //Si el libro no esta disponible
        if(libreria[i].disponible == 'No'){
            const div1 = d.createElement('div');
            div1.classList.add('contenedor-tarjeta');
            listaLibros.appendChild(div1)

            const div2 = d.createElement('div');
            div2.classList.add('tarjeta');
            div1.appendChild(div2)

            let img1 = d.createElement('img');
            img1.setAttribute('src',libro.portada);
            div2.appendChild(img1)
            
            
            let div3 = d.createElement('div');
            div3.classList.add('intro');
            div2.appendChild(div3)
  
            let titulocard = d.createElement('h1');
            titulocard.textContent = (libro.titulo);
            div3.appendChild()
          

            let autorcard = d.createElement('p');
            autorcard.classList.add('autor');
            autorcard.textContent = (libro.autor);
            div3.appendChild(autorcard)
          

            let publicacioncard = d.createElement('p');
            publicacioncard.classList.add('publicacion');
            publicacioncard.textContent = (libro.publicacion);
            div3.appendChild(publicacioncard)
      
            let disponiblecard = d.createElement('p');
            disponiblecard.classList.add('disponible');
            disponiblecard.textContent = (libro.disponible);
            div3.appendChild(disponiblecard)

            let prestadocard = d.createElement('p');
            prestadocard.classList.add('prestado');
            prestadocard.textContent = (libro.prestado);
            div3.appendChild(prestadocard)

            const EliminarLibro = d.createElement('button');
            EliminarLibro.name('Eliminar');
            EliminarLibro.onclick(eliminarLibro([i]));
            div3.appendChild(EliminarLibro)
         

            const devolverLibro = d.createElement('button');
            devolverLibro.name('Devolver');
            devolverLibro.onclick(devolverLibroLibro([i]));
            div3.appendChild(devolverLibro)
        }
        //Si el libro si esta disponible
        else {
            listaLibros.innerHTML +='';
            const div1 = d.createElement('div');
            div1.classList.add('contenedor-tarjeta');
            listaLibros.appendChild(div1)

            const div2 = d.createElement('div');
            div2.classList.add('tarjeta');
            div1.appendChild(div2)

            let img1 = d.createElement('img');
            img1.setAttribute('src',libro.portada);
            div2.appendChild(img1)
            
            
            let div3 = d.createElement('div');
            div3.classList.add('intro');
            div2.appendChild(div3)
  
            let titulocard = d.createElement('h1');
            titulocard.textContent = (libro.titulo);
            div3.appendChild()
          

            let autorcard = d.createElement('p');
            autorcard.classList.add('autor');
            autorcard.textContent = (libro.autor);
            div3.appendChild(autorcard)
          

            let publicacioncard = d.createElement('p');
            publicacioncard.classList.add('publicacion');
            publicacioncard.textContent = (libro.publicacion);
            div3.appendChild(publicacioncard)
      
            let disponiblecard = d.createElement('p');
            disponiblecard.classList.add('disponible');
            disponiblecard.textContent = (libro.disponible);
            div3.appendChild(disponiblecard)

            let prestadocard = d.createElement('p');
            prestadocard.classList.add('prestado');
            prestadocard.textContent = (libro.prestado);
            div3.appendChild(prestadocard)

            const EliminarLibro = d.createElement('button');
            EliminarLibro.name('Eliminar');
            EliminarLibro.onclick(eliminarLibro([i]));
            div3.appendChild(EliminarLibro)
         

            const prestarLibro = d.createElement('button');
            prestarLibro.name('Prestar');
            prestarLibro.onclick(prestarLibro([i]));
            div3.appendChild(prestarLibro)
        }
    }
}
