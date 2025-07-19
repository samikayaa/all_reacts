/*
Aşağıdaki React bileşeninde, /api/users endpoint'inden veri çekmek için gerekli 
useQuery hook'unu kullanarak eksik kısımları tamamla. 

- useQuery hook'unu ve axios'uimport et. 
- useQuery'den data, isLoading ve error'u destruct ederek al. 
- useQuery'e queryKey olarak users'ı ver. 
queryFn olarak axios isteği yap. 
url olarak /api/users'ı kullan. get isteği at. 
response'dan gelen data'yı return et.
*/

import { useQuery } from "@tanstack/react-query"
import axios, { Axios } from "axios"

function Users() {

    const { data, isLoading, error } = useQuery({
        queryKey: ["users"],
        queryFn: () => {
            axios.get("/api/users").then(response => response.data)
        }
    });

    if (isLoading) return 'Loading...'
    if (error) return 'An error has occurred: ' + error.message

    return (
        <ul>
            {data?.map(user => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    )
}


export default Users;

