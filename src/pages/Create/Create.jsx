import React, { useState } from 'react';

import TextField from '@material-ui/core/TextField';

import Menu from "../../components/Menu/Menu"
import Button from '@material-ui/core/Button';
import { Form } from '../../assets/index'
import { useNavigate } from 'react-router';

import api from '../../api/user'

const Create = () => {

    const [user, setUser] = useState({})
    const navigate = useNavigate();

    const handleChange = ({ target: { name, value }}) => {
        setUser(({...user, [name]: value,}))
    }

    const registerSubmit = async () => {
        await api.post("/", user);

        navigate(-1);
    }

    return(
        <div>
            <Menu />
            <Form onSubmit={registerSubmit}>
                <h2>Cadastro de novo Usuário</h2>
                <TextField className="text" id="outlined-basic" required label="Nome" variant="outlined" onChange={handleChange} type="text" name="nome" value={user.nome || ''} />
                <TextField className="text" id="outlined-basic" required label="Email" variant="outlined" onChange= {handleChange} type="text" name="email" value={user.email || ''}/>
                <TextField className="text" id="outlined-basic" required label="Telefone" variant="outlined"  onChange={handleChange} type="text" name="phone" value={user.phone || ''}/>
                <Button className="button" variant="contained" type="submit" color="secondary"> Cadastrar </Button>
            </Form>
        </div>
    );
}

export default Create;