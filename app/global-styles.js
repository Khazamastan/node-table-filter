import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html,
body {
  height: 100%;
}

body {
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  background: #fff; /* fallback for old browsers */
  font-family: "Open Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;   
  font-size : 14px;   
  color: #8c8b8b;
  overflow -y: scroll;
  overflow -x: hidden;
  }
  p,
  label {
    line-height: 1.5em;
  }
  .pull-left{
    float : left;
  }
  .pull-right{
    float : right;
  }
  .clearfix{
    clear : both;
  }
  ul{
    padding : 0px;
  }

body.fontLoaded {
  font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
}

h1{
  margin : 20px 0;
}
h2 {
  text-align: center;
  padding: 20px 0;
}

table th,
table td {
  white-space: nowrap;
}

.no-results{
  display : flex;
  min-height : 150px;
  justify-content: center;
  align-items : center;
  font-weight : bold;
}

.mr-2{
  margin-right: 20px;
}

`;

export default GlobalStyle;
