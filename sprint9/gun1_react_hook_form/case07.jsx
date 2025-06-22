/*

Aşağıdaki pizza sipariş formunda, pizzanın kaç adet olacağını belirten bir sayı giriş alanı bulunmaktadır. 
Bu alan için minimum 1, maksimum 10 adet girilebileceği validasyon kuralları eklenmiştir. 
Ancak, kullanıcı minimum değerin altında veya maksimum değerin üstünde bir sayı girdiğinde 
beklenen hata mesajları görüntülenmiyor. Sorunu bul ve düzelt. Hata mesajları: 
    - Minimum 1 adet seçebilirsiniz. 
    - Maksimum 10 adet seçebilirsiniz.

*/


import { useForm } from "react-hook-form";

export default function App() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => console.log("Adet Bilgisi:", data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="adet">Adet:</label>
                <input
                    type="number"
                    id="adet"
                    //{...register("adet", { min: 1, max: 10 })} //böyle değil!!
                    {...register("adet", {
                        min: {
                            value: 1,
                            message: "Minimum 1 adet seçebilirsiniz. "
                        }, max: {
                            value: 10,
                            message: "Maksimum 10 adet seçebilirsiniz."
                        }
                    })}
                />
                {errors.adet && <p>{errors.adet.message}</p>}
            </div>
            <button type="submit">Güncelle</button>
        </form>
    );
}
