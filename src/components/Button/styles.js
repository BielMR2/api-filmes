import styled from "styled-components";

export const Container = styled.button`
    width: 100%;

    display: flex;
    flex-direction: row;
    gap: 10px;

    background-color: ${({ theme, $darkMode }) => $darkMode ? theme.COLORS.BLACK : theme.COLORS.PINK_100};
    color:${({ theme, $darkMode }) => $darkMode ? theme.COLORS.PINK_100 : theme.COLORS.BACKGROUND_900};

    display: flex;
    align-items: center;
    justify-content: center;
    
    padding: 16px 127px;

    border: 0;
    border-radius: 10px;

    font-weight: 500;
    font-family: Roboto Slab;
`