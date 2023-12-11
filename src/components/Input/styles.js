import styled from "styled-components";


export const Container = styled.div`
    width: 100%;

    display: flex;
    align-items: center;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    border-radius: 10px;

    > input {
        width: 100%; height: 56px;

        padding: 16px;

        color: ${({ theme }) => theme.COLORS.GRAY_500};
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
        border: 0;
        border-radius: 10px;

        &.placeholder {
            color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
        }

    }
    > svg {
            margin-left: 16px;
            color: ${({ theme }) => theme.COLORS.GRAY_500};
        }
`