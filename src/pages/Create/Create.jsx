import React, { useState } from 'react';

import TextField from '@material-ui/core/TextField';

import Menu from "../../components/Menu/Menu"
import Button from '@material-ui/core/Button';
import { Form } from '../../assets/index'

import api from '../../api/user'

const Create = () => {

    const [user, setUser] = useState({})

    const handleChange = ({ target: { name, value }}) => {
        setUser(({...user, [name]: value,}))
    }

    const registerSubmit = async (event) => {
        const response = await api.post("/", user);

        console.log(response)
        event.preventDefault();

    }

    return(
        <div>
            <Menu />
            <Form onSubmit={registerSubmit}>
                <h2>Cadastro de novo Usuário</h2>
                <TextField className="text" id="outlined-basic" required label="Nome" variant="outlined" onChange={handleChange} type="text" name="nome" value={user.nome || ''} />
                <TextField className="text" id="outlined-basic" required label="Email" variant="outlined" onChange= {handleChange} type="text" name="email" value={user.email || ''}/>
                <TextField className="text" id="outlined-basic" required label="Telefone" variant="outlined"  onChange={handleChange} type="text" name="phone" value={user.phone || ''}/>
                <Button className="button" variant="contained" type="submit"> Cadastrar </Button>
            </Form>
        </div>
    );
}

export default Create;