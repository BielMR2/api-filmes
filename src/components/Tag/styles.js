import styled from "styled-components";

export const Container = styled.span`
    font-size: 12px;
    font-family: Roboto;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    background-color: ${({ theme }) => theme.COLORS.GRAY_900};

    padding: 5px 16px;
    margin-right: 8px;

    border-radius: 8px;
`