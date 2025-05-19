import Header from './components/Header';
import Footer from './components/Footer';
import './components/Layout.css';
import Offer from './components/Offer.jsx';
import 'bootstrap/dist/css/bootstrap.min.css'; //bootstrap css'i dokümantasyondaki gibi import edilmiştir.


function App() {
 return (
   <>
     <Header />
     <div className="content-section">
       Carousel Buraya Gelecek
       {/* ADIM 3: Offer component'ini burada kullanabilirsin */}
       <Offer />
     </div>
     <Footer />
   </>
 );
}


export default App;


