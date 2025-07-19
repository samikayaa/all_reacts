/*
Bir blog uygulamasında, yorum ekleme işlemini `useMutation` ile gerçekleştir ve 
başarılı bir şekilde yorum eklendikten sonra 
ilgili gönderinin yorumlarını (query key: `['posts', postId, 'comments']`) geçersiz kıl. 

1- Gereklik import'ları yap. 
2- useQueryClient hook'unu kullanarak queryClient isimli bir değişkende queryClient'ı sakla. 
3- addCommentMutation isimli bir mutation oluştur. 
- comment isimli bir parametre alsın. 
- /api/posts/comments adresine post isteği atsın. 
- bu istekte parametre olarak gelen comment'i payload olarak göndersin. 
- başarılı istekte response.data'yı geri dönsün. 
- mutation başarılı olduğunda ['posts', postId, 'comments'] isimli query'leri invalide etsin. 
(invalidateQueries'i kullan ve argüman olarak bir obje ver. 
içinde queryKey property'si olsun ve değeri array olsun.) 

4- handleSubmit'de mutation'ı çalıştır. Argüman olarak bir obje ver içinde postId ve commnetText olsun. 
- İpucu: tanstack query dokümantasyonu quick start'daki örneğe bakabilirsin.
*/

import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";


function AddComment({ postId }) {
    const [commentText, setCommentText] = useState("");

    const queryClient = useQueryClient();

    const addCommentMutation = useMutation({
        mutationFn: (comment) => {
            return axios.post("/api/posts/comments", comment).then(response => response.data)
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["posts", postId, "commnets"]
            })
        }
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        addCommentMutation.mutate({ postId, commentText })
        setCommentText("");
    };


    return (
        <div>
            <textarea
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
            />
            <button onClick={handleSubmit} disabled={addCommentMutation.isLoading}>
                Yorum Ekle
            </button>
        </div>
    );
}


export default AddComment;

