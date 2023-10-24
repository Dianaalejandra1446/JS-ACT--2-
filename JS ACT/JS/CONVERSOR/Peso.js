const d = document;
const SelectWeigth = d.getElementById('SelectWeigth1');
const SelectWeigth2 = d.getElementById('SelectWeigth2');
let resultado = d.getElementById('resultPeso');

export function addWeigth()
{
    let valorPeso = d.getElementById('valorPeso').value;
    if(SelectWeigth.value == SelectWeigth2.value){
        alert('No se pueden calcular con la misma unidad');
        return;
    }
    if(valorPeso == ''){
        alert('Ingrese un numero')      
        return;
    }
    if ((SelectWeigth.value == "0") && (SelectWeigth2.value == "1")) {
        let result1 = (valorPeso *  2.20462);
        resultado.innerHTML = '';
        resultado.innerHTML += `<p>${valorPeso}Kg = ${result1}Lbs</p>
        <p class="resultWeigth1">El valor ${valorPeso} Kg (Kilogramos) a Lb (Libras) es = ${result1} Lbs</p>`;
    }

    if((SelectWeigth.value == "0") && (SelectWeigth2.value == "2")){
        let result2 = (valorPeso * 35.274)
        resultado.innerHTML = '';
        resultado.innerHTML += `<p>${valorPeso}Kg = ${result2}Oz</p>
        <p class="resultWeigth1">El valor ${valorPeso} Kg (Kilogramos) a Oz (Onzas) es = ${result2} Oz</p>`;
    }
    if((SelectWeigth.value == "0") && (SelectWeigth2.value == "3")){
        let result3 = (valorPeso / 12.5);
        resultado.innerHTML = '';
        resultado.innerHTML += `<p>${valorPeso}Kg = ${result3}Arroba</p>
        <p class="resultWeigth1">El valor ${valorPeso} Kg (Kilogramo) a (Arroba) es = ${result3} Arroba</p>`;
    }
    if((SelectWeigth.value == "1") && (SelectWeigth2.value == "0")){
        let result01 = (valorPeso * 0.45359237)
        resultado.innerHTML = '';
        resultado.innerHTML += `<p>${valorPeso}Lb = ${result01}Kg</p>
        <p class="resultWeigth1">El valor ${valorPeso} Lb (Libras) a Kg (Kilogramos) es = ${result01} Lbs</p>`;
    }
    if((SelectWeigth.value == "1") && (SelectWeigth2.value == "2")){
        let result0102 = (valorPeso * 16)
        resultado.innerHTML = '';
        resultado.innerHTML += `<p>${valorPeso}Lb = ${result0102}Oz</p>
        <p class="resultWeigth1">El valor ${valorPeso} Lb (Libras) a Oz (Onza) es = ${result0102} Oz</p>`;
    }
    if((SelectWeigth.value == "1") && (SelectWeigth2.value == "3")){
        let result0103 = (valorPeso *  0.028 )
        resultado.innerHTML = '';
        resultado.innerHTML += `<p>${valorPeso}Lb = ${result0103}Arroba</p>
        <p class="resultWeigth1">El valor ${valorPeso} Lb (Libras) a  @(Arrobas) es = ${result0103} @</p>`;
    }

        if((SelectWeigth.value == "2") && (SelectWeigth2.value == "0")){
        let result02 = (valorPeso / 35.274);
        resultado.innerHTML = '';
        resultado.innerHTML += `<p>${valorPeso}Oz = ${result02}Kg</p>
        <p class="resultWeigth1">El valor ${valorPeso} Oz (Onza) a Kg (Kilogramos) es = ${result02} Oz</p>`;
    }
    if((SelectWeigth.value == "2") && (SelectWeigth2.value == "1")){
        let result0201 = (valorPeso / 16);
        resultado.innerHTML = '';
        resultado.innerHTML += `<p>${valorPeso}Oz = ${result0201}Lb</p>
        <p class="resultWeigth1">El valor ${valorPeso} Oz (Onza) a Lb (Libra) es = ${result0201} Lb</p>`;
    }
    if((SelectWeigth.value == "2") && (SelectWeigth2.value == "3")){
        let result02 = ((valorPeso / 16) / 25);
        resultado.innerHTML = '';
        resultado.innerHTML += `<p>${valorPeso}Oz = ${result02}@</p>
        <p class="resultWeigth1">El valor ${valorPeso} Oz (Onza) a @ (arroba) es = ${result02} @</p>`;
    }

    if((SelectWeigth.value == "3") && (SelectWeigth2.value == "0")){
        let result03 = (valorPeso * 12.5)
        resultado.innerHTML = '';
        resultado.innerHTML += `<p>${valorPeso}@ = ${result03}Kg</p>
        <p class="resultWeigth1">El valor ${valorPeso} @(Arroba) a Kg (Kilogramos) es = ${result03} Kg</p>`;
    }
    if((SelectWeigth.value == "3") && (SelectWeigth2.value == "1")){
        let result0301 = (valorPeso *  11.50225);
        resultado.innerHTML = '';
        resultado.innerHTML += `<p>${valorPeso}@ = ${result0301}Lb</p>
        <p class="resultWeigth1">El valor ${valorPeso} @(Arroba) a Lb (Libras) es = ${result0301} Lb</p>`;
    }
    if((SelectWeigth.value == "3") && (SelectWeigth2.value == "2")){
        let result03 = (valorPeso * 25.360517 );
        resultado.innerHTML = '';
        resultado.innerHTML += `<p>${valorPeso}@ = ${result03}Oz</p>
        <p class="resultWeigth1">El valor ${valorPeso} (Arroba) a Oz (Onza) es = ${result03} Oz</p>`;
    }

}

