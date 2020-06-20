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
        //var data = [{ id: 1, title: '안녕하세요' }, { id: 1, title: '안녕하세요' }, { id: 1, title: '안녕하세요' }, { id: 1, title: '안녕하세요' }, { id: 1, title: '안녕하세요' }, { id: 1, title: '안녕하세요' }, { id: 1, title: '안녕하세요' }, { id: 1, title: '안녕하세요' }];
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
                }],
                commission: 1500,
                requester: "User2",
                response_r: null,
                createdAt: "16:00",
                status: "WAIT"
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
                status: "WAIT"
            }
        ];
        //console.log(data[0].goods[0].product,data[0].goods[0].price);
        return html `
      <section>
        ${data.length > 0
        ? data.map(
            item => html`
                <new-item
                    goods="${item.goods}"
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