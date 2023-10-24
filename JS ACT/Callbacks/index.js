// const calcular=(a,b,op)=>{
//   console.log("Calculando...", typeof(op))
//   resultado = op(a,b);
//   console.log(resultado);
// }

// function resta(x,y){
//   return(x-y);
//  }
//  function multi(x,y){
//   return(x*y);
//  }
//  function divi(x,y){
//   return(x/y);
//  }
// calcular(4,5,()=>{return(5+4)});
// calcular(4,5,resta);
// calcular(4,5,multi);
// calcular(4,5,divi);



const doTask = (iterations, callback)=>{
    const numbers = [];
  
    for (let i = 0; i < iterations; i++) {
      const number = 1 + Math.floor(Math.random() * 6);
      console.log(number);
      numbers.push(number);
      if (number === 6) {
        callback({
          message: "Se ha sacado un 6", 
          error: true
        }, {
          tam: numbers.length,
          value: numbers});
        return;
      }
    }
  
    /* Termina bucle y no se ha sacado 6 */
    return callback(null, {
      tam: numbers.length,
      value: numbers
    });
  }

  doTask(5, function(err, result) {
    if (err) {
        console.error("Se considera error ", err.message);
        console.log(result.value);
        return;
    } else {
        console.log("Tiradas correctas: ", result.value);
    }
  });
