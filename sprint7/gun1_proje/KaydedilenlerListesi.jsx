import React from 'react';
 
export default function KaydedilenlerListesi(props) {

  const {list} = props;

 return (
   <div className="saved-list">
     <h3>Kaydedilen Filmler:</h3>
     {list.map((movie, index) => (
       <span key={index} className="saved-movie">
         {movie.title}
       </span>
     ))}
     {/* Görev 4: Anasayfa butonu ana sayfayı açmalı */}
     <div className="home-button">Anasayfa</div>
   </div>
 );
}
