import Pagina from "@/components/Pagina";
import React, { useState } from "react";
import { Button } from "react-bootstrap";

const contador = () => {
  const [qtd, setQtd] = useState(0);
  return (
    <Pagina>
      <h1>Contador:</h1>

      <Button className="bg-success m-3" onClick={(e) => setQtd(qtd + 1)}>
        Adicionar
      </Button>
      <Button className="bg-danger" onClick={(e) => setQtd(qtd - 1)}>
        Diminuir
      </Button>

      <h2 className="mt-3">{qtd}</h2>
    </Pagina>
  );
};

export default contador;
