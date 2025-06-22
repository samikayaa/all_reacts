/*
Bir Netflix benzeri platform için bir içerik ekleme formu oluşturuyorsun. 
Formda bir başlık (zorunlu), bir açıklama (isteğe bağlı) ve bir yayın tarihi (zorunlu) alanları bulunmaktadır. 
React Hook Form kullanarak bu formu oluşturun ve hata mesajlarını aşağıdaki gibi yapın: 
    - Başlık alanı zorunludur! 
    - Yayın tarihi zorunludur!
*/

import { useForm } from "react-hook-form";

export default function App() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="baslik">Başlık:</label>
                <input type="text" id="baslik" {...register("baslik", {
                    required: "Başlık alanı zorunludur!"
                })} />
                {errors.baslik && <p>{errors.baslik.message}</p>}
            </div>
            <div>
                <label htmlFor="aciklama">Açıklama:</label>
                <textarea id="aciklama" {...register("açıklama")} />
            </div>
            <div>
                <label htmlFor="yayinTarihi">Yayın Tarihi:</label>
                <input type="date" id="yayinTarihi" {...register("yayinTarihi", {
                    required: "Yayın tarihi zorunludur!"
                })} />
                {errors.yayinTarihi && <p>{errors.yayinTarihi.message}</p>}
            </div>
            <button type="submit">Kaydet</button>
        </form>
    );
}



