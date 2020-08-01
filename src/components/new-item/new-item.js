import { LitElement, html, css } from 'lit-element';
import { NewItemStyle } from './styles';
import './new-nested-item';
import '@material/mwc-button';
import '@material/mwc-icon-button'

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
            total: 0
        };
    }

    static get styles() {
        return [ NewItemStyle ];
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
        return html `
      <div .id=${this.requester} class = "card" >
        <span class="requester">${this.requester}</span>
        <mwc-icon-button icon="delete" class="delete_btn" @click=${this.deleteClick}></mwc-icon-button>
        </br>
        <span class="commission"> 수수료 : ${this.commission}원</span>
        </br>
        <span class="createdAt">${this.createdAt}에 </br> 신청이 들어왔어요!</span>
        </br>
        <span>-----------------------</span>
        <new-nested-item 
            goods="${JSON.stringify(this.goods)}" 
            commission="${this.commission}"
            @modified=${this.handleModified}>
        </new-nested-item>
        <div class="total">합계 : ${this.total}원</div></br>
        <mwc-button raised @click=${this.clickHandler} class=${this.status}>${this.status}</mwc-button>
      </div>
    `;
    }

    // handleClick() {
    //     this.title = this.shadowRoot.getElementById('input-title').value;
    //     this.requestUpdate();
    // }

    handleModified(e) {
        this.total = e.detail.to;
        this.requestUpdate();
    }

    clickHandler(event) {
        var click_btn = event.target.getAttribute("class");
        var result;
        // console.log(click_btn);
        switch(click_btn) {
            case "WAIT":
                result = confirm(this.requester + "님의 총 " + this.total + "원의 거래를 수락하시겠습니까?");
                if(result == true){
                    event.target.setAttribute("class", "ACCEPTED");
                    this.status = "ACCEPTED";
                }
                break;
            case "ACCEPTED":
                result = confirm(this.requester + "님의 총 " + this.total + "원 상품을 구매완료하셨습니까?");
                if(result == true){
                    event.target.setAttribute("class", "PURCHASE");
                    this.status = "PURCHASE";
                }
                break;
            case "PURCHASE":
                result = confirm(this.requester + "님의 총 " + this.total + "원 상품을 전달하셨습니까?");
                if(result == true){
                    event.target.setAttribute("class", "COMPLETED");
                    this.status = "COMPLETED";
                }
                break;
            case "COMPLETED":
                result = confirm(this.requester + "님의 총 " + this.total + "원의 거래를 종료하시겠습니까?");
                if(result == true){
                    event.target.style.display = "none";
                }
                break;
        }
    }

    deleteClick(event) {
        var click_btn = event.target;
        var click_card = click_btn.parentElement;

        // 요청자의 비밀번호와 입력받은 비밀번호를 비교 
        // 또는 요청자의 id와 현재 삭제를 요청한 사용자의 id를 비교

        /*
        if(prompt("자네의 비밀번호는?") == user){
            if(confirm("정말로 삭제하시겠습니까?") == true){
                click_card.setAttribute("style","display:none;");
                alert("삭제되었습니다.");
            }else{
                alert("삭제취소되었습니다.");
            }
        }else{
            alert("해당 글을 작성한 사람만 삭제할 수 있습니다.");
        }
        */
       if(sessionStorage.getItem("user_nickname") == this.requester){
            if(confirm("정말로 삭제하시겠습니까?") == true){
                click_card.setAttribute("style","display:none;");
                alert("삭제되었습니다.");
            }else{
                alert("취소되었습니다.");
            }
       }else{
            alert("해당 글을 작성한 사람만 삭제할 수 있습니다.");
       }
        
    }
}