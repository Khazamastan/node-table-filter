import styled from "styled-components";
import React from 'react';
import SelectWrapper from "./Wrapper"

const Select =  (props) => {
    const options = props.pageCounts.map(pageCount => {
        return <option key={pageCount} value={pageCount}>{pageCount}</option>
    });

    return (<SelectWrapper {...props}>{options}</SelectWrapper>);
}

export default Select