/*
UserProvider adında bir context sağlayıcı component oluştur. 
- Bu bileşen, UserContext'in Provider component'ini return etsin. 
- user isimli bir state oluştur ve Provider'a value olarak bu state ve setter'ını ver. 
- children'ı destruct etmeyi ve kullanmayı unutma. 
- UserProvider'ı default export yap.




*/

import React, { createContext, useState } from "react";


const UserContext = createContext();

const UserProvider = ({ children }) => {

    const [user, setUser] = useState();

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )

}

