import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { api } from '../../services/api';
import { Container, TransactionTypeContainer, RadioBox } from './styles';
import closeImg from '../../assets/close.svg';



interface newTransactionModalProps{
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal( {isOpen, onRequestClose }: newTransactionModalProps){
    /*Criação de estados para cada input que eu tiver */
    const [title, setTitle] = useState('');
    const [value, setValue] = useState(0);
    const [category, setCategory] = useState('');
   
    /*Criação do estado para saber em qual botão a pessoa clicou*/
    const [type, setType] = useState('deposit');

    function handleCreateNewTransaction(event: FormEvent){
        /*para prevenir a tratativa padrão dos formularios no submit*/
        event.preventDefault();

        const data = {
            title,
            value,
            category,
            type,
        };

        api.post('/transactions', data)
    }

    return(
        <Modal 
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
        >
            <button 
                type='button' 
                onClick={onRequestClose} 
                className='react-modal-close'
            >
                <img src={closeImg} alt="Fechar Modal" />
            </button>

            {/* O Container aqui é o formulario, vamos trabalha no onsubmit dele */ }
            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Cadastrar Transação</h2>
                <input 
                    placeholder="Titulo" 
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                />

                <input 
                    type="number"
                    placeholder='Valor'
                    value={value}
                    onChange={event => setValue(Number(event.target.value))}                     
                />

                <TransactionTypeContainer>
                    <RadioBox 
                        type="button"
                        onClick={() =>{setType('deposit');}}
                        /*isActive propriedade do componente, poderia ser qq nome !*/
                        isActive = {type === 'deposit'}
                        activeColor='green'
                    >
                        <img src={incomeImg} alt="Entrada" />
                        <span>Entrada</span>
                    </RadioBox> 

                    <RadioBox 
                        type="button"
                        onClick={() =>{setType('whitdraw');}}
                        isActive = {type === 'whitdraw'}
                        activeColor='red'
                    >
                        <img src={outcomeImg} alt="Saida" />
                        <span>Saida</span>
                    </RadioBox>                     
                </TransactionTypeContainer>

                <input 
                    placeholder='Categoria'
                    value={category}
                    onChange={event => setCategory(event.target.value)}                     
                /> 

                <button type="submit">
                    Cadastrar
                </button>               

            </Container>
        </Modal>        

    );
}