import Modal from 'react-modal'
import { Container, TransactionTypeConatiner, RadioBox } from './style';
import incomeImg from './../../assets/income.svg'
import outcomeImg from './../../assets/outcome.svg'
import closeImg from './../../assets/close.svg'
import { FormEvent, useState } from 'react';
import { v4 } from 'uuid'
import { api } from '../../api/api';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}


export function NewTransactionModal({ isOpen, onRequestClose }:NewTransactionModalProps){

    const [type, setType] = useState('deposit')
    const [amount, setAmount] = useState(0)
    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('')

    function handleCreateNewTransaction(event: FormEvent){
        event.preventDefault()

        const data = {
            id: v4(),
            amount, 
            title, 
            category,
            type, 
            created_at: new Date().toLocaleDateString()
        }

        console.log(data)

        api.post('/transactions',data)
    }

    return (
        <Modal 
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button  className='react-modal-close' type="button" onClick={onRequestClose}>
                <img src={closeImg} alt="Fechar modal" />
            </button>

            <Container
                onSubmit={handleCreateNewTransaction}
            >
                <h2>Cadastrar transação</h2>
                
                <input 
                    placeholder='Título'
                    value={title}
                    onChange={(event) => setTitle(event.currentTarget.value)}
                />
                <input 
                    type="number" 
                    placeholder='Valor' 
                    value={amount}
                    onChange={(event) => setAmount(Number(event.currentTarget.value))}
                    
                />
                
                <TransactionTypeConatiner>
                    
                    <RadioBox 
                        type='button'
                        onClick={() => {setType('deposit');}}
                        isActve={type === 'deposit'}
                        activeColor="green"
                    >
                        <img src={incomeImg} alt="" />
                        <span>Entrada</span>
                    </RadioBox>
                    
                    <RadioBox 
                        type="button"
                        onClick={() => { setType('withdraw');} }
                        isActve={type === 'withdraw'}
                        activeColor="red"

                    >
                        <img src={outcomeImg} alt="" />
                        <span>Saída</span>
                    </RadioBox>

                </TransactionTypeConatiner>
                
                <input 
                    placeholder='Categoria' 
                    value={category}
                    onChange={(event) => setCategory(event.currentTarget.value)}
                />
                <button type="submit">Cadastrar</button>
                
            </Container>
        </Modal>
    )
}