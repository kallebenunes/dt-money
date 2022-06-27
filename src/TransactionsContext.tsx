import { createContext, ReactNode, SetStateAction, useEffect, useState } from "react";
import { api } from "./api/api";
import { ITransaction } from "./components/TransactionsTable";

interface TransactionsProviderProps {
    children: ReactNode,
}

export interface ITransactionsContext {
    transactionsList: ITransaction[],
    setTransactionsList: SetStateAction<any>
}

export const TransactionsContext = createContext<ITransactionsContext >({} as ITransactionsContext)

export function TransactionsProvider(
    {children}: TransactionsProviderProps
) {
    useEffect( () => {
    
        loadTransactions()
        
    }, [])

    async function loadTransactions(){ 
        const { data } = await api.get('/transactions')
      
        console.log(data)

        setTransactionsList(data)

    }

    const [transactionsList, setTransactionsList] = useState<ITransaction[]>([])

    const transactionsContextValue: ITransactionsContext = {
        setTransactionsList,
        transactionsList
    } 

    return <TransactionsContext.Provider value={transactionsContextValue}>
        {children}
    </TransactionsContext.Provider>
}