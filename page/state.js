import {
    LitElement,
    html,
    css
  } from 'lit-element';


import { Goods } from '../src/models/goods';

export class StateView extends LitElement {
    static get properties() {
        return {
            goods: { type: Array }
        };
    }

    static get styles() {
        return css`
            .hide {
                display:none;
                visibility: none;
            }
        `;
    }

    constructor() {
        super();
        this.goodsSetOne = new Goods;
        this.state = true;
    }

    render() {
        return html`
            <div class=${this.state != 1 ? 'hide' : ''}>
                <p>구매 완료했습니까?</p>
                <button>네</button>
                <button>아니오 (살거예요)</button>
            </div>

            <div class=${this.state != 2 ? 'hide' : ''}>
                <p>영수증을 받으셨습니까?</p>
                <button>네</button>
                <button>아니오 (가져올게요)</button>
            </div>
            
            <div class=${this.state != 3 ? 'hide' : ''}>
                <p>영수증과 신청한 아래의 상품을 전달했습니까?</p>
                <p>
                </p><!-- 해당 상품을 보여준다 -->
                <button>임무 완료</button>
            </div>
            
            <div class=${this.state != 4 ? 'hide' : ''}>
                <p>영수증과 신청한 물품을 잘 받으셨습니까?</p>
                <p>
                    </p><!-- 해당 상품을 보여준다 -->
                <button>잘 받았음 (완료)</button>
                <button>못 받았음</button>
            </div>
        `;
    }

}

window.customElements.define('state-view', StateView);