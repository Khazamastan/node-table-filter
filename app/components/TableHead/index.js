import React from "react";
import CellHead from "../CellHead";
import TheadWrapper from "./Wrapper"

const TableHead = props => {
  const { headers } = props;
  const headContent =  (
    <tr>
      {
        Object.keys(headers).map((key) => {
          const singeHeader = headers[key];
          return <CellHead key={key} singeHeader={singeHeader} />;
        })
      }
    </tr>
  );

  return <TheadWrapper>{ headContent }</TheadWrapper>

}

export default TableHead;