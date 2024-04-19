import './style.css'
import { Link } from 'react-router-dom'


const Header = () => {

    return(
        <header>
            <nav>
                <ul>
                    <Link to= "/"><li>Home</li></Link>
                    <Link to= "/login"><li>Login</li></Link>
                    <Link to= "/cadastro"><li id='ultimo'>Cadastro</li></Link>
                </ul>
            </nav>
        </header>
    )
}

export default Header