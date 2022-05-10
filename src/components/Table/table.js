import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TablePagination from "@mui/material/TablePagination";
import Checkbox from "@mui/material/Checkbox";

import "./style.css";
import Remove from "../Remove/remove.js";

const TablePedidos = (props) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [totalsPages, setTotalsPages] = React.useState(10);
  const [selected, setSelected] = React.useState([]);
  const [register, setRegiter] = React.useState([]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);

    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected?.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected?.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  React.useEffect(() => {
    setRegiter(props?.data);
    setTotalsPages(register.length);
  }, []);

  React.useEffect(() => {
    setTotalsPages(register.length);
  }, [register]);

  return (
    <div className="tableCotainer">
      <div
        style={{
          width: "80%",
          display: "flex",
          justifyContent: "space-be",
        }}
      >
        <h2 className="titleContainer">table pickingList</h2>
        <Remove
          selected={selected}
          register={register}
          setRegiter={setRegiter}
        ></Remove>
      </div>
      <TableContainer className={"table"} component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>id</TableCell>
              <TableCell>EstadoERP</TableCell>
              <TableCell>TipoDocumento</TableCell>
              <TableCell>NombreCliente</TableCell>
              <TableCell>NoLineas</TableCell>
              <TableCell>FechaPedido</TableCell>
              <TableCell>Pedido</TableCell>
              <TableCell>EstadoSiesa</TableCell>
              <TableCell>PedidoSiesa</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {register
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                const isItemSelected = isSelected(row.id);
                const labelId = `enhanced-table-checkbox-${index}`;
                return (
                  <TableRow
                    hover
                    onClick={(event) => handleClick(event, row.id)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.id}
                    selected={isItemSelected}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        color="primary"
                        checked={isItemSelected}
                        inputProps={{
                          "aria-labelledby": row.id,
                        }}
                      />
                    </TableCell>
                    <TableCell>{row.id}</TableCell>
                    <TableCell
                      className={
                        row.EstadoERP === "Aprobado"
                          ? "aprobado"
                          : row.EstadoERP === "Anulado"
                          ? "anulado"
                          : "finalizado"
                      }
                    >
                      {row.EstadoERP}
                    </TableCell>
                    <TableCell>{row.TipoDocumento}</TableCell>
                    <TableCell>{row.NombreCliente}</TableCell>
                    <TableCell>{row.NoLineas}</TableCell>
                    <TableCell>{row.FechaPedido}</TableCell>
                    <TableCell>{row.Pedido}</TableCell>
                    <TableCell>{row.EstadoSiesa}</TableCell>
                    <TableCell>{row.PedidoSiesa}</TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        rowsPerPage={rowsPerPage}
        count={totalsPages}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
};

export default TablePedidos;
