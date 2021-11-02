import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Header from '../Components/Header';
import Questao1 from '../Pages/Questao1';


function Rotas(){
    return(
        <BrowserRouter>
        <Header/>
            <Switch>
                <Route exact path="/questao1" component={Questao1}/>
            </Switch>
        </BrowserRouter>
    );
}export default Rotas;