import Pagina from "@/components/Pagina";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const endereco = () => {
  const { register, handleSubmit, setValue } = useForm();
  function buscarCep(e) {
    const cep = e.target.value;
    if (cep.length == 8) {
      axios.get(`https://viacep.com.br/ws/${cep}/json/`).then((resultado) => {
        const endereco = resultado.data;
        console.log(endereco);
        setValue("uf", endereco.uf);
        setValue("cidade", endereco.localidade);
        setValue("bairro", endereco.bairro);
        setValue("logradouro", endereco.logradouro);
        setValue("complemento", endereco.complemento);
        setValue("numero", endereco.unidade);
      });
    }
  }

  function salvar(dados) {
    console.log(dados);
  }

  return (
    <Pagina>
      <h1 className="mb-3">Endereço:</h1>
      <Form>
        <Form.Group className="mb-3" controlId="cep">
          <Form.Label>CEP:</Form.Label>
          <Form.Control type="text" {...register("cep")} onChange={buscarCep} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="uf">
          <Form.Label>UF:</Form.Label>
          <Form.Control type="text" {...register("uf")} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="cidade">
          <Form.Label>CIDADE:</Form.Label>
          <Form.Control type="text" {...register("cidade")} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="bairro">
          <Form.Label>BAIRRO:</Form.Label>
          <Form.Control type="text" {...register("bairro")} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="logradouro">
          <Form.Label>LOGRADOURO:</Form.Label>
          <Form.Control type="text" {...register("logradouro")} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="complemento">
          <Form.Label>COMPLEMENTO:</Form.Label>
          <Form.Control type="text" {...register("complemento")} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="numero">
          <Form.Label>NÚMERO:</Form.Label>
          <Form.Control type="text" {...register("numero")} />
        </Form.Group>

        <Button
          className="mb-5"
          variant="success"
          type="submit"
          onClick={handleSubmit(salvar)}
        >
          Enviar
        </Button>
      </Form>
    </Pagina>
  );
};

export default endereco;
