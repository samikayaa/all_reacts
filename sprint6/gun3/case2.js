// SORU: Component'e parent'ından gelen id ve category propları değiştiğinde konsola id/category güncellendi! yazdıracak kodu yaz.

const { useEffect } = require("react");

useEffect( () => {
    console.log("id/category güncellendi!");
}, [id, category] )