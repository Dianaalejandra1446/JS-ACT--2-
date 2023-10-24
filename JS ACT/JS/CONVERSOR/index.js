import { addWeigth } from "./Peso.js";
import { addTemp } from "./Temp.js";
import { addLong } from "./Longuitud.js";
import { addTime } from "./Tiempo.js";
const d=document;

//Button peso
let btnWeigth = d.getElementById('btn-weight');
btnWeigth.addEventListener('click',addWeigth)
//Button Loguitud
let btnLong = d.getElementById('btn-long');
btnLong.addEventListener('click',addLong);
 // Button Temperatura
 let btnTemp = d.getElementById('btn-temp');
 btnTemp.addEventListener('click',addTemp)
//Button Tiempo
let btnTime=d.getElementById('btn-time');
btnTime.addEventListener('click', addTime);