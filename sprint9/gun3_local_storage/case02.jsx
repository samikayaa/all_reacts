//Aşağıdaki kodda, clearLocalStorage fonksiyonunun ne yapmaya çalıştığını anla ve kodu tamamla.

/*
const clearLocalStorage = (key) => {
    if (key) {
    
    } else {
    
    }
   };
*/


const clearLocalStorage = (key) => {
    if (key) {
        localStorage.removeItem(key);
    } else {
        localStorage.clear();
    }
};


