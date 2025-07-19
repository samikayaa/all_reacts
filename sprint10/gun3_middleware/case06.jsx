/*Dispatch edilen action'ı log'layan bir middleware yaz. 

- Adı loggerMiddleware olsun. 
- Bir fonksiyon return etsin. Bu fonksiyon store'u parametre olarak alır. 
- Bu fonksiyon da başka bir fonksiyon return etsin. 
  Bu fonksiyon da bir sonraki middleware'i parametre olarak alır. 
  Bu parametreyi next diye isimlendir. 
- Bu son fonksiyon da başka bir fonksiyon return eder. 
  Parametre olarak dispatch edilen action'ı alır. 
- Son fonksiyon konsola action objesini yazdırsın. 
  Bir sonraki middleware'ı(next) çalıştırsın. action'ı argüman olarak versin. 
- Bütün adımlardan sonra bunu arrow function olarak yaz.

*/


import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import { thunk } from "redux-thunk";
import { logger } from "redux-logger";

const store = createStore(reducer, applyMiddleware(loggerMiddleware));

