/*

Bir pizza görseline Tailwind CSS kullanarak 
4 piksel kalınlığında, 
kesikli (dashed) ve 
kırmızı(tonu 500) bir çerçeve ekleyin.

*/

import './tailwind.css';

export default function PizzaImage(props) {
    return (
        <img src="props.imgUrl" alt="props.alt" className="border-4 border-dashed border-red-500" />
    );
}
