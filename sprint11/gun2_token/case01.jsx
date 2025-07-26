//jwt-decode kütüphanesini kullanarak token içindeki userId bilgisini konsola yazdır.

import jwtDecode from "jwt-decode";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwidXNlcklkIjoiMzAwMTUxIiwibmFtZSI6IkZhdGloIFnEsWxkxLF6IiwiaWF0IjoxNzM3MjM5MDIyfQ.qwCfhgzJ_XuCPxEyGtt0whDsZ-zIycL2ZvMi5-gWZW4";


const decoded = jwtDecode(token);
console.log(decoded.userId);
