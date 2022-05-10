import { Button } from "@mui/material";
import React, { useState } from "react";
import { data } from "../../pickingList";

const Remove = (props) => {
  return (
    <Button
      style={{ height: "50px" }}
      variant="outlined"
      color="error"
      onClick={() =>
        props.setRegiter(
          props.register.filter((register) => {
            return !props.selected.includes(register.id);
          })
        )
      }
    >
      Delete registers
    </Button>
  );
};

export default Remove;
