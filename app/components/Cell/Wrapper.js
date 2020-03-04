import styled from "styled-components";
const Wrapper = styled.td`
    text-align: left;
    padding: 8px 20px;
    width: 400px;
    p{
        margin : 0;
        color: #000;
        white-space: no-wrap;
        overflow : hidden;
        text-overflow : ellipsis;
    }
    &.firstname, &.lastname, &.agency_name{
        p{
            text-transform: capitalize;
        }
    }
`;
export default Wrapper;
