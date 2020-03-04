import React from "react";
import CellWrapper from "./Wrapper"

const Cell = props => {
  const { columnKey, contact, cell, i } = props;
  return (
    <CellWrapper className={columnKey}>
      {(columnKey != "number") ?
        <p>{(cell && cell != "NULL") ? contact[columnKey] : "-"}</p>
        :
        (i + 1)
      }
    </CellWrapper>
  );
}

export default Cell