// Aşağıdaki kod ile localStorage'a user bilgisi [object Object] şeklinde kaydoluyor. 

const obj = { name: 'Yalçın', age: 30 };
const object = JSON.stringify(obj); //Sorunu düzeltildi.
localStorage.setItem('user', object);
