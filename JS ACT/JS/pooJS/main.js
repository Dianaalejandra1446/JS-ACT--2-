class Estudiante
{
    constructor(codigo, nombre,carrera)
    {
        this.codigo = codigo;
        this.nombre = nombre;
        this.carrera = carrera;
    }
};
class Estudiantes
{
    constructor()
    {
        this.estudiantes = []
    }

    addEstudiante(newEstudiante)
    {
        this.estudiantes.push(newEstudiante)
    }
    removeEstudiante(index)
    {
        this.estudiantes.splice(index, 1);
    }

    getEstudiantes()
    {
        return this.estudiantes;
    }

}

const claseEstudiates = new Estudiantes();

claseEstudiates.addEstudiante(new Estudiante("01","Jaimito","Derecho"));
claseEstudiates.addEstudiante(new Estudiante("02","Pedro","Derecho"));

console.log(claseEstudiates);
const $contenido = document.getElementById('contenido');

var getEstudiantes = claseEstudiates.getEstudiantes();

getEstudiantes.forEach((est) => {
    
    const {codigo, nombre, carrera} = est;
    
    var html = `<p>Nombre: ${nombre}</p>
    <p>Codigo: ${codigo}</p>
    <p>Carrera: ${carrera}</p>`;

    $contenido.insertAdjacentHTML('beforeend',html)

});

console.log(claseEstudiates.value);

class Estudiante2 {
    constructor(nombre,codigo,carrera){
        this.nombre = nombre;
        this.codigo = codigo;
        this.carrera = carrera;
    }
}
class Estudiantes2 {
    constructor(){
        this.estudiantes = [];
    }
    agregar(newEstudiante){
        this.estudiantes.push(newEstudiante);
    }
    editar(newEstudiante,index){
        this.estudiantes.splice(index,1,newEstudiante)
    }
    eliminar(index){
        this.estudiantes.splice(index,1)
    }
    mostrar(){
        return this.estudiantes;
    }
}
