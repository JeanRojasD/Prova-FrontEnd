import React from 'react';

import TextField from '@material-ui/core/TextField';

import Menu from "../../components/Menu/Menu"
import Button from '@material-ui/core/Button';
import { Form } from '../../assets/index'

const Put = () => {
    return(
        <div>
            <Menu />
            <Form>
                <h2>Editar Usuário Existente</h2>
                <TextField className="text" id="outlined-basic" label="Nome" variant="outlined" />
                <TextField className="text" id="outlined-basic" label="Email" variant="outlined" />
                <TextField className="text" id="outlined-basic" label="Telefone" variant="outlined" />
                <Button className="button" variant="contained"> Salvar Alterações </Button>
            </Form>
        </div>
    );
}

export default Put;