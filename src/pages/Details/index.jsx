import { api } from "../../services/api"

import { useNavigate } from 'react-router-dom';

import { Container, ControllerButtons, Title, DateProfile } from "./styles";

import { Header } from '../../components/Header'
import { EvaluationField } from '../../components/EvaluationField'
import { Tag } from "../../components/Tag";

import { FiArrowLeft  } from "react-icons/fi";
import { IoStarOutline } from "react-icons/io5";
import { WiTime3 } from "react-icons/wi";
import { MdOutlineClear } from "react-icons/md";

import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

export function Details() {
    let data = {
        title: "Interestellar",
        description: `Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o "fantasma" é uma inteligência desconhecida que está enviando mensagens codificadas através de radiação gravitacional, deixando coordenadas em binário que os levam até uma instalação secreta da NASA liderada pelo professor John Brand. O cientista revela que um buraco de minhoca foi aberto perto de Saturno e que ele leva a planetas que podem oferecer condições de sobrevivência para a espécie humana. As "missões Lázaro" enviadas anos antes identificaram três planetas potencialmente habitáveis orbitando o buraco negro Gargântua: Miller, Edmunds e Mann – nomeados em homenagem aos astronautas que os pesquisaram. Brand recruta Cooper para pilotar a nave espacial Endurance e recuperar os dados dos astronautas; se um dos planetas se mostrar habitável, a humanidade irá seguir para ele na instalação da NASA, que é na realidade uma enorme estação espacial. A partida de Cooper devasta Murphy.
        Além de Cooper, a tripulação da Endurance é formada pela bióloga Amelia, filha de Brand; o cientista Romilly, o físico planetário Doyle, além dos robôs TARS e CASE. Eles entram no buraco de minhoca e se dirigem a Miller, porém descobrem que o planeta possui enorme dilatação gravitacional temporal por estar tão perto de Gargântua: cada hora na superfície equivale a sete anos na Terra. Eles entram em Miller e descobrem que é inóspito já que é coberto por um oceano raso e agitado por ondas enormes. Uma onda atinge a tripulação enquanto Amelia tenta recuperar os dados de Miller, matando Doyle e atrasando a partida. Ao voltarem para a Endurance, Cooper e Amelia descobrem que 23 anos se passaram.
        `,
        rating: 4,
        created_at: "2023-10-26 22:00:06",
        tags: [
            { id: 1, name: "Ficção Científica" },
            { id: 2, name: "Drama" },
            { id: 3, name: "Família" }
        ]
    };
    let user = {
        name: "Rodrigo Gonçalves",

    }





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

    function handleDelete() {
        try {
            
        } catch (error) {
            alert(error)
        }

        navigate(-1)
    }


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

                    <div className="tags">
                        {data.tags.map((tag) => (
                            <Tag key={tag.id}  title={tag.name} />
                        ))}
                    </div>

                    <p>{data.description}</p>
                </main>
            }
        </Container>
    )
}