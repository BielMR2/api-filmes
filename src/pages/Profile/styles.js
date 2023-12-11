import styled from "styled-components";

export const Container = styled.div`
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 144px;
        background-color: ${({ theme }) => theme.COLORS.PINK_300};
    }

    .backButton {
        position: absolute;
        top: 64px;
        left: 144px;
    
        button {
        background: none;
        border: none;
        color: ${({ theme }) => theme.COLORS.PINK_100}
        }
    }
    
    
    main {
        width: 100%;
        max-width: 340px;
        
        display: flex;
        flex-direction: column;
        gap: 64px;
        
        margin: 51px auto 0;
    }
`

export const Avatar  = styled.div`
    position: relative;
    margin: 0 auto;

    width: 186px; height: 186px;

    > img {
        width: 186px; height: 186px;
        border-radius: 50%
    }

    > label {
        width: 48px;
        height: 48px;

        background-color: ${({ theme }) => theme.COLORS.PINK_100};
        border-radius: 50%;

        display: flex;
        align-items: center;
        justify-content: center;

        position: absolute;
        bottom: 7px;
        right: 7px;

        cursor: pointer;

        input {
            display: none
        }

        svg {
            widows: 20px;
            height: 20px;

            color: ${({ theme }) => theme.COLORS.BLACK};
        }
    }
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap:8px;

    > :nth-child(2) {
        margin-bottom: 24px;
    }

    > button {
        margin-top: 16px;
    }
`

