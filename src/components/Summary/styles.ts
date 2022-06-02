import styled from "styled-components";

export const Container = styled.div `
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: -10rem;

    div {
        background: var(--shape);
        padding: 1.5rem 2rem;
        border-radius: 0.25rem;
        color: var(--text-light);
        transition: background 0.3s, color 0.3s;

        header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        }
        
        .outBlack{
            display: none;
        }
        .inBlack{
            display: none;
        }

        &.last{
            background: var(--green);
            color: var(--body);
        }
        &.out:hover{
            background: var(--red);
            
            .outBlack{
                display: inline;
            }
            .outWhite{
                display: none;
            }
            
            p, strong{
                color: var(--body);
            }
        }
        &.in:hover{
            background: var(--green);
        
            .inBlack{
                display: inline;
            }
            .inWhite{
                display: none;
            }
        
            p, strong{
                color: var(--body);
            }
        }

    }

    strong {
        display: block;
        margin-top: 1rem;
        font-size: 2rem;
        font-weight: 500;
        line-height: 3rem;
    }


`