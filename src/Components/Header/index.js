import { Link } from "react-router-dom";


function Header(){
    return(
        <header>
            <Link className="logo" to="/questao1">Questão 1</Link>
        </header>
    );
}export default Header;