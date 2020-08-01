import { LitElement, html, css } from 'lit-element';

export class Editor extends LitElement {
    static get properties() {
        return {
            
        };
    }

    render() {
        return html `
            <div class="form-item">
                <input type="text" id="form-name" name="name" placeholder="상품명" value="${this.goodsName}">
                <input type="number" id="form-price" name="price" placeholder="가격" value="${this.price}">
                <input type="number" id="form-number" name="number" placeholder="갯수" value="${this.count}">
            </div>
        `;
    }
}