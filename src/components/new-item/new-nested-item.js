import { LitElement, html, css } from 'lit-element';

export class NewNestedItem extends LitElement {
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
        
        .nested {
            margin-left: 50px;
        }
    `];
    }

    render() {
        return html `
      <div .id=${this.id} class="nested">
        <span class="title">${this.title}</span>
        <input id="input-title" type="text" .value="${this.title}"/>
        <button @click="${this.handleClick}">변경</button>
      </div>
    `;
    }

    handleClick() {
        this.title = this.shadowRoot.getElementById('input-title').value;
        this.requestUpdate();

        let event = new CustomEvent('modified', {
            detail: {
                title: this.shadowRoot.getElementById('input-title').value
            }
        });
        this.dispatchEvent(event);
    }
}