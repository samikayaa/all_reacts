/*
Bir Netflix benzeri platform için basit bir arama çubuğu bileşeni oluştur. 
- useForm hook'undan register ve handleSubmit metodlarını al. 
- form'a handleSubmit'i bağla. onSubmit fonksiyonunu callback olarak ver. 
- input'u aramaTerimi ismi ile register et.
*/

import { useForm } from "react-hook-form";


export default function AramaCubugu() {

    const { register, handleSubmit } = useForm(); //register ve handleSubmit'i useForm'dan aldık.

    const onSubmit = (data) => {
        console.log(data.aramaTerimi);
    };


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="aramaTerimi">Film Ara:</label>
                <input type="text" id="aramaTerimi" {...register("aramaTerimi")} /> {/*...ile ekledik.*/}
            </div>
            <button type="submit">Ara</button>
        </form>
    );
}
