import Modal from 'react-modal'
import { Container, TransactionTypeConatiner, RadioBox } from './style';
import incomeImg from './../../assets/income.svg'
import outcomeImg from './../../assets/outcome.svg'
import closeImg from './../../assets/close.svg'
import { useState } from 'react';


interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}


export function NewTransactionModal({ isOpen, onRequestClose }:NewTransactionModalProps){

    const [type, setType] = useState('deposit')

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

            <Container>
                <h2>Cadastrar transação</h2>
                
                <input placeholder='Título' />
                <input type="number" placeholder='Valor' />
                
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
                
                <input placeholder='Categoria' />
                <button type="submit">Cadastrar</button>
                
            </Container>
        </Modal>
    )
}