import { LitElement, html, css } from 'lit-element';
import './new-nested-item';

export class NewItem extends LitElement {
    static get properties() {
        return {
            //id: { type: Number },
            // title: { type: String },
            goods: { type: Array },
            commission: { type: Number },
            requester: { type: String },
            response_r: { type: String },
            createdAt: { type: String },
            status: { type: String },
        };
    }

    // static get styles() {
    //     return [css `
    //     .title {
    //         font-weight: bold;
    //     }
    // `];
    // }

    // render() {
    //     return html `
    //   <div .id=${this.id}>
    //     <span class="title">${this.title}</span>
    //     <input id="input-title" type="text" .value="${this.title}"/>
    //     <button @click="${this.handleClick}">변경</button>
    //     <new-nested-item id="${this.id}" title="${this.title}"
    //         @modified=${this.handleModified}></new-nested-item>
    //   </div>
    // `;
    // }

    render() {
        console.log(this.goods, this.requester);
        return html `
      <div .id=${this.requester}>
        <span class="requester">${this.requester}</span>
        <span class="commission">${this.commission}</span>
        <span class="createdAt">${this.createdAt}</span>
        <span class="status">${this.status}</span>
        <new-nested-item Goods="${this.Goods}"></new-nested-item>
      </div>
    `;
    }

    handleClick() {
        this.title = this.shadowRoot.getElementById('input-title').value;
        this.requestUpdate();
    }

    handleModified(e) {
        this.title = e.detail.title;
        this.requestUpdate();
    }
}