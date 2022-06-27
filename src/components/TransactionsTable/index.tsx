import { useEffect, useState } from "react";
import { api } from "../../api/api";
import { Container } from "./style";

export interface ITransaction {
    id: string, 
    amount: number, 
    title: string, 
    category: string, 
    type: string,
    created_at: string, 

}

export function TransactionsTable(){
    useEffect( () => {
    
        loadTransactions()
        
        return () => {
            console.log("Olá use effect")
        }
    }, [])

    async function loadTransactions(){ 
        const { data } = await api.get('/transactions')
      
        console.log(data)

        setTransactionsList(data)

    }

    const [transactionsList, setTransactionsList] = useState<any>([])
    
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