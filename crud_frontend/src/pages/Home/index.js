import React from "react";
import { Container, Table } from 'reactstrap';

export const Home = () => {
  return (
    <div>
      <Container>
        <div className="d-flex">
          <div className="mr-auto p-2">
            <h1>Anúncios</h1>
          </div>
          <div className="p-2">
            <a href="/cadastrar" className="btn btn-outline-success btn-sm">Cadastrar</a>
          </div>

        </div>
        <Table striped hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Título</th>
              <th>Descrição</th>
              <th className="text-center">Ações</th>
            </tr>
          </thead>
          <tbody>
          <tr>
            <td>1</td>
            <td>Anúncio 1</td>
            <td>Anúncio 1</td>
            <td className="text-center">Botão</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Anúncio 2</td>
            <td>Anúncio 2</td>
            <td className="text-center">Botão</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Anúncio 3</td>
            <td>Anúncio 3</td>
            <td className="text-center">Botão</td>
          </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  );
}
