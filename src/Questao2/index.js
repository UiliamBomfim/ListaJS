import { useCallback, useState } from 'react';
//import '../styles.css'

function Questao2() {
    const [gasto,setGasto]=useState(0);
    const [pessoas,setPessoas]=useState(0);
    const [perc,setPerc]=useState(0);
    const [resultado1, setResultado1]=useState("");
    const [resultado2, setResultado2]=useState("");
    
     let calculaConta = useCallback(()=>{

        let conta = (parseFloat(gasto) * parseFloat(perc))+ parseFloat(gasto);
        let contapp = conta/pessoas;
        
            setResultado1(conta);
            setResultado2(contapp);
        
     },[gasto,pessoas,perc]);


     return(

        <div>
            <p>2- Escreva uma solução web que permita a um restaurante
            emitir a conta de uma mesa. Para isso construa um form HTML
            que permita ao usuário digitar o total gasto na mesa, o
            numero de pessoas sentadas a mesa e o percentual pago como
            gorjeta. O programa do lado servidor deve, a partir dos
            parâmetros passados pelo form HTML, calcular e exibir o total
            geral e o total por pessoa.</p>     
         <div>
                <input type="number" value={gasto} onChange={(event)=>setGasto(event.target.value)}  placeholder="gasto"/>
                <input type="number" value={pessoas} onChange={(event)=>setPessoas(event.target.value)}  placeholder="pessoas"/>
                <input type="number" value={perc} onChange={(event)=>setPerc(event.target.value)}  placeholder="percentual"/> 
                <button onClick={()=>calculaConta()}>Calcular</button> 
                <p>Resultado: {resultado1}</p>
                <p>Resultado: {resultado2}</p>     
        </div>   

        </div>
     );

}
export default Questao2;