import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { api } from "../../services/api";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Note } from "../../components/Note";
import { NoteItem } from '../../components/NoteItem'

import { IoMdAdd, IoIosSend } from "react-icons/io";
import { FcDataConfiguration } from "react-icons/fc";
import { IoExitOutline } from "react-icons/io5";

import { Container, TopHeader, Content, ScreenAddFilter } from "./styles";

export function Home() {
    const [notes, setNotes] = useState([])
    const [search, setSearch] = useState('')
    
    const [tags, setTags] = useState([])
    const [newTag, setNewTag] = useState('')

    const [filterScreen, setFilterScreen] = useState(false)

    const navigate = useNavigate()

    const main = document.querySelector('.main')

    function handleDetails(note_id) {
        navigate(`/details/${note_id}`)
    }

    function handleFilter(filterScreen) {
        filterScreen ? main.classList.add('off') : main.classList.remove('off')
        
        setFilterScreen(filterScreen)
    }

    function handleAddTag(value) {
        if(!value){
            return alert("Você não pode enviar uma tag vazia")
        }
        setTags(prevState => [...prevState, newTag])
        setNewTag('')
    }

    function handleRemoveTag(deleted) {
        setTags(prevState => prevState.filter(tag => tag !== deleted))
    }

    
    useEffect(() => {
        async function fetchNotes() {
            const response = await api.get(`/notes?title=${search}&tags=${tags}`)
            setNotes(response.data)
        }

        fetchNotes()
    }, [tags, search])

    return(
        <Container>
            {
                filterScreen &&
                <ScreenAddFilter>
                        <header>
                            <Button 
                                title="Fechar" 
                                icon={IoExitOutline}
                                data={"off"}
                                onClick={() => handleFilter(!filterScreen)}    
                            />
                        </header>

                        <div className='tags'>
                            {
                            tags.map((tag, index) => (
                                    <NoteItem
                                    key={String(index)}
                                    value={tag}
                                    onClick={() => handleRemoveTag(tag)}
                                />    
                            ))
                            }

                            <NoteItem 
                                isNew 
                                placeholder="Novo marcador" 
                                value={newTag}
                                onChange={e => setNewTag(e.target.value)}
                                onClick={() => handleAddTag(newTag)} 
                                onKeyPress={e => (e.key) == "Enter" && handleAddTag(newTag)}
                            />
                        </div>
                </ScreenAddFilter>  
            }

        <div className="main">
            <Header haveInput onChange={(e) => setSearch(e.target.value)} />

            <TopHeader>
            <h1>Meus filmes</h1>
            <div className="topButtons">
                <Button 
                    title="Criar nota" 
                    onClick={() => navigate("/new")} 
                    icon={FcDataConfiguration} 
                />
                <Button 
                    title="Adicionar filtro" 
                    icon={IoMdAdd}
                    data={"off"}
                    onClick={() => handleFilter(!filterScreen)}    
                />
            </div>
            </TopHeader>

            <Content>
            {
                notes.map((note) => (
                    <Note
                        key={String(note.id)}
                        data={note}
                        onClick={() => handleDetails(note.id)}
                    />
                ))
            }
            </Content>
        </div>
        </Container>
    )
}