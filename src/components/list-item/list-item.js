import { LitElement, html, css } from 'lit-element';
import { ListItemStyle } from './styles';
import '@material/mwc-button';
import '@material/ripple';

export class ListItem extends LitElement {
    static get properties() {
        return {
            
        };
    }

    static get styles() {
        return [ListItemStyle];
    }

  render() {
      

  return html `
    <div class="item">가나다</div>
    <mwc-button id="myButton" label="Click Me!" raised></mwc-button>
    `;
  }

  //   render() {
  //     const {
  //         id,
  //         title,
  //         points,
  //         user,
  //         time_ago,
  //         comments_count,
  //         url,
  //         domain,
  //         type
  //     } = this;

  // return html `
  //   <div class="item">
  //     <div class="title">
  //       <a href="${url}">${title}</a>
  //         ${domain && (type === 'link' || type === 'job')
  //       ? html`
  //         <span class="domain">(${domain})</span>
  //         `
  //         : null}
  //     </div>
  //     <div class="meta">
  //       ${type !== 'job'
  //       ? html`
  //       ${points} 포인트 by
  //       <a class="user" href="/user/${user}">${user}</a>
  //       `
  //       : null}
  //       ${time_ago}
  //       ${type !== 'job' && comments_count > 0
  //       ? html`
  //       <span class="spacer">|</span>
  //       <span
  //         ><a href="/item/${id}">${comments_count} 댓글</a></span
  //       >
  //       `
  //       : null}
  //     </div>
  //   </div>
  //   `;
  // }
}