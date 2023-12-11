import { useState } from "react";
import { Link } from 'react-router-dom';

import { useAuth } from '../../hooks/auth'

import { FiLock } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";

import { Container, Main, Form, Background } from './styles'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'



export function SignIn() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const { signIn } = useAuth()
    
    function handleSignIn() {
        signIn({ email, password })
    }


    return(
        <Container>
            <Main>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Faça seu login</h2>
                    <Form>
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
                            onKeyPress={(e) => e.key == 'Enter' && handleSignIn()}
                        />

                        <Button title="Entrar" onClick={handleSignIn} />
                    </Form>
            
                <Link to="/register">
                    Criar conta
                </Link>
            </Main>

            <Background />
        </Container>  
    )
}