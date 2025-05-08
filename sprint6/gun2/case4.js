//utils.js
export const add = (a, b) => a + b; 
export const subtract = (a, b) => a - b; 


//index.js
import {add, subtract} from './utils.js' //utils.js dosyasında yer alan fonksiyonları index.js dosyasına tanıtıp kullanıma hazır hale getirdim.
console.log(add(5, 3));  
console.log(subtract(5, 3));
