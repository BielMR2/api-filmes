import styled from "styled-components";

export const Container = styled.div`
    padding: 0 123px;

    .topButtons {
        display: flex;
        flex-direction: row;
    }

    > button {
        background: none;
        border: none;

        color: ${({ theme }) => theme.COLORS.PINK_100}
    }

    > h1 {
        margin: 24px 0 40px;

        font-size: 36px;
        font-weight: 500;
    }

    .inputs {
        display: flex;
        justify-content: space-between;
        gap: 40px
    }

    > h2 {
        margin: 40px 0 24px;
    }

    .tags {
        width: 100%;
        
        padding: 16px;
        border-radius: 8px;

        display: flex;
        flex-wrap: wrap;
        gap: 24px;

        background: ${({ theme }) => theme.COLORS.BLACK};
    }

    .buttons {
        display: flex;
        justify-content: space-between;
        gap: 40px;

        margin-top: 40px;
    }

`