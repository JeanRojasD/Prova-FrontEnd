import React, {useEffect, useState} from "react";

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';

import api from '../../api/user'

const TableComponent = () => {

  const [data, setData] = useState([])

  const getData = async () => {

    const response = await api.get("/")
    
    console.log(response)
    setData(response.data)
    return response.data
  }

  useEffect(() => {
    getData()
  },[])
  



  return (
    <div className="listmap">
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
            {data.map((user) =>
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.nome}</TableCell>
                <TableCell align="left">{user.email}</TableCell>
                <TableCell align="left">{user.phone}</TableCell>
                <TableCell align="center">
                  <Button variant="contained"> Editar </Button>
                </TableCell>
                <TableCell align="center">
                  <Button variant="contained" color="error"> Delete </Button>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default TableComponent;