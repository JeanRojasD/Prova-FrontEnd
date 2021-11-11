import React, { useEffect, useState } from "react";

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

import styled from 'styled-components'


import api from '../../api/user'


const TextInput = styled.div`
    width: 100%;
    margin-top: 50px;

    .text{
        width: 100%;
    }
`

const TableComponent = () => {

  const [data, setData] = useState([])
  const [search, setSearch] = useState("")

  const getData = async () => {

    const response = await api.get("/")

    console.log(response)
    setData(response.data)
    return response.data
  }

  useEffect(() => {
    getData()
  }, [])

  const onDelete = async (id) => {

    await api.delete(`/${id}`)

    window.location.reload();
  }

  return (
    <div className="listmap">
      <TextInput>
        <TextField className="text" id="outlined-basic" label="Pesquisar" type="text" variant="outlined" onChange={(event) => { setSearch(event.target.value) }} />
      </TextInput>
      <TableContainer className="listmap-container">
        <Table aria-label="a dense table">
          <TableHead>
            <TableRow className="color">
              <TableCell align="left">Id</TableCell>
              <TableCell align="left">Nome</TableCell>
              <TableCell align="left">E-mail</TableCell>
              <TableCell align="left">Telefone</TableCell>
              <TableCell align="center">Editar</TableCell>
              <TableCell align="center">Deletar</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.filter((user) => {
              if (search === "") {
                return user
              } else if (user.nome.toLowerCase().includes(search.toLowerCase())) {
                return user
              }
            }).map((user, key) => {
              return (
                <TableRow key={user.id}>
                  <TableCell>{user.id}</TableCell>
                  <TableCell>{user.nome}</TableCell>
                  <TableCell align="left">{user.email}</TableCell>
                  <TableCell align="left">{user.phone}</TableCell>
                  <TableCell align="center">
                    <Link to={{ pathname: `/edit/${user.id}` }}><Button variant="contained" color="secondary">Editar</Button></Link>
                  </TableCell>
                  <TableCell align="center">
                    <Button variant="contained" color="error" onClick={() => onDelete(user.id)}> Delete </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default TableComponent;