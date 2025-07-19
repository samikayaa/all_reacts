/*
Aşağıdaki useQuery hook'unda /api/todos adresine axios isteği(get) at. 
- Gelen cevabı response isimli bir değişkende sakla. 
- await kullanarak tanımla. 
- response içindeki data'yı dön. 
Not: await için async fonksiyon tanımlamalısın.

import { useQuery } from "react-query";
import axios from "axios";

const {data, error, isLoading} = useQuery({
 queryKey: ['todos'],
 queryFn: async() => {
   const response = await axios.get("/api/todos");
   return response.data;
 }
}); 
*/



/*
Aşağıdaki query'nin 10sn boyunca bayatlamamasını sağla. 
- İpucu: staleTime


useQuery({
 queryKey: ['todos'],
 queryFn: async () => {
   const response = await fetch('/api/todos');
   return response.json();
 },
 staleTime: 10000
});

*/