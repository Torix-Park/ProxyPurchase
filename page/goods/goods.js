import {
    LitElement,
    html,
    css
} from 'lit-element';

import {
    GoodsCreate,
    GoodsRead,
    GoodsRemove,
    GoodsUpdate,
    GoodsReadId
} from '../../src/models/goods'

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class goodsElement extends LitElement {
    static get styles() {
        return css `
       :host {
          text-align: center;
          margin: 0 auto;
          display: block;
          border: solid 1px gray;
          padding: 16px;
          max-width: 800px;
        }
        ul {
            list-style: none;
        }
        li {
            margin-top: 2%;
        }
        `;
    }

    static get properties() {
        return {};
    }

    constructor() {
        super();
    }

    render() {
        return html `
            <slot></slot>
            <ul>
                <li>
                    <input type="text" placeholder="이름" id="GoodsName">
                    <input type="text" placeholder="가격" id="GoodsPrice">
                    <input type="number" placeholder="갯수" id="GoodsCount">
                    <button @click="${this.Create}">상품 생성</button>
                </li>
                <button @click="${this.Read}">firebase 상품 데이터 읽어오기</button>
                
                <input type="text" placeholder="상품아이디" id="GoodsId">
                <button @click="${this.ReadId}">상품 아이디 이용해서 데이터 읽어오기</button>
            </ul>
        `;
    }

    Create(){
        var name = this.shadowRoot.getElementById("GoodsName").value;
        var price = this.shadowRoot.getElementById("GoodsPrice").value;
        var count = this.shadowRoot.getElementById("GoodsCount").value;
        GoodsCreate(name,price,count);
    }

    Read(){
        GoodsRead();
    }

    ReadId(){
        var id = this.shadowRoot.getElementById("GoodsId").value;
        GoodsReadId(id);
    }


}

window.customElements.define('goods-element', goodsElement);