import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    gap: 6px;

    > li {
        list-style-type: none;

        margin: auto 0;

        > svg {
        color: ${({ theme }) => theme.COLORS.PINK_100};
        width: 20px; height: 20px
    }
    } 
`