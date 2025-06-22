/*

Pizza sipariş sitesinin ana başlığını (h1) Tailwind CSS kullanarak; 
    - Kırmızı renkte ve (rgb(239 68 68 / var(--tw-text-opacity, 1))'e denk gelsin) 
    - büyük bir metin boyutunda yap. (2.25rem'e denk gelsin) 
    - satıra ortala.

*/

import './tailwind.css';

export default function App() {
    return <h1 className="text-red-500 text-4xl text-center">Hello TailwindCSS!</h1>
}

