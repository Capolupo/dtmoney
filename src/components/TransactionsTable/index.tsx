import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable(){
    /* Isso já funciona porem iremos utilizar axios
    useEffect(()=>{
        fetch('http://localhost:3000/api/transactions')
        .then(response => response.json())
        .then(data => console.log(data))
    },[] );
    */

    useEffect(()=>{
        api.get('/transactions')
        .then(response => console.log(response.data))
    },[] );

    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>                    
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>                    
                </thead>
                <tbody>
                    <tr>
                        <td>Desenvolvimento de Site</td>
                        <td className="whitdraw">-R$ 500,00</td>
                        <td>Desenvolvimento</td>
                        <td>20/11/2022</td>
                    </tr>

                    <tr>
                        <td>Desenvolvimento de Site</td>
                        <td className="deposit">R$ 500,00</td>
                        <td>Desenvolvimento</td>
                        <td>20/11/2022</td>
                    </tr>

                    <tr>
                        <td>Desenvolvimento de Site</td>
                        <td>R$ 500,00</td>
                        <td>Desenvolvimento</td>
                        <td>20/11/2022</td>
                    </tr>

                    <tr>
                        <td>Desenvolvimento de Site</td>
                        <td>R$ 500,00</td>
                        <td>Desenvolvimento</td>
                        <td>20/11/2022</td>
                    </tr>                                                            
                </tbody>
            </table>
        </Container>
    );
}