/*
Aşağıdaki React kod parçacığında, bir kullanıcının adını alıp doğrulayan bir form bulunmaktadır. 
react-hook-form ile form yönetimi yapılmış. 
Ancak, form gönderildiğinde onSubmit fonksiyonu çalışmıyor. 
onSubmit fonksiyonunun doğru şekilde tanımlandığını varsayarak, sorunu bul ve düzelt.
Egzersizi beğendimÇok zor geldiHatalı
*/

import { useForm } from "react-hook-form";


function AdFormu() {
    const { register, handleSubmit } = useForm();


    const onSubmit = (data) => {
        console.log(data);
    };


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="ad">Adınız:</label>
            <input type="text" id="ad" {...register("ad", { required: true })} />
            <button type="submit">Gönder</button>
        </form>
    );
}
