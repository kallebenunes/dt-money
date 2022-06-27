import { useContext } from "react";
import { Container } from "./style";
import { ITransactionsContext, TransactionsContext } from './../../TransactionsContext';

export interface ITransaction {
    id: string, 
    amount: number, 
    title: string, 
    category: string, 
    type: string,
    created_at: string, 

}

export function TransactionsTable(){
    
    const {transactionsList} = useContext(TransactionsContext) as ITransactionsContext

    return (
        <Container>
            <table>
                <thead>
                    <th>Título </th>
                    <th>Valor </th>
                    <th>Categoria </th>
                    <th>Data </th>
                </thead>
                <tbody>
                {transactionsList.map( (transaction: ITransaction) => {
                    return <tr key={transaction.id}>
                        <td>{transaction.title}</td>
                        <td className={transaction.type}>  
                            {new Intl.NumberFormat('PT-BR', {style: 'currency', currency: 'BRL'}).format(transaction.amount) }
                        </td>
                        <td>{transaction.category}</td>
                        <td>{transaction.created_at}</td>
                    </tr>
                })}
                  
                </tbody>
            </table>
        </Container>
    )
}