import { useNavigate } from "react-router-dom";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Note } from "../../components/Note";

import { IoMdAdd } from "react-icons/io";
import { FcDataConfiguration } from "react-icons/fc";

import { Container, TopHeader, Content } from "./styles";

export function Home() {
    


    const navigate = useNavigate()

    function handleClick(note_id) {
        navigate(`/details/${note_id}`)
    }


    return(
        <Container>
            <Header haveInput />

            <div className="moveable">
            <TopHeader>
                <h1>Meus filmes</h1>
                <div className="topButtons">
                    <Button 
                        title="Criar nota" 
                        onClick={() => navigate("/new")} 
                        icon={FcDataConfiguration} 
                    />
                    <Button title="Adicionar filtro" icon={IoMdAdd} />
                </div>
            </TopHeader>

            <Content>
                {}
            </Content>
            </div>     
        </Container>
    )
}