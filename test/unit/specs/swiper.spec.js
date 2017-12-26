import Swiper from 'packages/swiper';
import { mount } from 'avoriaz';

describe('Swiper', () => {
  let wrapper;

  afterEach(() => {
    wrapper && wrapper.destroy();
  });

  it('create a default swiper', () => {
    wrapper = mount(Swiper);

    expect(wrapper.hasClass('v-swiper')).to.be.true;
    expect(wrapper.data().currentIndex).to.equal(0);
    expect(wrapper.data().currentThumIndex).to.equal(0);
  });

  it('create a thum swiper', () => {
    wrapper = mount(Swiper, {
      propsData: {
        type: 'thum'
      }
    });

    expect(wrapper.hasClass('v-swiper')).to.be.true;
    const defaultSwiper = wrapper.find('.v-default-swiper')[0]
    defaultSwiper.trigger('click');
    expect(wrapper.data().currentIndex).to.equal(0);
    expect(wrapper.data().currentThumIndex).to.equal(0);
    expect(wrapper.data().showThum).to.equal(true);
  });
});
