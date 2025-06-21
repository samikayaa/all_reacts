/*
Aşağıdaki React bileşeninde, React Hook Form kullanarak bir e-posta adresi alanı oluşturulmuştur. 
Varsayılan olarak validasyonun ne zaman tetikleneceğini kontrol eden mode özelliğini onBlur olarak ayarlayın.
*/

import { useForm } from "react-hook-form";

export default function App() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ mode: "onBlur" }); //varsayılan olarak onBlur özelliği verilmesi bu şekildedir!

    const onSubmit = (data) => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="email">E-posta:</label>
                <input
                    type="email"
                    id="email"
                    {...register("email", { required: "E-posta alanı zorunludur" })}
                />
                {errors.email && <p>{errors.email.message}</p>}
            </div>
            <button type="submit">Gönder</button>
        </form>
    )
}


