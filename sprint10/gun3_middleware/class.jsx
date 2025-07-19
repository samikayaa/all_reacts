/*

Redux Middleware nedir?

Redux Middleware, action ile reducer arasına girerek, 
action'ları yakalamaya, değiştirmeye, engellemeye 
veya yan etkiler (side effects) eklemeye yarayan bir ara katmandır.

📌 Basitçe: Action → Middleware → Reducer → Yeni State

🎯 Middleware'in Temel Amacı Nedir?
Asenkron işlemleri yönetmek (örn: API çağrıları)
Logger gibi her action’ı konsola yazmak
Veri doğrulama, yetkilendirme (authentication)
Koşullu action dispatch işlemleri yapmak
Side-effect işlemleri kontrol altına almak





Redux-thunk nedir?

redux-thunk, Redux için yazılmış bir middleware’dir ve asenkron işlemleri (örneğin API istekleri) Redux içinde yönetmemizi sağlar.

Kısaca: Redux'ta dispatch fonksiyonu normalde sadece object (action) alır.
redux-thunk sayesinde dispatch, fonksiyon da alabilir. Bu fonksiyonlar içinde asenkron kod yazabiliriz.

📦 Ne İşe Yarar?
Redux ile birlikte API isteklerini yönetmek
Dispatch işlemlerini kontrollü şekilde tetiklemek
Action'lar arasında koşullu geçiş yapmak


🔧 Kurulum
npm install redux-thunk


Özellik	            Açıklama
🎯 Amaç	            Redux içinde asenkron işlemleri yönetmek
🔧 Ne sağlar	    dispatch içine fonksiyon yazabilme yeteneği
⏱️ Ne için ideal	API istekleri, zaman gecikmesi, koşullu dispatch
🔌 Alternatif	    redux-saga, redux-observable

*/ 