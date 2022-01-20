import { darken, transparentize } from "polished";
import styled from "styled-components";

export const Container = styled.form`

h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom:2rem;
}

input{
    width: 91%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;

    border: 1px solid #d7d7d7;
    background: #e7e9ee;

    font-weight: 400;
    font-size: 1rem;

    &::placeholder{
        color: var(--text-body);        
    }

    & + input{
        margin-top: 1rem;
    }

}

button[type="submit"]{
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem ;
    color: #FFF;
    background: var(--green);
    border: 0;
    font-size: 1rem;
    margin-top: 1.5rem;

    font-weight: 600;

    transition: 2s;
    &:hover{
        filter: brightness(0.9);        
    }
}
`;

export const TransactionTypeContainer = styled.div`
    margin: 1rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
`;

interface RadioBoxProps{
    isActive:Boolean;
    activeColor: 'green' | 'red';
}

const colors = {    
    /*Como iremos passar ali em baixo via javaScript não pode ser as variaveis globais nao reconhece*/
    green : '#33CC95',
    red : '#E52E4D'
}

export const RadioBox = styled.button<RadioBoxProps>`
        height: 4rem;
        border: 1px solid #d7d7d7;
        border-radius: 0.25rem;

        /*Setar background de acordo com a propriedade selecionada via styled components*/
        background: ${(props) => props.isActive 
        ? transparentize(0.9, colors[props.activeColor])
        : 'transparent'};

        display: flex;
        align-items: center;
        justify-content: center;

        transition: border-color 0.2s;

        &:hover{
            /**Instalei yarn add polished  -> import { darken } from "polished";*/    
            border-color: ${darken(0.1, '#d7d7d7')};
        }

        img{
            width: 20px;
            height: 20px;
        }

        span{
            display: inline-block;
            margin-left: 1rem;
            font-size: 1rem;
            color: var(--text-title);
        }
`;

