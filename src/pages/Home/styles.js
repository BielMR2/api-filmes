import styled from "styled-components"


export const Container = styled.div`
    padding: 0 123px;
    height: 100%;

    > .off {
        pointer-events: none;
    }
`

export const TopHeader = styled.div`
    display: flex;
    justify-content: space-between;

    margin-bottom: 37px;

    .topButtons {
        display: flex;
        flex-direction: row;
        gap: 20px;

        button {
            max-height: 48px;
            padding: 16px 80px;

            white-space: nowrap;
        }
    }
`

export const Content = styled.div`
    
`

export const ScreenAddFilter = styled.div`
    position: fixed;
    top: 220px;
    right: 82.5px;

    height: calc(100vh - 300px);
    max-width: 400px;

    padding: 30px;

    background-color: ${({ theme }) => theme.COLORS.BLACKGRAY};

    border-radius: 20px;

    header {
        display: flex;
        justify-content: space-between;
        padding-bottom: 30px;

        button {
            max-width: 337px;
            max-height: 53px;
        }
    }

    & .tags {
        width: 100%;
        
        padding: 16px;
        border-radius: 8px;

        display: flex;
        flex-wrap: wrap;
        gap: 24px;

        div {
            width: 400px;
            justify-content: space-between
        }
    }
`