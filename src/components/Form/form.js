import React, { useState } from "react";
import Box from "@mui/material/Box";
import moment from "moment";

import "./style.css";

const FormRegistros = (props) => {
  const [edit, setEdit] = useState(false);
  const [currentRegister, setCurrentRegister] = useState({});

  React.useEffect(() => {
    setCurrentRegister();
  }, [edit]);

  const onSubmit = (event) => {
    event.preventDefault();
    let newRegister = {
      id: props.data.length,
      EstadoERP: document.getElementById("EstadoERP").value,
      TipoDocumento: document.getElementById("TipoDocumento").value,
      NombreCliente: document.getElementById("NombreCliente").value,
      NoLineas: document.getElementById("NoLineas").value,
      FechaPedido: document.getElementById("FechaPedido").value,
      Pedido: document.getElementById("Pedido").value,
      EstadoSiesa: document.getElementById("EstadoSiesa").value,
      PedidoSiesa: document.getElementById("PedidoSiesa").value,
    };
    if (edit) {
      props.setRegister(
        ...props?.data,
        (props.data[+document.getElementById("ID").value] = {
          ...newRegister,
          id: document.getElementById("ID").value,
        })
      );
    } else {
      props?.data.push(newRegister);
    }

    const form = document.getElementById("myForm");
    form.reset();
  };

  const onEdit = () => {
    if (!edit) {
      setEdit(true);
    } else {
      setEdit(false);
    }
  };

  const getCurrentRegister = (event) => {
    event.preventDefault();
    setCurrentRegister(props.data.find(({ id }) => id === +event.target.value));
  };

  return (
    <Box className="container">
      <h3>Add or edit new register </h3>
      <form onSubmit={onSubmit} id="myForm">
        <button
          style={{ marginBottom: "20px" }}
          onClick
          className="submitButton"
          onClick={onEdit}
        >
          Edit existing register
        </button>

        {edit && (
          <Box className="form-group">
            <span>ID</span>
            <input
              className="form-field"
              type="number"
              placeholder="ID"
              id="ID"
              onChange={getCurrentRegister}
            ></input>
          </Box>
        )}

        <Box className="form-group">
          <span>EstadoERP</span>
          <select
            className="form-field"
            id="EstadoERP"
            name="EstadoERP"
            form="carform"
          >
            <option value="Aprobado">Aprobado</option>
            <option value="Anulado">Anulado</option>
            <option value="finalizado">finalizado</option>
          </select>
        </Box>
        <Box className="form-group">
          <span>TipoDocumento</span>
          <select
            className="form-field"
            id="TipoDocumento"
            name="TipoDocumento"
            form="carform"
          >
            <option value="AGDC">AGDC</option>
            <option value="AGDC">AGDC</option>
            <option value="BHPC">BHPC</option>
            <option value="GRTC">GRTC</option>
            <option value="MLVC">MLVC</option>
          </select>
        </Box>
        <Box className="form-group">
          <span>NombreCliente</span>
          <input
            className="form-field"
            type="text"
            placeholder="NombreCliente"
            id="NombreCliente"
          ></input>
        </Box>
        <Box className="form-group">
          <span>NoLineas</span>
          <input
            className="form-field"
            type="number"
            placeholder="NoLineas"
            id="NoLineas"
          ></input>
        </Box>
        <Box className="form-group">
          <span>FechaPedido</span>
          <input
            className="form-field"
            type="date"
            id="FechaPedido"
            name="FechaPedido"
          />
        </Box>
        <Box className="form-group">
          <span>Pedido</span>
          <input
            className="form-field"
            type="number"
            placeholder="Pedido"
            id="Pedido"
          ></input>
        </Box>
        <Box className="form-group">
          <span>EstadoSiesa</span>
          <input
            className="form-field"
            type="number"
            placeholder="EstadoSiesa"
            id="EstadoSiesa"
          ></input>
        </Box>
        <Box className="form-group">
          <span>PedidoSiesa</span>
          <input
            className="form-field"
            type="text"
            placeholder="PedidoSiesa"
            id="PedidoSiesa"
          ></input>
        </Box>
        <button className="submitButton" type="submit">
          Submit
        </button>
      </form>
    </Box>
  );
};

export default FormRegistros;
