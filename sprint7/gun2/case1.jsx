//Bülten üyeliği için bir form oluşturun. 

/*
1- Formu oluştur. 
    - Login.js sayfasında tek bir input alanı olsun. id, name ve type özelliklerinin değeri email olsun. 
    - Hemen üstüne Label ekle. Email: yazsın. 
    - button olsun. İçinde Kayıt yazsın. 
2- Formu state ile yönet. 
    - email isimli bir state oluştur. 
    - handleSubmit ve handleChange fonksiyonları yaz ve ilgili element'lere doğru event ile bağla. 
    - handleSubmit event objesini alsın, sayfanın yenilenmesini engellesin ve state verisini console'a yazdırsın. 
    - handleChange event'i alsın ve bu event'i tetikleyen elemanın değerini state'e yazsın. 
3- From submit olunca email input alanını sıfırla. 
    - input'u controlled input yap. (value değerini state'ten al)
*/


App.js
import {Switch, Link, Route} from 'react-router-dom';
import Page from './Page.js';
import Login from './Login.js';

export default function App() {
  return (
    <>
      <header>
        <nav>
          <Link to="/">Login</Link>
          <Link to="/page">Page</Link>
        </nav>
      </header>
      <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route path="/page">
        <Page />
      </Route>
      </Switch>  
    </>
  )
}



Login.js
export default function Login() {
  return (<form>
    <h1>Register to Newsletter</h1>
  </form>)
}


Page.js
export default function Page() {
  return <h1>Merhaba!</h1>
}

