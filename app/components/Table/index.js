import styled from "styled-components";
import React from 'react';
import TableWrapper from "./TableWrapper";
import TableHead from "../TableHead";
import TableBody from "../TableBody";

const Table = props => {
  const { headers, contacts } = props;
  var noResultsConent;
  if(!contacts.length){
    noResultsConent = (<p className="no-results" key={"only"}>No Results</p>);
  }
  return (
    <div className="container">
      <div className="row">
        <TableWrapper>
          <TableHead headers={headers}/>
          <TableBody  headers={headers} contacts={contacts}/>
        </TableWrapper>
        {noResultsConent}
      </div>
    </div>
  );
}

export default Table