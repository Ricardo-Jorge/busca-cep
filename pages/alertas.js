import Pagina from "@/components/Pagina";
import Alert from "react-bootstrap/Alert";
import React from "react";

const alertas = () => {
  return (
    <Pagina>
      <h1>alertas</h1>
      <Alert>Atenção: Isso é um alerta!</Alert>
      <Alert variant="danger">Atenção: Isso é um alerta!</Alert>
    </Pagina>
  );
};

export default alertas;
