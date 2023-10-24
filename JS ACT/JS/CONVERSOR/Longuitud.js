const d=document;
const SelectLong1 = d.getElementById('SelectLong1');
const SelectLong2 = d.getElementById('SelectLong2');
const resultLong = d.getElementById('resultLong');

export function addLong() {
    let valorLong = d.getElementById('valorLong').value;
    //Convertir Metross
    if(SelectLong1.value == SelectLong2.value){
        alert('No se pueden calcular con la misma unidad');
        return;
    }
    if(valorLong == ''){
        alert('Ingrese un numero')      
        return;
    }
    if((SelectLong1.value == "0")&&(SelectLong2.value == "1")){
        let MtoKm = (valorLong / 1000)
        resultLong.innerHTML = '';
        resultLong.innerHTML += `<p>${valorLong}m = ${MtoKm}Km</p>
        <p>El valor = ${valorLong} M (Metros) a Km (Kilometros) es = ${MtoKm}</p>`
    }
    if((SelectLong1.value == "0")&&(SelectLong2.value == "2")){
        let MtoMilla = (valorLong / 1609);
        resultLong.innerHTML = '';
        resultLong.innerHTML += `<p>${valorLong}m = ${MtoMilla}Mi</p>
        <p>El valor = ${valorLong} M (Metros) a Mi (Millas) es = ${MtoMilla}</p>`
    }
    if((SelectLong1.value == "0")&&(SelectLong2.value == "3")){
        let MtoYarda = (valorLong *1.094);
        resultLong.innerHTML = '';
        resultLong.innerHTML += `<p>${valorLong}m = ${MtoYarda}Yd</p>
        <p>El valor = ${valorLong} M (Metros) a Yd (Yardas) es = ${MtoYarda}</p>`
    }
    if((SelectLong1.value == "0")&&(SelectLong2.value == "4")){
        let MtoCodo = (valorLong * 2.247191011);
        resultLong.innerHTML = '';
        resultLong.innerHTML += `<p>${valorLong}m = ${MtoCodo}Cd</p>
        <p>El valor = ${valorLong} M (Metros) a Cd (Codos) es = ${MtoCodo}</p>`
    }

    //Convertir km
    if((SelectLong1.value == "1")&&(SelectLong2.value == "0")){
        let KmtoM = (valorLong * 1000);
        resultLong.innerHTML = '';
        resultLong.innerHTML += `<p>${valorLong}Km = ${KmtoM}M</p>
        <p>El valor = ${valorLong} Km (Kilometros) a M (Metros) es = ${KmtoM}</p>`
    }
    if((SelectLong1.value == "1")&&(SelectLong2.value == "2")){
        let KmtoMillas = (valorLong / 1.609);
        resultLong.innerHTML = '';
        resultLong.innerHTML += `<p>${valorLong}Km = ${KmtoMillas}Mi</p>
        <p>El valor = ${valorLong} Km (Kilometros) a Mi (Millas) es = ${KmtoMillas}</p>`
    }
    if((SelectLong1.value == "1")&&(SelectLong2.value == "3")){
        let KmtoYarda = (valorLong / 1094);
        resultLong.innerHTML = '';
        resultLong.innerHTML += `<p>${valorLong}m = ${KmtoYarda}Yd</p>
        <p>El valor = ${valorLong} Km (Kilometros) a Yd(Yardas) es = ${KmtoYarda}</p>`
    }
    if((SelectLong1.value == "1")&&(SelectLong2.value == "4")){
        let KmtoCodo = (valorLong * 2247.191011 );
        resultLong.innerHTML = '';
        resultLong.innerHTML += `<p>${valorLong}m = ${KmtoCodo}Cd</p>
        <p>El valor = ${valorLong} Km (Kilometros) a Cd (Codos) es = ${KmtoCodo}</p>`
    }
    //Convertir millas
    if((SelectLong1.value == "2")&&(SelectLong2.value == "0")){
        let MillatoM = (valorLong *1609.34);
        resultLong.innerHTML = '';
        resultLong.innerHTML += `<p>${valorLong}Mi = ${MillatoM}M</p>
        <p>El valor = ${valorLong} Mi (Millas) a M (Metros) es = ${MillatoM}</p>`
    }
    if((SelectLong1.value == "2")&&(SelectLong2.value == "1")){
        let MillatoKm = (valorLong / 0.62137);
        resultLong.innerHTML = '';
        resultLong.innerHTML += `<p>${valorLong}Mi = ${MillatoKm}Km</p>
        <p>El valor = ${valorLong} Mi (Millas) a Km (Kilometros) es = ${MillatoKm}</p>`
    }
    if((SelectLong1.value == "2")&&(SelectLong2.value == "3")){
        let MillatoYarda = (valorLong * 1760);
        resultLong.innerHTML = '';
        resultLong.innerHTML += `<p>${valorLong}Mi = ${MillatoYarda}Yd</p>
        <p>El valor = ${valorLong} Mi (Millas) a Yd (Yardas) es = ${MillatoYarda}</p>`
    }
    if((SelectLong1.value == "2")&&(SelectLong2.value == "4")){
        let MillatoYarda = (valorLong * 2188.89);
        resultLong.innerHTML = '';
        resultLong.innerHTML += `<p>${valorLong}Mi = ${MillatoYarda}Cd</p>
        <p>El valor = ${valorLong} Mi (Millas) a Cd (Codos) es = ${MillatoYarda}</p>`
    }

    //Convertir Yardas
    if((SelectLong1.value == "3")&&(SelectLong2.value == "0")){
        let YardatoM = (valorLong * 0.9144);
        resultLong.innerHTML = ''; 
        resultLong.innerHTML += `<p>${valorLong}Yd = ${YardatoM}M</p>
        <p>El valor = ${valorLong} Yd (Yarda) a M es = ${YardatoM}</p>`
    }
    if((SelectLong1.value == "3")&&(SelectLong2.value == "1")){
        let YardatoKm = (valorLong / 1093.61);
        resultLong.innerHTML = ''; 
        resultLong.innerHTML += `<p>${valorLong}Yd = ${YardatoKm}Km</p>
        <p>El valor = ${valorLong} Yd (Yarda) a Km (Kilometro) es = ${YardatoKm}</p>`
    }
    if((SelectLong1.value == "3")&&(SelectLong2.value == "2")){
        let YardatoMilla = (valorLong / 1760);
        resultLong.innerHTML = ''; 
        resultLong.innerHTML += `<p>${valorLong}Yd = ${YardatoMilla}Mi</p>
        <p>El valor = ${valorLong} Yd (Yarda) a Mi (Millas) es = ${YardatoMilla}</p>`
    }
    if((SelectLong1.value == "3")&&(SelectLong2.value == "4")){
        let YardatoCodo = (valorLong * 2.7272727272727);
        resultLong.innerHTML = ''; 
        resultLong.innerHTML += `<p>${valorLong}Yd = ${YardatoCodo}Cd</p>
        <p>El valor = ${valorLong} Yd (Yarda) a Cd (Codo) es = ${YardatoCodo}</p>`
    }


    //Convertir Codo

    if((SelectLong1.value == "4")&&(SelectLong2.value == "0")){
        let CodotoM = (valorLong);
        resultLong.innerHTML = ''; 
        resultLong.innerHTML += `<p>${valorLong}Cd = ${CodotoM}M</p>
        <p>El valor = ${valorLong} Cd (Codo) a M (Metro) es = ${CodotoM}</p>`;
    }
    if((SelectLong1.value == "4")&&(SelectLong2.value == "1")){
        let CodotoKm = (valorLong);
        resultLong.innerHTML = ''; 
        resultLong.innerHTML += `<p>${valorLong}Cd = ${CodotoKm}Km</p>
        <p>El valor = ${valorLong} Cd (Codo) a Km (Kilometro) es = ${CodotoKm}</p>`;
    }
    if((SelectLong1.value == "4")&&(SelectLong2.value == "2")){
        let CodotoMilla = (valorLong);
        resultLong.innerHTML = ''; 
        resultLong.innerHTML += `<p>${valorLong}Cd = ${CodotoMilla}Mi</p>
        <p>El valor = ${valorLong} Cd (Codo) a Mi (Millas) es = ${CodotoMilla}</p>`;
    }
    if((SelectLong1.value == "4")&&(SelectLong2.value == "3")){
        let CodotoYarda = (valorLong);
        resultLong.innerHTML = ''; 
        resultLong.innerHTML += `<p>${valorLong}Cd = ${CodotoYarda}Cd</p>
        <p>El valor = ${valorLong} Cd (Codo) a Yd (Yarda) es = ${CodotoYarda}</p>`;
    }
}
