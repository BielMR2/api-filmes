import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import { api } from '../../services/api';

import { Container } from "./styles";

import { Header } from "../../components/Header";
import { Input } from '../../components/Input';
import { TextInput } from '../../components/TextInput';
import { NoteItem } from '../../components/NoteItem';
import { Button } from '../../components/Button';

import { FiArrowLeft  } from "react-icons/fi";

export function New() {
    const [title, setTitle] = useState('')
    const [rating, setRating] = useState(0)
    const [description, setDescription] = useState('')

    const [tags, setTags] = useState([])
    const [newTag, setNewTag] = useState('')

    const navigate = useNavigate()

    function handleBack() {
        navigate(-1)
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

    async function handleNewNote() {
        if(!title){
            return alert("Digite o título da nota")
        }
        if(!rating){
            return alert("Coloque a nota da nota")
        }
        if(newTag){
            alert("Você deixou uma tag no campo para adicionar, mas nao clicou em adicinar. Clique para adicionar ou deixe o campo vazio")
        }


        await api.post("/notes", {
            title,
            description,
            rating,
            tags
        })
        .then(() => {
            alert("Nota criada com sucesso!")
            navigate("/")
        })
        .catch(error => {
            if(error.response){
                alert(error.response.data.message)
            } else {
                alert(error)
            }
        })

        
    }

    return(
        <Container>
            <Header />

            <button onClick={handleBack}>
                    <FiArrowLeft /> Voltar
            </button>

            <h1>Novo filme</h1>

            <div className='inputs'>
                <Input 
                    placeholder="Título" 
                    onChange={e => setTitle(e.target.value)} 
                />
                <Input 
                    placeholder="Sua nota (de 0 a 5)"
                    onChange={e => setRating(e.target.value)} 
                />
            </div>

            <TextInput 
                placeholder="Observações"
                onChange={e => setDescription(e.target.value)} 
            />

            <h2>Marcadores</h2>
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

            <div className='buttons'>
                <Button 
                    title="Salvar alterações" 
                    onClick={handleNewNote}    
                />
            </div>

        </Container>
    )
}