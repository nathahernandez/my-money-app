import styled from "styled-components";

export const Container =  styled.form `
    h2 {    
        font-size: 1.6rem; 
        color: var(--text-light);
        margin-bottom: 1.6rem;
        font-weight: bold;
        color: var(--green);
        font-family: 'Montserrat', sans-serif;
    }

    input {
        width: 100%;
        padding: 0 1.25rem;
        height: 3.5rem;
        border-radius: 0.25rem;
        color: var(--body);
        background: var(--text-light);
        font-size: 1rem;
        border: none;

        &::placeholder{
            color: var(--body);
            opacity: 0.5;
        }

        & + input {
            margin-top: 1rem;
        }
    }
    input[type="submit"] {
            width: 100%;
            padding: 0 1.5rem;
            height: 3.5rem;
            background: var(--body);
            color: var(--text-light);
            border-radius: 0.25rem;
            border: 0;
            cursor: pointer;
            font-size: 1rem;
            font-weight: bold;
            transition: background 0.2s, color 0.2s;
            &:hover{
                background: var(--green);
                color: var(--body);
            }

    }

`;

export const TypeContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 1rem 0;
    grid-gap: 0.5rem;
    .inBlack{
        display: none;
    }
    .outBlack{
        display: none;
    }
    .deposit:hover{
        background: var(--green);
        color: var(--body);
        transition: background 0.2s, display 0.2s;
        .inBlack{
            display: inline;
        }
        .inWhite{
            display: none;
        }
    }
    .withdraw:hover{
        background: var(--red);
        color: var(--body);
        transition: background 0.2s, display 0.2s;
        .outBlack{
            display: inline;
        }
        .outWhite{
            display: none;
        }
    }

    button{
        display: flex;
        justify-content: center;
        align-items: center;
        height : 3.5rem;
        border: none;
        border-radius: 0.25rem;
        img{
            width: 20px;
            height: 20px;
        }
        span{
            display: inline-block;
            margin-left: 0.75rem;
            color: var(--body);
        }
    }
    
`;