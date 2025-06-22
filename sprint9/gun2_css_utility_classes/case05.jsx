/*

Bir eğitim platformu için Tailwind CSS class'ları kullanarak Dersi Başlat butonu yapın. 
    - Sağ ve soldan otomatik marjin vererek ortala. (display özelliğini unutma) 
    - Metin rengini beyaz yap. 
    - Yazı ile border arasına üst ve alttan 1rem'e denk gelecek boşluk bırak. 
    - Yazı ile border arasına sol ve sağdan 2rem'e denk gelecek boşluk bırak. 
    - 2px'lik border ekle. - Border kırmızı olsun ve renk tonu 500 olsun. 
    - Butonun üst ve altında 1rem boşluk olsun. 
    - Arkaplan rengi siyah olsun.
Bu kadar. :) 

*/

import './tailwind.css';

export default function App() {
    return <button className="
                                block mx-auto            /* ortalamak için: display block + margin auto */
                                text-white               /* metin rengi beyaz */
                                py-4 px-8               /* üst-alt 1rem (py-4), sağ-sol 2rem (px-8) */
                                border-2 border-red-500 /* 2px kırmızı (500 tonu) border */
                                my-4                    /* üst-alt 1rem margin */
                                bg-black                /* arka plan rengi siyah */
                            ">
        Dersi Başlat
    </button>;
}
