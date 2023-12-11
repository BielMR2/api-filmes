import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    grid-area: header;

    width: 100%;
    height: 104px;

    gap: 64px;

    padding: 24px 0;
    margin: 0 auto 45px;

    border-bottom: 2px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};

    > h1 {
        color: ${({ theme }) => theme.COLORS.PINK_100};
        font-size: 24px;
        font-weight: 700;
    }

    
`

export const Profile = styled.div`
    height: 100%;

    display: flex;
    gap: 9px;

    > div {
        display: flex;
        flex-direction: column;
        justify-content: center;

        white-space: nowrap;
        
        h2 {
            color: ${({ theme }) => theme.COLORS.WHITE};
            font-size: 14px;
            font-weight: 700;
        }
    }

    > img {
    
    }
`

export const Logout = styled.button`
    width: 100%;

    background: none;
    border: none;
    color: ${({ theme }) => theme.COLORS.GRAY_500};
    font-size: 14px;

    display: flex;
    justify-content: flex-end
`