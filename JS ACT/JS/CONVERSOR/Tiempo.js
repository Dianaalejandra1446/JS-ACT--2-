const d=document;

const SelectTime1 = d.getElementById('selectTime1');
const SelecTime2 = d.getElementById('selectTime2');
const resultado1= d.getElementById('resultado-time');

export function addTime(){
    let valorTime = d.getElementById('valorTime').value;
    if(SelectTime1.value == SelecTime2.value){
        alert('No se pueden calcular con la misma unidad');
        return;
    }
    if(valorTime == ''){
        alert('Ingrese un numero')      
        return;
    }

    resultado1.innerHTML='';
    //Convertir Segundos
    if((SelectTime1.value == "0")&&(SelecTime2.value == "1")){
        let SegToMin = (valorTime / 60)
        resultado1.innerHTML += `<p>${valorTime} Seg = ${SegToMin} Min</p> 
        <p>El valor ${valorTime} Sg (Segundos) a Min(Minutos) es = ${SegToMin}</p>`
    }
    if((SelectTime1.value == "0")&&(SelecTime2.value == "2")){
        let SegToHour = (valorTime / 3600)
        resultado1.innerHTML += `<p>${valorTime} Seg = ${SegToHour} Hr</p> 
        <p>El valor ${valorTime}Sg (Segundos) a Hr(Horas) es = ${SegToHour}</p>`
    }
    //Convertir Minutos
    if((SelectTime1.value == "1")&&(SelecTime2.value == "0")){
        let MinToSeg = (valorTime * 60)
        resultado1.innerHTML += `<p>${valorTime} Min = ${MinToSeg} Seg</p> 
        <p>El valor ${valorTime}Min (Minutos) a Seg(Segundos) es = ${MinToSeg}</p>`
    }
    if((SelectTime1.value == "1")&&(SelecTime2.value == "2")){
        let MinToHour = (valorTime / 60); 
        resultado1.innerHTML += `<p>${valorTime} Min = ${MinToHour}Hr</p> 
        <p>El valor ${valorTime}Min (Minutos) a Hr(Horas) es = ${MinToHour}</p>`
    }
    //Convertit Horas
    if((SelectTime1.value == "2")&&(SelecTime2.value == "0")){
        let HourToSeg = (valorTime * 3600);
        resultado1.innerHTML += `<p>${valorTime}Hr = ${HourToSeg} Min</p>
        <p>El valor ${valorTime} Hr (Horas) a Seg(Segundos) es = ${HourToSeg}</p>`
    }
    if((SelectTime1.value == "2")&&(SelecTime2.value == "1")){
        let HourToMin = (valorTime* 60);
        resultado1.innerHTML += `<p>${valorTime}Hr = ${HourToMin} Min</p> 
        <p>El valor ${valorTime}Hr (Horas) a Min(Minutos) es = ${HourToMin}</p>`
    }
}

