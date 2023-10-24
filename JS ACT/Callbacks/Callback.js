/*Funcion Callback */

function sumNumber(num, callback){
    callback(num + 10);//Se ejecuta el parametro al momento de entrar el codigo a la funcion
}
sumNumber(25, function(value){
    console.log(`El restultado es: ${value}`)
});


//Aca la funcion esta aparte
function showResult(value){
    console.log(`El restultado es: ${value}`);
}; 
//El callback necesita una funcion para ejecutarse
sumNumber(30, showResult);