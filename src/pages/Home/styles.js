import styled from "styled-components"


export const Container = styled.div`
    padding: 0 123px;

    > .static {
        background-color: red
    }

    > .moveable {
        overflow-y: auto;
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