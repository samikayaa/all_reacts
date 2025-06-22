//Aşağıdaki useLocalStorage custom hook'un eksik kısmını tamamlayınız:

/*
export const useLocalStorage = (key, initialValue) => {
    const [value, setValue] = useState(() => {
        const storedValue = localStorage.getItem(key);
        return storedValue ? _____________ : initialValue;
    });

    useEffect(() => {
        _____________;
    }, [key, value]);

    return [value, setValue];
};
*/

export const useLocalStorage = (key, initialValue) => {
    const [value, setValue] = useState(() => {
        const storedValue = localStorage.getItem(key);
        return storedValue ? JSON.parse(storedValue) : initialValue;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
};

/*
Açıklama:

JSON.parse(storedValue)
 localStorage'a kaydedilen veriler her zaman string formatında saklandığı için, getItem ile alınan değeri orijinal haline döndürmek için JSON.parse kullanılır.

localStorage.setItem(key, JSON.stringify(value))
 React’te state değiştiğinde bu değeri localStorage’a kaydetmek için useEffect içinde setItem kullanılır ve karmaşık değerleri saklayabilmek için JSON.stringify ile string'e çevrilir.
*/