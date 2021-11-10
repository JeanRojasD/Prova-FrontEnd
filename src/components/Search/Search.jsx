import React from "react";
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components'

const TextInput = styled.div`
    width: 100%;
    margin-top: 50px;

    .text{
        width: 100%;
    }
`

const Search = () => {
    return(
        <TextInput>
            <TextField className="text" id="outlined-basic" label="Pesquisar" variant="outlined" />
        </TextInput>
    );
    
}

export default Search;