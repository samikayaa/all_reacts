/*

Aşağıdaki dersler dizisine immutable bir şekilde yeni bir ders ekleyerek yeniDersler adında yeni bir dizi oluştur. 
Eklemek istediğiniz ders objesi { id: 3, ad: "İleri React" } olsun.

*/

const dersler = [
    { id: 1, ad: "Temel HTML" },
    { id: 2, ad: "CSS" },
];

const yeniDersler = [...dersler, { id: 3, ad: "İleri React" }]; //bunu yazdık.