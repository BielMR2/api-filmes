import { MdAdd, MdOutlineClear } from "react-icons/md";

import { Container } from "./styles";

export function NoteItem({ isNew, value, onClick, ...rest }) {
    function handleButtonCLick() {
        onClick(value)
    }

    return (
        <Container $isNew={isNew}>
            <input 
                type="text"
                value={value}
                readOnly={!isNew}
                {...rest}
            />

            <button
                type="button"
                onClick={handleButtonCLick}
                className={isNew ? "button-add" : "button-delete"}
            >
                { isNew ? <MdAdd/> : <MdOutlineClear/> }
            </button>
        </Container>    
    )
}