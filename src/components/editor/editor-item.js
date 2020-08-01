import { LitElement, html, css } from 'lit-element';

export class EditorItem extends LitElement {
    static get properties() {
        return {
            goods: { type: Object }
        };
    }

    render() {
        return html `
            <div class="form-item">
                <input type="text" @change=${this.onChange} id="form-name" name="name" placeholder="상품명" value="${this.goods.name || ""}">
                <input type="number" @change=${this.onChange} id="form-price" name="price" placeholder="가격" value="${this.goods.price}">
                <input type="number" @change=${this.onChange} id="form-number" name="number" placeholder="갯수" value="${this.goods.number}">
                <button @click=${this.dispatchCloseEvent}>&times;</button>
            </div>
        `;
    }

    dispatchCloseEvent() {
        var event = new CustomEvent(
            'on-close-event',
            {
                detail: {
                    'goods': this.goods
                }
            }
        );

        this.dispatchEvent(event);
    }

    onChange() {
        this.goods.name = this.shadowRoot.getElementById('form-name').value;
        this.goods.price = parseInt(this.shadowRoot.getElementById('form-price').value) || 0;
        this.goods.number = parseInt(this.shadowRoot.getElementById('form-number').value) || 0;

        var event = new CustomEvent(
            'on-changed',
            {
                detail: {
                    goods: this.goods
                }
            }
        );

        this.dispatchEvent(event);
    }
}