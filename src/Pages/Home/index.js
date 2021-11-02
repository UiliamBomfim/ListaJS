 
import { Link } from 'react-router-dom';
import './styles.css'

function Home() {
    return (
        <div className="texto">
            <h2>Práticas React: Lista 1</h2>
            <p>Este site serve como resposta a lista de exercícios I que está no site de ADS em <a href="https://ads.ifba.edu.br/dl34">https://ads.ifba.edu.br</a></p>
            <ul>
                <li><Link to="/questao1">Questão 1</Link></li>
            </ul>
        </div>
    );
}
export default Home;