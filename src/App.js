import React from "react";
import logo from "./logo.svg";
import TablePedidos from "./components/Table/table";
import FormRegistros from "./components/Form/form";
import "./App.css";

import { data } from "./pickingList";
import Remove from "./components/Remove/remove";

function App() {
  const [registers, setRegister] = React.useState([]);

  React.useEffect(() => {
    setRegister(data);
  }, []);

  return (
    <div>
      <h1>CRUD test</h1>
      <FormRegistros data={data} setRegister={setRegister} />
      <TablePedidos data={data} />
    </div>
  );
}

export default App;
