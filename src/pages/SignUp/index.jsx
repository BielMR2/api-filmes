import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';

import { api } from '../../services/api'

import { FiUser, FiLock, FiArrowLeft  } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";

import { Container, Main, Form, Background } from './styles'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'



export function SignUp() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    function handleSignUp() {
        if(!name || !email || !password){
            return alert('Preencha todos os campos!')
        }

        api.post('/users', {name, email, password})
        .then(() => {
            alert('Usuário cadastrado com sucesso')
            navigate("/")
        })
        .catch(error => {
            if(error.response){
                alert(error.response.data.message)
            } else {
                alert('Não foi possivel cadastrar.')
            }
        })
    }
    
    return(
        <Container>
            <Main>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Crie sua conta</h2>
                    <Form>
                        <Input
                            icon={FiUser}
                            placeholder="Nome"
                            type="text"
                            onChange={(e) => setName(e.target.value)}
                        />
                        <Input
                            icon={MdOutlineEmail}
                            placeholder="E-mail"
                            type="email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Input
                            icon={FiLock}
                            placeholder="Senha"
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                            onKeyPress={e => e.key == "Enter" && handleSignUp()}
                        />

                        <Button title="Cadastrar" onClick={handleSignUp} />
                    </Form>
            
                <Link to="/">
                    <FiArrowLeft /> Voltar para o login
                </Link>
            </Main>

            <Background />
        </Container>  
    )
}