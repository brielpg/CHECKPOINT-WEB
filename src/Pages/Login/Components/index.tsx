import "./style.css";
import axios from 'axios';
import Header from '../../Header'
import { useState } from 'react'

const Login = () => {

    const [email, setEmail] = useState("")
    const [psw, setPsw] = useState("")

    const req = async ()=> {
        try{
          const response = await axios({
            method: "post",
            url: "https://caiohalbert.bsite.net/api/user/login",
            headers: {"Content-Type": "application/json"},
            data: {
              "email": email,
              "password": psw,
            }
          })
          console.log(response)
        }catch(err){
          console.log(err)
        }
      }

    return(
        <main>
        <Header/>
        
        <div id="login-page">
            <div className="form-card">
                <div className="form-card-2">
                    <div id='formulario'>
                        <h2 className="title-login">LOGIN</h2>
                        <div className="field">
                            <input onChange={(e) => setEmail(e.target.value)} type="email" className="input-field" placeholder="Email"></input>
                        </div>
                        <div className="field">
                            <input onChange={(e) => setPsw(e.target.value)} type="password" className="input-field" placeholder="Senha"></input>
                        </div>
                        <div className="box-btn">
                            <button onClick={req} className="btn-login">Entrar</button>
                        </div>     
                    </div>                   
                </div>
            </div>
        </div>
    </main>
    )
}

export default Login;