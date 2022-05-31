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
        color: #FFF;
        background: var(--blue-button);
        border: 0;
        padding: 0 2rem;
        border-radius: 0.25rem;
        height: 3rem;
        transition: filter 0.2s;
        &:hover{
            filter: brightness(0.7);
        }
    }
    .Logo {
        display: flex;
        align-items: center;
        p {
            margin-left: 1rem;
            font-size: 1.5rem;
            color: var(--shape);
            font-weight: bold;
        }
    }
`;