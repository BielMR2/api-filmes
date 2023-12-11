import styled from "styled-components";

export const Container = styled.textarea`
    width: 100%;
    height: 230px;

    padding: 19px 16px;
    margin-top: 40px;
    resize: none;

    color: ${({ theme }) => theme.COLORS.GRAY_500};
    background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    border: none;
    border-radius: 10px;
`