import React from "react";
import Cell from "../Cell";
import TbodyWrapper from "./Wrapper"

const TableBody = props => {
  const { contacts, headers } = props;
  var tablecontent = contacts.map((contact, i) => {
    return (
      <tr key={i}>
        {
          Object.keys(headers).map((columnKey) => {
            const cellItem = contact[columnKey];
            return (
              <Cell 
                key={columnKey}
                contact={contact} 
                columnKey={columnKey} 
                cell={cellItem} 
                i={i}
              />);
          })
        }
      </tr>
    );
  });
  
  return <TbodyWrapper>{tablecontent}</TbodyWrapper>

}

export default TableBody;