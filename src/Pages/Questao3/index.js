import { useCallback, useState, useEffect } from 'react';

alert("numero sorteado")
function Questao3() {

   const [valorJogado,setValorJogado]= useState(0);
   const [resultado, setResultado]=useState("");
   const[sorteado, setSorteado]=useState(0);
   useEffect(()=>{
    setSorteado(Math.floor(Math.random()*100))
   },[]);

    const Jogo = useCallback(()=>{  
        
 
  
      const numero = valorJogado;

      if(numero > sorteado){
          
          setResultado("Numero maior que o sorteado, tente novamente");
      }
      else if (numero < sorteado) {

            setResultado("Numero menor que o sorteado, tente novamente");
          
      } else {

        setResultado("voce acertou");
          
      }
        
     },[valorJogado, sorteado]);

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
               <label for="gasto">Informe um número: </label>
               <input id="gasto" type="number" value={valorJogado} onChange={(event)=>setValorJogado(event.target.value)} placeholder="Valor da Conta"/>
            </div>
               <button onClick={Jogo}>Calcular</button>
               <p>Resultado: {resultado}</p>   
        </div>   

        </div>
     );

};
export default Questao3;