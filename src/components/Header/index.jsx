import { api } from "../../services/api"
import { useAuth } from "../../hooks/auth"

import { useNavigate } from "react-router-dom"

import { Container, Profile, Logout } from "./styles"
import { Input } from "../Input"

import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

export function Header({ haveInput }){
    const { signOut, user } = useAuth()
    const navigate = useNavigate()

    const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

    function handleSignOut() {
        navigate("/")
        signOut()
    }

    function handleOpenProfile(user_id) {
        navigate(`/profile/${user_id}`)
    }

    return(
        <Container>
            <h1>RocketMovies</h1>

            {haveInput && 
                <Input 
                placeholder="Pesquisar pelo título"
                type="text"
                />
            }
            

            <Profile>
                <div>
                    <h2 onClick={handleOpenProfile} >{user.name}</h2>
                    <Logout onClick={handleSignOut}>
                        Sair
                    </Logout>
                </div>

                <img
                    src={avatarURL}
                    alt="Foto do usuário"
                    onClick={handleOpenProfile}
                />
            </Profile>


        </Container>    
    )
}