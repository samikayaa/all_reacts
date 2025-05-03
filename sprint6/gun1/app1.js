/*
Aşağıdaki React uygulamasında stamina isimli bir state tanımlayın. Başlangıç değeri 100 olsun. Aşağıdaki component yapısında ekranda gösterin.
<div class="counter-area">
    <p>100</p>
</div>

export default function App() {
  return (<div></div>)
}
*/

import { useState } from "react";

export default function App() {

    const [stamina, setStaminaFunction] = useState(100);

    return (<div className="counter-area">
              <p>{stamina}</p>
            </div>)
}