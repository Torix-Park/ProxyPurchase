import { LitElement, html, css } from 'lit-element';
import './new-nested-item';

export class NewItem extends LitElement {
    static get properties() {
        return {
            id: { type: Number },
            title: { type: String },
        };
    }

    static get styles() {
        return [css `
        .title {
            font-weight: bold;
        }
    `];
    }

    render() {
        return html `
      <div .id=${this.id}>
        <span class="title">${this.title}</span>
        <input id="input-title" type="text" .value="${this.title}"/>
        <button @click="${this.handleClick}">변경</button>
        <new-nested-item id="${this.id}" title="${this.title}"
            @modified=${this.handleModified}></new-nested-item>
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