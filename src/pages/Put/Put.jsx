import React, { useState, useEffect } from 'react';

import TextField from '@material-ui/core/TextField';

import Menu from "../../components/Menu/Menu"
import Button from '@material-ui/core/Button'
import { Form } from '../../assets/index'
import { useParams } from 'react-router-dom'

import api from '../../api/user'
import { useNavigate } from 'react-router';


const Put = () => {

    const [user, setUser] = useState({})
    const params = useParams()
    const navigate = useNavigate();

    const handleChange = ({ target: { name, value } }) => {
        setUser(({ ...user, [name]: value, }))
    }

    const getUser = async () => {

        const response = await api.get(`/${params.userId}`)

        console.log(response)
        setUser(response.data)
        return response.data
    }

    useEffect(() => {
        getUser()
    }, [])

    const registerSubmit = async () => {
        await api.put(`/${params.userId}`, user);

        navigate("/");
    }



    return (
        <div>
            <Menu />
            <Form onSubmit={registerSubmit}>
                <h2>Editar Usuário Existente</h2>
                <TextField className="text" id="outlined-basic" required label="Nome" variant="outlined" onChange={handleChange} type="text" name="nome" value={user.nome || ''} />
                <TextField className="text" id="outlined-basic" required label="Email" variant="outlined" onChange={handleChange} type="text" name="email" value={user.email || ''} disabled/>
                <TextField className="text" id="outlined-basic" required label="Telefone" variant="outlined" onChange={handleChange} type="text" name="phone" value={user.phone || ''} />
                <Button className="button" variant="contained" type="submit" color="secondary" type="submit"> Salvar Alterações </Button>
            </Form>
        </div>
    );
}

export default Put;