//Bir blog uygulamasında, her bir gönderi detay sayfası `/post/:postId` şeklinde bir URL'ye sahiptir. 

//Aşağıdaki uygulamada, useParams hook'unu kullanarak `PostDetail` bileşeninde postId değerini alın ve ekranda görüntüleyin.



import React from "react";
import { useParams } from "react-router-dom";


function PostDetail() {

 let {postId} = useParams();

 return <div>Gönderi ID: {postId} </div>;
}


export default PostDetail;

