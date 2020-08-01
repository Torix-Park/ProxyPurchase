import { css } from 'lit-element';

export const NewItemStyle = css `
    .card{
        position: relative;
        width: 250px;
        height: 350px;
        background-color: #ffffff;
        padding: 20px 10px;
        margin: 20px;
        text-align: center;
        box-shadow : 3px 4px 7px -2px silver inset, 4px 2px 2px -3px silver;
    }
    .total{
        margin-top: 10px;   
    }
    .delete_btn {
        color: gray;
        position: absolute;
        top: 0;
        right: 0;
    }
`;