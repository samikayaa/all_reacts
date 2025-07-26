/*
App.js'de tanımlanmış Auth işlemlerini AuthContext'e al. 
- AuıthContext.js dosyasında AuthContext oluştur, named export yap. 
- Provider'ını component aynı dosyada oluştur. Adını AuthContextProvider yap. Default export et. 
- state'i ve login ve logout işlemlerini bu component içinde tanımla ve provider'a value olarak ver. 
- children prop'unu destruct ederek al ve kullan. 
- App'de uygulamayı Bu component ile sarmala.Gereksiz propları ve importları sil. 
- Header'da context'den gerekli fonksiyon ve state'i al.
*/


//AuthContext.js
import React, { useState, createContext, useContext } from "react";

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export default function AuthContextProvider({ children }) {

    const [currentUser, setCurrentUser] = useState(null);

    const login = (user) => {
        setCurrentUser(user)
    }

    const logout = () => {
        setCurrentUser(null)
    }

    return (
        <AuthContext.Provider value={{ currentUser, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}


//App.js
import React from "react";
import Header from "./Header.js";
import AuthContextProvider from "./AuthContext"

export default function App() {

    return <>
        <AuthContextProvider>
            <Header />
            <div>
                <h1>Context API Best Practice</h1>
            </div>
        </AuthContextProvider>
    </>
}




//Header.js
import React from "react";
import { useAuth } from "./AuthContext";

export default function Header({ currentUser, login, logout }) {

    const { currentUser, login, logout } = useAuth();

    return (
        <header>
            <p>{currentUser}</p>
            {currentUser
                ?
                <button onClick={logout}>Log out</button>
                :
                <button onClick={login}>Log in</button>
            }
        </header>
    )
}

