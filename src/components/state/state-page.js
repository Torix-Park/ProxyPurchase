import { LitElement, html, css } from 'lit-element';

export class StatePage extends LitElement {
    static get properties() {
        return {
            goods: { type: Object }
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

    render() {
        return html`
            
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

}