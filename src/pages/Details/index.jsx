import { api } from "../../services/api"
import { useState, useEffect } from "react";
import { useAuth } from "../../hooks/auth"

import { useNavigate, useParams } from 'react-router-dom';

import { Container, ControllerButtons, Title, DateProfile } from "./styles";

import { Header } from '../../components/Header'
import { EvaluationField } from '../../components/EvaluationField'
import { Tag } from "../../components/Tag";

import { FiArrowLeft } from "react-icons/fi";
import { IoStarOutline } from "react-icons/io5";
import { WiTime3 } from "react-icons/wi";
import { MdOutlineClear } from "react-icons/md";

import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

export function Details() {
    const { user } = useAuth()
    const [data, setData] = useState({})

    const params = useParams()
    
    const navigate = useNavigate()

    const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

    const dateObject = new Date(data.created_at)

    const day = dateObject.getDate()
    const month = dateObject.getMonth() + 1
    const year = dateObject.getFullYear() % 100
    const time = dateObject.toLocaleTimeString();

    const formattedDate = `${day}/${month}/${year} às ${time}`

    function handleBack() {
        navigate(-1)
    }

    async function handleDelete() {
        try {
            const confirm = window.confirm("Deseja realmente remover a note?")

            if(confirm){
            await api.delete(`/notes/${params.id}`)
            navigate("/")
    }
        } catch (error) {
            alert(error)
        }

        navigate(-1)
    }


    useEffect(() => {
        async function fetchNote() {
            const response = await api.get(`/notes/${params.id}`)
            setData(response.data)
        }

        fetchNote()
    }, [])

    return(
        <Container>
            <Header/>

            <ControllerButtons>
                <button className="back-button" onClick={handleBack}>
                    <FiArrowLeft /> Voltar
                </button>

                <button className="delete-button" onClick={handleDelete}>
                    <MdOutlineClear /> Excluir nota
                </button>
            </ControllerButtons>
            
            {
                data &&
                <main>
                    <Title>
                        <h1>{data.title}</h1>
                        <EvaluationField onlyView data={data.rating} >
                            <IoStarOutline data={1} />
                            <IoStarOutline data={2} />
                            <IoStarOutline data={3} />
                            <IoStarOutline data={4} />
                            <IoStarOutline data={5} />
                        </EvaluationField>
                    </Title>

                    <DateProfile>
                        <div className="user">
                            <img
                                src={avatarURL}
                                alt="Foto do usuário"
                            />
                            <p>Por {user.name}</p>
                        </div>
                        <div className="time">
                            <WiTime3 />
                            <p>{formattedDate}</p>
                        </div>
                    </DateProfile>

                    {
                        data.tags &&
                        <div className="tags">
                            {data.tags.map((tag) => (
                                <Tag key={tag.id}  title={tag.name} />
                            ))}
                        </div>  
                    }
                             

                    <p>{data.description}</p>
                </main>
            }
        </Container>
    )
}