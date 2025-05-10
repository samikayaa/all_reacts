// SORU: Sadece component DOM’a eklendiğinde konsola Çalıştı! yazdıracak kodu yaz.

const { useEffect } = require("react");

useEffect(() => {
    console.log("Çalıştı!");
   }, [])