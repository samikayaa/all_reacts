import { useState } from "react"

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        console.log(`Email: ${email}, Password: ${password}`);
        setEmail("");
        setPassword("");
    }

    function handleEmailChange(event) {
        setEmail(event.target.value);
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value);
    }

    return (<form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <label>Email: </label>
      <input type="email" onChange={handleEmailChange}/>
      <label>Şifre: </label>
      <input type="password" onChange={handlePasswordChange}/>
      <buton>Giriş</buton>
    </form>)
  }
  