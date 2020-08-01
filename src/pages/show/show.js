import {
    html
} from 'lit-element';
import {
    PageViewElement
} from '../../utils/page-view-elemet';
import {
    PageStyles
} from '../styles';
import {
    PAGES
} from '../../constants';
import '../../components/list-item';
// redux helpers
import {
    connect
} from 'pwa-helpers/connect-mixin';
import {
    store
} from '../../redux/store';
import {
    fetchPageStories
} from '../../redux/page/actions';

export class Show extends connect(store)(PageViewElement) {
    static get properties() {
        return {
            showStories: {
                type: Array
            },
            page: {
                type: Number
            }
        };
    }

    static get styles() {
        return [PageStyles];
    }

    stateChanged(state) {
        const pageNo = state.page.show;
        if (this.page !== undefined && this.page !== pageNo) {
            store.dispatch(fetchPageStories(pageNo, PAGES.SHOW));
        }
        this.showStories = state.page.stories;
        this.page = pageNo;
    }

    firstUpdated() {
        store.dispatch(fetchPageStories(this.page, PAGES.SHOW));
    }

    render() {
        // const { showStories } = this;
        var data = [{
                goods: [{
                        product: "순대",
                        price: 3000
                    },
                    {
                        product: "과자",
                        price: 1500
                    }
                ],
                commission: 500,
                requester: "User1",
                response_r: null,
                createdAt: "14:00",
                status: "WAIT"
            },
            {
                goods: [{
                    product: "설레임",
                    price: 1500
                }, {
                    product: "떡꼬치",
                    price: 1000
                }, {
                    product: "꿀벙 닭강정 매운맛",
                    price: 3000
                },{
                    product: "참치김밥",
                    price: 2500
                },{
                    product: "치즈김밥",
                    price: 2500
                },{
                    product: "우동",
                    price: 4000
                },{
                    product: "라면",
                    price: 3500
                },{
                    product: "레몬워터",
                    price: 2500
                },],
                commission: 1500,
                requester: "User2",
                response_r: null,
                createdAt: "16:00",
                status: "ACCEPTED"
            },
            {
                goods: [{
                    product: "스프라이트",
                    price: 1500
                }, {
                    product: "삼각김밥",
                    price: 1200
                }],
                commission: 500,
                requester: "User3",
                response_r: null,
                createdAt: "17:00",
                status: "PURCHASE"
            },
            {
                goods: [{
                    product: "스프라이트",
                    price: 1500
                }, {
                    product: "삼각김밥",
                    price: 1200
                }],
                commission: 500,
                requester: "User3",
                response_r: null,
                createdAt: "17:00",
                status: "COMPLETED"
            }
        ];
        var user = {
            id: "qwer1234",
            password: "1234",
            nickname: "User3"
        }
        sessionStorage.setItem("user_password", user.password ); // 저장
        sessionStorage.setItem("user_id", user.id ); // 저장
        sessionStorage.setItem("user_nickname", user.nickname ); // 저장
        
        return html `
      <section id="items">
        ${data.length > 0
        ? data.map(
            item => html`
                <new-item
                    goods="${JSON.stringify(item.goods)}"
                    commission="${item.commission}"
                    requester="${item.requester}"
                    response_r="${item.response_r}"
                    createdAt="${item.createdAt}"
                    status="${item.status}"
                >
                </new-item>
              `
        )
        : html`
              <div>No Content</div>
            `}
      </section>
    `;
    }

    
}