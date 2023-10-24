const d = document
(function load(){
    const formulario = d.getElementById('formUsuarios');
    const divElements = d.getElementById('divElements');
    const botonAgregar = d.getElementById('buttonAgregar');
    const botonGuardar =d.getElementById('buttonGuardar');

    botonAgregar.addEventListener('click',(event) =>{
        if(formulario.name.value != '' && formulario.lastname.value != '' ){

        }else{
            alert('Complete el formulario')
        }
    })
})