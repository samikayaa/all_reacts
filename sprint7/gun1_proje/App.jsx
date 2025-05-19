import React, { useState } from 'react';

import KaydedilenlerListesi from './components/KaydedilenlerListesi';
import FilmListesi from './FilmListesi';


export default function App() {
 /* Görev: 1
 kaydedilmiş filmler ve film listesi için 2 tane state tanımlayın.
 film listesini sahteVeri'den alın.
 */
 const [kaydedilmisFilmler, setKaydedilmisFilmler] = useState("");
 const [filmListesi, setFilmListesi] = useState("sahteVeri");

 const KaydedilenlerListesineEkle = (movie) => {
   /* Görev: 2
   kaydedilmiş film listesine eklemek için bir click handle fonksiyonu yazın.
   aynı filmi 2. kez eklememeli.
   Kaydet butonunun olduğu component'e prop olarak gönderin.
   */
 };


 return (
   <div>
     <KaydedilenlerListesi list={[]} />
     {
       /*
     Görev 3: 2 adet route tanımlayın.
     1. route '/' olacak ve FilmListesi component'ini yükleyecek ve buraya film listesini prop olarak yollayacak.
     2. route '/filmler/' parametresinden sonra 'id' parametresini alacak  
        (örnek: '/filmler/2', '/filmler/3' id dinamik olacak). Bu route 'Film' bileşenini yükleyecek.
     */
       "Burayı kendi route'unuz ile değiştirin"
     }

     <Router>
        <Switch>
            <Route exact path="/">
                <FilmListesi /> 
            </Route>
            <Route exact path="/filmler/:id">
                <Film /> 
            </Route>
        </Switch>
     </Router>

   </div>
 );
}



