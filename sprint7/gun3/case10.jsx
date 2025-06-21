/*
Aşağıdaki uygulamaya email validasyonu ekleyin.

- handleEmailChange fonksiyonu yazın ve  input alanına yazılan metin'de @ işareti varsa;
    geçerli bir email yazılmış kabul edin.
- @ işareti yoksa ekranda  hata mesajı olarak "Geçerli bir email giriniz!" göstersin.
- handleSubmit'de email'i konsola yazdırın.

*/

import { useState } from 'react';


export default function App() {
    const [error, setError] = useState("");
    const [email, setEmail] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        console.log(email);
    }

    function handleEmailChange(event) {
        const value = event.target.value;

        if (value.includes("@")) {
            setEmail(value);
            setError("");
        } else {
            setError("Geçerli bir emial gir!");
        }
    }

    return <form onSubmit={handleSubmit}>
        <input
            type="text"
            name="email"
            placeholder="Enter email"
            onChange={handleEmailChange}
        />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Submit</button>
    </form>
}



