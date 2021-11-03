import { useCallback, useState } from 'react';
//import '../styles.css'

function Questao2() {
   const [valorConta,setValorConta]= useState(0);
   const [qtdPessoas,setQtdPessoas]= useState(0);
   const [percGorjeta,setGorjeta]= useState(0);
   const [totaGeral, setTotalGeral]= useState("");
   const [totalPessoa, setTotalPessoa]= useState("");
    
    const calculaConta = useCallback(()=>{      
      const contaTotal = (+valorConta + (valorConta * (percGorjeta/100)));
      const valorPorPessoa = (contaTotal/qtdPessoas);
      setTotalGeral(contaTotal);
      setTotalPessoa(valorPorPessoa);        
     },[valorConta,qtdPessoas,percGorjeta]);

     return(

        <div>
            <p>
               2- Escreva uma solução web que permita a um restaurante
               emitir a conta de uma mesa. Para isso construa um form HTML
               que permita ao usuário digitar o total gasto na mesa, o
               numero de pessoas sentadas a mesa e o percentual pago como
               gorjeta. O programa do lado servidor deve, a partir dos
               parâmetros passados pelo form HTML, calcular e exibir o total
               geral e o total por pessoa.
            </p>     
         <div>  
            <div>
               <label for="gasto">Informe os Gastos: </label>
               <input id="gasto" type="number" value={valorConta} onChange={(event)=>setValorConta(event.target.value)} placeholder="Valor da Conta"/>
            </div>
            <div>
               <label for="qtdpessoas">Quant. de Pessoas: </label>
               <input id="qtdpessoas" type="number" value={qtdPessoas} onChange={(event)=>setQtdPessoas(event.target.value)} placeholder="Qtd. Pessoas"/>
            </div>

            <div>
               <label for="valorgorjeta">Percentual Gorjeta: </label>
               <input id="valorgorjeta" type="number" value={percGorjeta} onChange={(event)=>setGorjeta(event.target.value)} placeholder="Gorjeta"/> 
            </div>
               <button onClick={calculaConta}>Calcular</button> 
               <p>Total Geral: {totaGeral.toLocaleString('pt-BR',{ style: 'currency', currency: 'BRL' })}</p>
               <p>Total Por Pessoa: {totalPessoa.toLocaleString('pt-BR',{ style: 'currency', currency: 'BRL' })}</p>     
        </div>   

        </div>
     );

};
export default Questao2;