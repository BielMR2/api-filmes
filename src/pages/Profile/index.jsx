import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Container, Form, Avatar } from "./styles"
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { FiUser, FiLock, FiArrowLeft, FiCamera  } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

export function Profile() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [oldPassword, setOldPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")


    const navigate = useNavigate()

    function handleBack() {
        navigate(-1)
    }

    return(
        <Container>
            <div className="backButton">
                <button onClick={handleBack}>
                    <FiArrowLeft /> Voltar
                </button>
            </div>


            <main>
                <Avatar>
                    <img
                        src={avatarPlaceholder}
                        alt="Foto de perfil"
                    />

                    <label htmlFor="avatar">
                        <FiCamera/>

                        <input
                            id='avatar'
                            type="file"
                            onChange={() => {}}
                        />
                    </label>
                </Avatar>

                <Form>
                    <Input
                        placeholder="Nome"
                        type="text"
                        icon={FiUser}
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <Input
                        placeholder="E-mail"
                        type="email"
                        icon={MdOutlineEmail}
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Input
                        placeholder="Senha atual"
                        type="text"
                        icon={FiLock}
                        onChange={e => setOldPassword(e.target.value)}
                    />
                    <Input
                        placeholder="Nova senha"
                        type="text"
                        icon={FiLock}
                        onChange={e => setNewPassword(e.target.value)}
                    />
                    <Button
                        title="Salvar"
                        onClick={() => {}}
                    />
                </Form>
            </main>
        </Container>
    )
}