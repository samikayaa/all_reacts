//SORU: user objesini Profile component'ine prop olarak gönder. Prop destructuring ile prop'lardan al ve kullan.


//App.js
import Profile from "./Profile.js"; //"Profile" bileşeni App.js dosyası içine aktarılıyor.
export default function App() {
  const user = { name: "Emre", email: "emre@wit.com.tr" };
  return <Profile user={user}/> // user = {user} eklemesi yaptım. // "user" nesnesini bir prop olarak "Profile" bileşenine geçiriyor.
}


//Profile.js
function Profile({user}) { //"user" nesnesini alıp destructuring yapıyor.
    return (
      <div>
        <h2>{user.name}</h2>
        <p>Email: {user.email}</p>
      </div>
    );
  }
  
export default Profile;


//Uygulama çalıştığında, önce App bileşeni render edilir.
//1. App bileşeni bir kullanıcı nesnesi oluşturur ve bunu Profile bileşenine prop olarak geçirir.
//2. Profile bileşeni, aldığı kullanıcı bilgilerini kullanarak bir profil görüntüsü oluşturur.
//3. Sonuç olarak, ekranda Emre adı ve e-posta adresi görüntülenir.
//4. Bu, React'ın temel "component" (bileşen) yapısını ve "props" (özellikler) ile veri geçişini gösteren basit bir örnektir.
