import React, { useState } from 'react';

import TextField from '@material-ui/core/TextField';

import Menu from "../../components/Menu/Menu"
import Button from '@material-ui/core/Button';
import { Form } from '../../assets/index'

const Create = () => {

    const [user, setuser] = useState({
        nome: '',
        email: '',
        phone: ''
    })

    return(
        <div>
            <Menu />
            <Form>
                <h2>Cadastro de novo Usuário</h2>
                <TextField className="text" id="outlined-basic" label="Nome" variant="outlined" />
                <TextField className="text" id="outlined-basic" label="Email" variant="outlined" />
                <TextField className="text" id="outlined-basic" label="Telefone" variant="outlined" />
                <Button className="button" variant="contained"> Cadastrar </Button>
            </Form>
        </div>
    );
}

export default Create;