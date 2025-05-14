//MUI kullanarak bir buton oluştur ve div içinde kullan. 

//- contained tipi olsun. 
//- içinde Contained Buton yazsın. 
//- inline style ile arkaplan rengi yeşil olsun. 

//İpucu: - Butonu önce import etmeyi unutma. - Dokümantasyondan bakabilir, google'layabilirsin.

import Button from '@mui/material/Button';


export default function App(){
    return (
      <div>
        <Button variant="contained" color="success" /*style={{backgroundColor: "green"}}*/>Contained Buton</Button> 
      </div>
    )
   }
   