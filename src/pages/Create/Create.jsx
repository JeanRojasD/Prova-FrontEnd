import React, { useState } from 'react';

import TextField from '@material-ui/core/TextField';

import Menu from "../../components/Menu/Menu"
import Button from '@material-ui/core/Button';
import { Form } from '../../assets/index'

const Create = () => {

    const [user, setUser] = useState({
        nome: '',
        email: '',
        phone: ''
    })

    const registerSubmit = (event) => {
        console.log(user)

        event.preventDefault();

    }

    return(
        <div>
            <Menu />
            <Form onSubmit={registerSubmit}>
                <h2>Cadastro de novo Usuário</h2>
                <TextField className="text" id="outlined-basic" required label="Nome" variant="outlined" onChange={e => setUser(e.target.value)} type="text" value={user.nome} />
                <TextField className="text" id="outlined-basic" required label="Email" variant="outlined" onChange= {e => setUser(e.target.value)} type="text" value={user.email}/>
                <TextField className="text" id="outlined-basic" required label="Telefone" variant="outlined"  onChange={e => setUser(e.target.value)} type="text" value={user.phone}/>
                <Button className="button" variant="contained" type="submit"> Cadastrar </Button>
            </Form>
        </div>
    );
}

export default Create;