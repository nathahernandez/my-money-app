import styled from "styled-components";

export const Container = styled.header `
    background: var(--body);

`;
export const Content = styled.div `
    max-width: 1120px;
    margin: 0 auto;
    padding: 2rem 1rem 12rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    button{
        font-size: 1rem;
        color: #F2F2F2;
        background: var(--shape);
        border: 0;
        padding: 0 2rem;
        border-radius: 0.25rem;
        height: 3rem;
        transition: background 0.2s, color 0.2s;
        &:hover{
            background: var(--green);
            color: var(--body);
        }
    }
    .Logo {
        display: flex;
        align-items: center;
        p {
            margin-left: 1rem;
            font-size: 1.75rem;
            color: #3DDAB4;
            font-family: 'Montserrat', sans-serif;
        }
    }
`;