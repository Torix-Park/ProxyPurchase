import {
    LitElement,
    html,
    css
} from 'lit-element';

import {
    requestCreate
} from '../../src/models/request'

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class requestElement extends LitElement {
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
                    <input type="text" placeholder="상품" id="RequestGoods">
                    <input type="text" placeholder="수수료" id="RequestCommission">
                    <input type="text" placeholder="요청자" id="RequestRequester">
                    <input type="text" placeholder="수락자" id="RequestResponser">
                    <input type="text" placeholder="생성시간" id="RequestCreateAt">
                    <select id="RequestStatus">
                        <option selected value="WAIT">WAIT</option>
                        <option value="ACCEPTED">ACCEPTED</option>
                        <option value="PURCHASE">PURCHASE</option>
                        <option value="COMPLETED">COMPLETED</option>
                    </select>
                    <input type="text" placeholder="상태" id="RequestStatus">
                    <button @click="${this.Create}">주문 생성</button>
                </li>
            </ul>
        `;
    }

    Create() {
        let goods;
        let commission = this.shadowRoot.getElementById("RequestCommission").value;
        let requester = this.shadowRoot.getElementById("RequestRequester").value;
        let responser = this.shadowRoot.getElementById("RequestResponser").value;
        let created = new Date();
        let status = this.shadowRoot.getElementById("RequestStatus").value;
        GoodsCreate(goods,commission);
    }


}

window.customElements.define('request-element', requestElement);