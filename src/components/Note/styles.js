import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 15px;

    padding: 32px;
    margin-bottom: 24px;

    border-radius: 16px;
    background-color: ${({ theme }) => theme.COLORS.PINK_300};

    > div > h1 {
        font-size: 24px;
        font-weight: 700;
        color: ${({ theme }) => theme.COLORS.WHITE};

        margin-bottom: 8px;
    }


    > p {
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;

        font-family: Roboto;
        color: ${({ theme }) => theme.COLORS.GRAY_700};
    }
`