import styled from "styled-components";
const Wrapper = styled.div`
    .rc-pagination {
        justify-content: center;
        display: flex;
        margin : auto;
        text-align : center;
        font-size: 12px;
        font-family: 'Arial';
        user-select: none;
        padding: 0;
      }
      .rc-pagination > li {
        list-style: none;
      }
      .rc-pagination-total-text {
        float: left;
        height: 30px;
        line-height: 30px;
        list-style: none;
        padding: 0;
        margin: 0 8px 0 0;
      }
      .rc-pagination:after {
        content: " ";
        display: block;
        height: 0;
        clear: both;
        overflow: hidden;
        visibility: hidden;
      }
      .rc-pagination-item {
        cursor: pointer;
        min-width: 35px;
        height: 35px;
        line-height: 35px;
        border-radius : 3px;
        text-align: center;
        list-style: none;
        float: left;
        border: 1px solid #f5f5f5;
        background-color: #fff;
        margin-right: 8px;
      }
      .rc-pagination-item a {
        text-decoration: none;
        color: #000;
      }
      .rc-pagination-item:hover {
        border-color: #f5f5f5;
      }
      .rc-pagination-item:hover a {
        color: #000;
      }
      .rc-pagination-item-active {
        background-color: #f5f5f5;
        border-color: #f5f5f5;
      }
      .rc-pagination-item-active a {
        color: #000;
      }
      .rc-pagination-item-active:hover a {
        color: #000;
      }
      .rc-pagination-jump-prev:after,
      .rc-pagination-jump-next:after {
        content: "•••";
        display: block;
        letter-spacing: 2px;
        color: #ccc;
        font-size: 12px;
        margin-top: 1px;
      }
      .rc-pagination-jump-prev:hover:after,
      .rc-pagination-jump-next:hover:after {
        color: #f5f5f5;
      }
      .rc-pagination-jump-prev:hover:after {
        content: "«";
      }
      .rc-pagination-jump-next:hover:after {
        content: "»";
      }
      .rc-pagination-prev,
      .rc-pagination-jump-prev,
      .rc-pagination-jump-next {
        margin-right: 8px;
      }
      .rc-pagination-prev,
      .rc-pagination-next,
      .rc-pagination-jump-prev,
      .rc-pagination-jump-next {
        cursor: pointer;
        color: #666;
        font-size: 10px;
        border-radius: 6px;
        list-style: none;
        min-width: 35px;
        height: 35px;
        line-height: 35px;
        float: left;
        text-align: center;
      }
      .rc-pagination-prev a:after {
        content: "‹";
        display: block;
      }
      .rc-pagination-next a:after {
        content: "›";
        display: block;
      }
      .rc-pagination-prev,
      .rc-pagination-next {
        border: 1px solid #f5f5f5;
        font-size: 18px;
      }
      .rc-pagination-prev a,
      .rc-pagination-next a {
        color: #666;
      }
      .rc-pagination-prev a:after,
      .rc-pagination-next a:after {
        margin-top: -1px;
      }
      .rc-pagination-disabled {
        cursor: not-allowed;
      }
      .rc-pagination-disabled a {
        color: #ccc;
      }
      .rc-pagination-options {
        float: left;
        margin-left: 15px;
      }
      .rc-pagination-options-size-changer {
        float: left;
        width: 80px;
      }
      .rc-pagination-options-quick-jumper {
        float: left;
        margin-left: 16px;
        height: 35px;
        line-height: 35px;
      }
      .rc-pagination-options-quick-jumper input {
        margin: 0 8px;
        box-sizing: border-box;
        background-color: #fff;
        border-radius: 6px;
        border: 1px solid #f5f5f5;
        outline: none;
        padding: 3px 12px;
        width: 50px;
        height: 28px;
      }
      .rc-pagination-options-quick-jumper input:hover {
        border-color: #f5f5f5;
      }
      .rc-pagination-options-quick-jumper button {
        display: inline-block;
        margin: 0 8px;
        font-weight: 500;
        text-align: center;
        touch-action: manipulation;
        cursor: pointer;
        background-image: none;
        border: 1px solid transparent;
        white-space: nowrap;
        padding: 0 15px;
        font-size: 12px;
        border-radius: 6px;
        height: 28px;
        user-select: none;
        transition: all .3s cubic-bezier(.645,.045,.355,1);
        position: relative;
        color: rgba(0,0,0,0.65);
        background-color: #fff;
        border-color: #f5f5f5;
      }
      .rc-pagination-options-quick-jumper button:hover,
      .rc-pagination-options-quick-jumper button:active,
      .rc-pagination-options-quick-jumper button:focus {
        color: #f5f5f5;
        background-color: #fff;
        border-color: #f5f5f5;
      }
      .rc-pagination-simple .rc-pagination-prev,
      .rc-pagination-simple .rc-pagination-next {
        border: none;
        height: 24px;
        line-height: 24px;
        margin: 0;
        font-size: 18px;
      }
      .rc-pagination-simple .rc-pagination-simple-pager {
        float: left;
        margin-right: 8px;
        list-style: none;
      }
      .rc-pagination-simple .rc-pagination-simple-pager .rc-pagination-slash {
        margin: 0 10px;
      }
      .rc-pagination-simple .rc-pagination-simple-pager input {
        margin: 0 8px;
        box-sizing: border-box;
        background-color: #fff;
        border-radius: 6px;
        border: 1px solid #f5f5f5;
        outline: none;
        padding: 5px 8px;
        min-height: 20px;
      }
      .rc-pagination-simple .rc-pagination-simple-pager input:hover {
        border-color: #f5f5f5;
      }
      .rc-pagination-simple .rc-pagination-simple-pager button {
        display: inline-block;
        margin: 0 8px;
        font-weight: 500;
        text-align: center;
        touch-action: manipulation;
        cursor: pointer;
        background-image: none;
        border: 1px solid transparent;
        white-space: nowrap;
        padding: 0 8px;
        font-size: 12px;
        border-radius: 6px;
        height: 26px;
        user-select: none;
        transition: all .3s cubic-bezier(.645,.045,.355,1);
        position: relative;
        color: rgba(0,0,0,0.65);
        background-color: #fff;
        border-color: #f5f5f5;
      }
      .rc-pagination-simple .rc-pagination-simple-pager button:hover,
      .rc-pagination-simple .rc-pagination-simple-pager button:active,
      .rc-pagination-simple .rc-pagination-simple-pager button:focus {
        color: #000;
        background-color: #f5f5f5;
        border-color: #f5f5f5;
      }
      @media only screen and (max-width: 1024px) {
        .rc-pagination-item-after-jump-prev,
        .rc-pagination-item-before-jump-next {
          display: none;
        }
      }
`;
export default Wrapper;
