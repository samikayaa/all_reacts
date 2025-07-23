import { createContext } from "react";

export default function App() {

    const UserContext = createContext();
    return <div>{UserContext} tanımlandı</div>; //süslüden emin değilim.
}