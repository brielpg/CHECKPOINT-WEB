import "./style.css";
import Header from '../../Header'
import { useState } from 'react'
import axios from 'axios'

const Cadastro = () => {

    const [Uname, setName] = useState("")
    const [email, setEmail] = useState("")
    const [psw, setPsw] = useState("")


    const req = async ()=> {
    try{
      const response = await axios({
        method: "post",
        url: "https://caiohalbert.bsite.net/api/user/newUser",
        headers: {"Content-Type": "application/json"},
        data: {
          "username": Uname,
          "email": email,
          "passwordHash": psw,
          "accessLevel": ""
        }
      })
      console.log(response);
    }catch(err){
      console.log(err)
      
    }
  }

    return(
      <main>
        <Header/>
        <div className="form_wrapper">
            <div className="form_container">
              <div className="title_container">
                <h2>CADASTRO</h2>
              </div>
              <div className="formulario">
                <div>
                  <div className="gap">

                    <div className="inputs">
                      <input onChange={(e) => setName(e.target.value)} type="text" name="user" placeholder="Usuário"/>
                    </div>

                    <div className="inputs">
                      <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email"/>
                    </div>

                    <div className="inputs">
                      <input onChange={(e) => setPsw(e.target.value)} type="password" name="password" placeholder="Senha"/>
                    </div>

                    <div className="inputs checkbox_option">
                        <input type="checkbox" id="cb1"></input>
                        <label>Li e aceito os termos e condições</label>
                    </div>
                    <input onClick={req} className="button" type="submit" value="Register" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
    )
}

export default Cadastro;