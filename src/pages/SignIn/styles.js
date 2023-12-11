import styled from "styled-components";
import backgroundImg from '../../assets/BG.png'

export const Container = styled.div`
    height: 100vh;

    display: flex;
    align-items: stretch;
`;

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

    justify-content: center;
    align-content: center;

    width: 100%;
    max-width: 637px;

    & * {
        max-width: 340px
    }

    > h1 {
        font-size: 48px;
        font-weight: 700;
        color: ${({ theme }) => theme.COLORS.PINK_100}
    }

    > p {
        font-size: 14px;
        color: ${({ theme }) => theme.COLORS.GRAY_300}
    }

    > h2 {
        font-size: 24px;
        font-weight: 500;
        color: ${({ theme }) => theme.COLORS.WHITE};

        margin: 48px 0 
    }

    > a {
        margin: 42px auto 0;

        color: ${({ theme }) => theme.COLORS.PINK_100};
    }

`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 8px;

    > button {
        margin-top: 8px;
    }
`

export const Background = styled.div`
    flex: 1;
    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;
`