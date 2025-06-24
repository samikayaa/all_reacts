/*
Aşağıdaki kodda, bir pizza sipariş formunda kupon kodu girişi bulunmaktadır. 

- Kupon kodunun PIZZA20 veya FREEDELIVERY olması gerektiği adı kuponKontrol olan bir validasyon fonksiyonu ile 
kontrol edilmek isteniyor. 
- Bu kodlar girilmediğinde Geçersiz kupon kodu. hatası verecek şekilde validasyon fonksiyonunu yaz.
*/


import { useForm } from "react-hook-form";

export default function App() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => console.log("Kupon Kodu:", data);

    const kuponKontrol = (value) => { //formun input'undan gelen value değeridir.
        if (value !== "" && value !== "") {
            return "Geçersiz kupon kodu."
        } else {
            return true;
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="kupon">Kupon Kodu:</label>
                <input
                    type="text"
                    id="kupon"
                    {...register("kupon", { validate: kuponKontrol })} //kuponKontrol fonksiyonunun doğruluğunu kontrol eder.
                />
                {errors.kupon && <p>{errors.kupon.message}</p>}
            </div>
            <button type="submit">Uygula</button>
        </form>
    );
}

