/*
Bir eğitim platformu için, bir butona tıklanma durumuna göre farklı Tailwind CSS class'ları uygula. 
    - Eğer buton aktif değilse (`isActive` prop'u `false` ise) gri bir arka plan (bg-gray-400) 
        ve devre dışı bir fare imleci (cursor-not-allowed) kullan. 

    - Eğer buton aktifse (`isActive` prop'u `true` ise) mavi bir arka plan (bg-blue-500) 
        ve normal bir fare imleci (cursor-pointer) kullan. 

    -İpucu: ternary if ve backtick kullanabilirsin.
*/

//App.js
import ActionButton from './ActionButton.js';

export default function App() {
    return (
        <div className="flex justify-center gap-4">
            <ActionButton isActive={false} text="Kaydet" />
            <ActionButton isActive={true} text="Düzenle" />
        </div>
    )
}

//ActionButton.js
export default function ActionButton({ isActive, text }) {
    return (
        <button
            className={`text-white font-bold py-2 px-4 rounded 
                        ${isActive ? 'bg-blue-500 cursor-pointer' : 'bg-gray-400 cursor-not-allowed'}
                      `}
        >
            {text}
        </button>
    );
}

