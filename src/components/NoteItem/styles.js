import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-content: center;

    background-color: ${({ theme, $isNew }) => $isNew ? "transparent" : theme.COLORS.BACKGROUND_700};
    color: ${({ theme }) => theme.COLORS.GRAY_300};

    border: ${({ theme, $isNew }) => $isNew ? `2px dashed ${theme.COLORS.GRAY_500}` : "none" };
    border-radius: 10px;

    padding: 0 16px;

    .button-add {
        
    }

    > input {
        background-color: transparent;

        color: ${({ theme }) => theme.COLORS.WHITE};

        border: none;
        border-radius: 10px;

        padding: 16px 0;
    }

    > button {
        background: none;
        border: none;
        color: ${({ theme }) => theme.COLORS.PINK_100};

        > svg {
            width: 24px; height: 22px;
        }
    }
`