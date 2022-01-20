import React, {useContext} from "react";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";
import { TransactionsContext } from "../../TransactionsContext";

import { Container } from "./styles";


export function Summary() {

    const {transactions} = useContext(TransactionsContext);
    
    /*Lista tudo e acc "acumula" soma o valor*/
    // const totalDeposits = transactions.reduce((acc, transaction) => {
    //     if (transaction.type === 'deposit' ) {
    //         return acc + transaction.amount;
    //     }
    //     return acc;
    // },0);

    /*Vamos fazer os totais todos com apenas uma função ao inves de repetir acima varias vezes*/

    const summary = transactions.reduce((acc, transaction) => {
        if (transaction.type === 'deposit' ) {
            acc.deposits += transaction.amount;
            acc.total += transaction.amount;
        }
        else{
            acc.witdraws += transaction.amount;
            acc.total -= transaction.amount;
        }
        return acc;
    },{
        deposits:0,
        witdraws:0,
        total:0,
    })

    return(
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Entradas" />
                </header>
                <strong> 
                    {new Intl.NumberFormat('pt-BR',{
                        style: 'currency',
                        currency: 'BRL'
                        }).format(summary.deposits)
                    }                    
                </strong>
            </div>

            <div>
                <header>
                    <p>Saidas</p>
                    <img src={outcomeImg} alt="Saidas" />                    
                </header>
                <strong>-
                    {new Intl.NumberFormat('pt-BR',{
                        style: 'currency',
                        currency: 'BRL'
                        }).format(summary.witdraws)
                    }                                         
                </strong>
            </div>

            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total" />                    
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR',{
                        style: 'currency',
                        currency: 'BRL'
                        }).format(summary.total)
                    }
                </strong>
            </div>


        </Container>
    )
}