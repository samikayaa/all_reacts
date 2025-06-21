/*

Aşağıdaki kodda, bir kullanıcının yaşını alıp sayısal bir değer olup olmadığını 
kontrol eden bir validasyon bulunmaktadır. 
Ancak, yaş alanı boş bırakıldığında Lütfen yaşınızı giriniz! 
hata mesajı görüntülenmiyor. Sorunu bul ve düzelt.

*/


import { useForm } from "react-hook-form";

export default function App() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="yas">Yaşınız:</label>
                <input
                    type="text"
                    id="yas"
                    {...register("yas", {
                        required: "Lütfen yaşınızı giriniz!", // diraket burada kriteri ekliyoruz.
                        pattern: {
                            value: /^[0-9]+$/, message: "Lütfen sadece rakam giriniz."
                        }
                    })}
                />
                {errors.yas && <p>{errors.yas.message}</p>}
            </div>
            <button type="submit">Gönder</button>
        </form>
    );
}


