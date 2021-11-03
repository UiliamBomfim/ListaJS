import { BrowserRouter, Route, Switch } from "react-router-dom"
import Header from '../Components/Header';
import Home from '../Pages/Home'
import Questao1 from '../Pages/Questao1';
import Questao2 from "../Questao2";
import Questao3 from "../Pages/Questao3";


function Rotas(){
    return(
        <BrowserRouter>
        <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/questao1" component={Questao1}/>
                <Route exact path="/questao2" component={Questao2}/>
                <Route exact path="/questao3" component={Questao3}/>
            </Switch>
        </BrowserRouter>
    );
}export default Rotas;