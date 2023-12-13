import styled from "styled-components";

export const Container = styled.div`
    padding: 0 123px;    

    grid-template-areas:
    "header"
    "content";

    > main {
        grid-area: content;

        > p {
            text-align: justify;
            hyphens: auto
        }
    }

    .tags {
        margin: 40px 0;

        & > * {
            background-color: ${({ theme }) => theme.COLORS.PINK_300};
            padding: 8px 16px;
        }
    }
`


export const Title = styled.div`
    display: flex;
    gap: 19px;

    margin: 24px 0;
`

export const DateProfile = styled.div`
    display: flex;
    gap: 16px;

    p {
            font-family: Roboto;
        }

    .user {
        display: flex;
        align-content: center;
        flex-wrap: wrap;

        gap: 8px;

        > img {
            width: 20px;
            border-radius: 50%;
        }
    }

    .time {
        display: flex;
        gap: 8px;

        > svg {
            width: 20px; height: 20px;
            color: ${({ theme }) => theme.COLORS.PINK_100}
        }
    }
`

export const ControllerButtons = styled.div`
    display: flex;

    button {
        background: none;
        border: none;

        color: ${({ theme }) => theme.COLORS.PINK_100};

        svg {
            margin-right: 5px;
        }
    }

    .delete-button, .back-button {
        display: flex;
        align-items: center;
        padding-right: 20px;

    }
`