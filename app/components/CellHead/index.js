import React from "react";
import CellHeadWrapper from "./Wrapper"
const CellHead = props =>{
    const { singeHeader } = props;
    return <CellHeadWrapper width={singeHeader.width + '%'}>{singeHeader.name}</CellHeadWrapper>;
}

export default CellHead