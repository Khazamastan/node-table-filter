import styled from 'styled-components';
const AppWrapper = styled.div`
  margin: 0 auto;
  min-height: 101vh;
  padding: 0 100px 40px 100px;
  background: transparent url(${props => props.bg}) center/cover;
  transition: background 0.3s ease-in;
  .rc-pagination {
    margin-top: 20px;
  }
`;

export const UploadWrapper = styled.div`
  > div {
    margin-top: 40px;
    height: 200px;
    background: #f5f5f5;
    border: 2px dotted #dadada;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items:center;
`;


export const ErrorMessage = styled.span`
  color: red;
`

export default AppWrapper;
