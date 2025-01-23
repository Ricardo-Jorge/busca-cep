import Pagina from "@/components/Pagina";
import React from "react";
import { Button } from "react-bootstrap";

const botoes = () => {
  return (
    <Pagina>
      <h1>Botões</h1>
      <Button variant="success">Salvar</Button>
      <Button>Editar</Button>
      <Button variant="danger">Excluir</Button>
    </Pagina>
  );
};

export default botoes;
