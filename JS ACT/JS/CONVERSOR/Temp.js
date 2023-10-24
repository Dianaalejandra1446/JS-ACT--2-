const d=document;
const SelectTemp1 = d.getElementById('SelectTemp1');
const SelectTemp2 = d.getElementById('SelectTemp2');
const resultado2 = d.getElementById('resultTemp');

export function addTemp(){
    let valorTemp = d.getElementById('valorTemp').value;
    if(SelectTemp1.value == SelectTemp2.value){
        alert('No se pueden calcular con la misma unidad');
        return;
    }
    if(valorTemp == ''){
        alert('Ingrese un numero')      
        return;
    }
    //Convertit K
    if((SelectTemp1.value == "0")&& (SelectTemp2.value == "1")){
        let KtoC = (valorTemp - 273.15);
        resultado2.innerHTML = '';
        resultado2.innerHTML += `<p>${valorTemp}°K = ${KtoC}°C</p>
        <p class="resultWeigth1">El valor ${valorTemp} °K (Kelvin) a °C (Celsius) es = ${KtoC} °C</p>`;
    }
    if((SelectTemp1.value == "0")&& (SelectTemp2.value == "2")){
        let KtoF = ((valorTemp - 273.15) * 9/5 + 32);
        resultado2.innerHTML = '';
        resultado2.innerHTML += `<p>${valorTemp}°K = ${KtoF}°F</p>
        <p class="resultWeigth1">El valor ${valorTemp} °K (Kelvin) a °F (Fahrenheit) es = ${KtoF} °F</p>`
    }
    //Convertir C
    if((SelectTemp1.value == "1")&& (SelectTemp2.value == "0")){
        let CtoK = (valorTemp + 273.15);
        resultado2.innerHTML = '';
        resultado2.innerHTML += `<p>${valorTemp}°C = ${CtoK}°K</p>
        <p class="resultWeigth1">El valor ${valorTemp} °C (Celsius) a °K (Kelvin) es = ${CtoK} °K</p>`
    }
    if((SelectTemp1.value == "1")&& (SelectTemp2.value == "2")){
        let CtoF = ((valorTemp * 9/5) + 32);
        resultado2.innerHTML = '';
        resultado2.innerHTML += `<p>${valorTemp}°C = ${CtoF}°F</p>
        <p class="resultWeigth1">El valor ${valorTemp} °C (Celsius) a °F (Fahrenheit) es = ${CtoF} °F</p>`
    }
    //Convertir F
    if((SelectTemp1.value == "2")&& (SelectTemp2.value == "0")){
        let FtoK = (valorTemp + 459.67) * 5/9;
        resultado2.innerHTML = '';
        resultado2.innerHTML += `<p>${valorTemp}°F = ${FtoK}°K</p>
        <p class="resultWeigth1">El valor ${valorTemp} °F (Fahrenheit) a °K (Kelvin) es = ${FtoK} °F</p>`
    }
    if((SelectTemp1.value == "2")&& (SelectTemp2.value == "1")){
        let FtoC = (valorTemp - 32) * 5/9;
        resultado2.innerHTML = '';
        resultado2.innerHTML += `<p>${valorTemp}°F = ${FtoC}°C</p>
        <p class="resultWeigth1">El valor ${valorTemp} °F (Fahrenheit) a °C (Celsius) es = ${FtoC} °F</p>`
    }
}