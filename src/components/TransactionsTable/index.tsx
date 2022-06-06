import { useEffect, useState } from "react";
import { Container } from "./style";

export function TransactionsTable(){
    useEffect( () => {
    
        loadTransactions()
        
        return () => {
            console.log("Olá use effect")
        }
    }, [])

    async function loadTransactions(){ 
        const response = await fetch('http://localhost:3000/api/transactions')
        const data = await response.json()
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
                {transactionsList.map( (transaction:any) => {
                    return <tr key={transaction.id}>
                        <td>{transaction.title}</td>
                        <td className={transaction.type} >  R${transaction.amount}</td>
                        <td>{transaction.category}</td>
                        <td>{transaction.created_at}</td>
                    </tr>
                })}
                  
                </tbody>
            </table>
        </Container>
    )
}