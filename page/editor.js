import {
    LitElement,
    html,
    css
  } from 'lit-element';

import {repeat} from 'lit-html/directives/repeat.js';

import "../src/components/editor";
import { Goods } from '../src/models/goods';

export class EditorPage extends LitElement {
    static get properties() {
        return {
            sum: { type: Number }, 
            itemCount: { type: Number },
            goods: { type: Array },
            allSum: { type: Number }
        };
    }

    constructor() {
        super();
        this.sum = 0;
        this.allSum = 0;
        if (!this.goods) {
            this.goods = [ new Goods("", 0, 1) ];
        }
    }

    render() {
        return html`
            <div>
                <!--Request List Show Here-->
            </div>
            <div>
                <button @click=${this.handlePlusClick}>+</button>
                ${ repeat(this.goods, g => g.id, g => html`<editor-item .goods=${g} @on-close-event=${this.handleCloseEvent} @on-changed=${this.handleOnChanged}></editor-item>`) }
                <span>${this.sum} + <input type="number" id="commission" @change=${this.handleCommissionEvent}> = ${this.allSum}</span>
            </div>
            
        `;
    }

    handleCloseEvent(e) {
        var index = -1;
        var item = e.detail.goods;

        for (var i = 0; i < this.goods.length; i++) {
            if (item == this.goods[i]) {
                this.goods.splice(i, 1);
                break;
            }
        }
        
        // console.log(this.goods);

        this.handleOnChanged(e);
    }

    handlePlusClick() {
        this.goods.push(new Goods("", 0, 1));
        this.requestUpdate();
    }

    handleOnChanged(e) {
        var sum = 0;
        
        for (var i = 0; i < this.goods.length; i++) {
            sum += this.goods[i].price * this.goods[i].number;
        }
        this.sum = sum;
        // this.allSum = sum + commission;
        this.requestUpdate();

        // console.log(this.goods);
        // console.log(e.detail.value);
    }

    handleCommissionEvent(e) {
        var commission = parseInt(this.shadowRoot.getElementById('commission').value) || 0;
        this.allSum = this.sum + commission;

        this.requestUpdate();
    }







    asciiArtEvent(e) {
        console.log('░░░░░░░░░░░░░░░░░░░░░░░░░░░');
        console.log('░░░░░░░░░░░░░▄███▄▄▄░░░░░░░');
        console.log('░░░░░░░░░▄▄▄██▀▀▀▀███▄░░░░░');
        console.log('░░░░░░░▄▀▀░░░░░░░░░░░▀█░░░░');
        console.log('░░░░▄▄▀░░░░░░░░░░░░░░░▀█░░░');
        console.log('░░░█░░░░░▀▄░░▄▀░░░░░░░░█░░░');
        console.log('░░░▐██▄░░▀▄▀▀▄▀░░▄██▀░▐▌░░░');
        console.log('░░░█▀█░▀░░░▀▀░░░▀░█▀░░▐▌░░░');
        console.log('░░░█░░▀▐░░░░░░░░▌▀░░░░░█░░░');
        console.log('░░░█░░░░░░░░░░░░░░░░░░░█░░░');
        console.log('░░░░█░░▀▄░░░░▄▀░░░░░░░░█░░░');
        console.log('░░░░█░░░░░░░░░░░▄▄░░░░█░░░░');
        console.log('░░░░░█▀██▀▀▀▀██▀░░░░░░█░░░░');
        console.log('░░░░░█░░▀████▀░░░░░░░█░░░░░');
        console.log('░░░░░░█░░░░░░░░░░░░▄█░░░░░░');
        console.log('░░░░░░░██░░░░░█▄▄▀▀░█░░░░░░');
        console.log('░░░░░░░░▀▀█▀▀▀▀░░░░░░█░░░░░');
        console.log('░░░░░░░░░█░░░░░░░░░░░░█░░░░');
    }
}

window.customElements.define('editor-page', EditorPage);