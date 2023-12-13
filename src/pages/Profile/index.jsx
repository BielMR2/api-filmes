import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";


import { Container, Form, Avatar } from "./styles"
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { FiUser, FiLock, FiArrowLeft, FiCamera  } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

export function Profile() {
    const { user, updateProfile } = useAuth()

    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)

    const [oldPassword, setOldPassword] = useState()
    const [newPassword, setNewPassword] = useState()

    const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

    const [avatar, setAvatar] = useState(avatarURL)
    const [avatarFile, setAvatarFile] = useState(null)

    const navigate = useNavigate()

    function handleBack() {
        navigate(-1)
    }

    async function handleUpdated() {
        const updated = {
            name,
            email,
            password: newPassword,
            oldpassword: oldPassword
        }

        const userUpdated = Object.assign(user, updated)

        await updateProfile({ user: userUpdated, avatarFile })
    }

    function handleChangeAvatar(e) {
        const file = e.target.files[0]
        setAvatarFile(file)

        const imagePreview = URL.createObjectURL(file)
        console.log(imagePreview)
        setAvatar(imagePreview) 

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
                        src={avatar}
                        alt="Foto de perfil"
                    />

                    <label htmlFor="avatar">
                        <FiCamera/>

                        <input
                            id='avatar'
                            type="file"
                            onChange={handleChangeAvatar}
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
                        type="password"
                        icon={FiLock}
                        onChange={e => setOldPassword(e.target.value)}
                    />
                    <Input
                        placeholder="Nova senha"
                        type="password"
                        icon={FiLock}
                        onChange={e => setNewPassword(e.target.value)}
                    />
                    <Button
                        title="Salvar"
                        onClick={handleUpdated}
                    />
                </Form>
            </main>
        </Container>
    )
}