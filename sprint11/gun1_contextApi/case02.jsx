/*Aşağıdaki bileşende UserContext'teki verilere erişmek için gerekli 
Context.Consumer 
yapısını div içine ekle ve value prop'unu konsola yazdır.
*/


import { createContext } from "react";


const UserContext = createContext("Ömer");


function Profile() {
    return (
        <div>
            <UserContext.Consumer>
                {(value) => (console.log(value))}
            </UserContext.Consumer>
        </div>
    );
}

