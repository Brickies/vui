import Scroller from 'packages/scroller';
import { mount } from 'avoriaz';

describe('Scroller', () => {
  let wrapper;

  afterEach(() => {
    wrapper && wrapper.destroy();
  });

  it('create a scroller', () => {
    wrapper = mount(Scroller);

    expect(wrapper.hasClass('v-scroller')).to.be.true;
    expect(wrapper.data().loadingState).to.equal(0);
  });

  it('create a only pullRefresh scroller', () => {
    wrapper = mount(Scroller, {
      propsData: {
        isLoadMore: false
      }
    });

    expect(wrapper.hasClass('v-scroller')).to.be.true;
    expect(wrapper.hasClass('v-scroller-loading')).not.to.be.true;
  });
});
