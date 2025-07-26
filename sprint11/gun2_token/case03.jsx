//Aşağıdaki kod parçasında, baseURL'i https://api.example.com/version/2 olarak ayarlayan bir axios instance'ı oluştur. 

//- api değikeninde sakla. 
//- named export yap.

const BASE_URL = 'https://api.example.com/version/2';


export const api = axios.create({ baseURL: BASE_URL })