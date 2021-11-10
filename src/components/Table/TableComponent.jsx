import React from "react";

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';


const TableComponent = () => {

  const user = [
    {
      "id": 1,
      "nome": "Jean",
      "email": "email@email.com",
      "telefone": "4599405679"
    },
    {
      "id": 1,
      "nome": "Jean",
      "email": "email@email.com",
      "telefone": "4599405679"
    },
    {
      "id": 1,
      "nome": "Jean",
      "email": "email@email.com",
      "telefone": "4599405679"
    },
    {
      "id": 1,
      "nome": "Jean",
      "email": "email@email.com",
      "telefone": "4599405679"
    },
    {
      "id": 1,
      "nome": "Jean",
      "email": "email@email.com",
      "telefone": "4599405679"
    }

  ];

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
            {user.map((users, index) =>
              <TableRow key={index}>
                <TableCell>{users.id}</TableCell>
                <TableCell>{users.nome}</TableCell>
                <TableCell align="left">{users.email}</TableCell>
                <TableCell align="left">{users.telefone}</TableCell>
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