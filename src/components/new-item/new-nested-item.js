import {
    LitElement,
    html,
    css
} from 'lit-element';

export class NewNestedItem extends LitElement {
    static get properties() {
        return {
            // id: { type: Number },
            // title: { type: String },
            goods: {type: Array},
            commission: { type: Number },
        };
    }

    static get styles() {
        return [css `
        .goodsList{
            height: 150px;
            overflow-y: scroll;
        }
    `];
    }

    // render() {
    //     return html `
    //   <div .id=${this.id} class="nested">
    //     <span class="title">${this.title}</span>
    //     <input id="input-title" type="text" .value="${this.title}"/>
    //     <button @click="${this.handleClick}">변경</button>
    //   </div>
    // `;
    // }

    render() {
        var total = this.commission;

        //console.log(this.commission);
        this.goods.forEach(good => {
            total += good.price;
        });

        return html `
      <section class="goodsList">
        ${this.goods.length > 0 ? this.goods.map(
            item => html`
                <span class="product">${item.product} </span>
                <span class="price">${item.price}</span>
                </br> `
        ): html `<div>No Content</div>`}
        <button @click="${this.handleClick(total)}" style="display:none">합계금액 보기</button>
      </section>
    `;
    }

    handleClick(total) {
        // this.title = this.shadowRoot.getElementById('input-title').value;
        // this.requestUpdate();

        // console.log(total);

        let event = new CustomEvent('modified', {
            detail: {
                to: total
            }
        });
        this.dispatchEvent(event);
    }
}