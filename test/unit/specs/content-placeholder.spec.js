import Placeholder from 'packages/content-placeholder';
import { mount } from 'avoriaz';

describe('ContentPlaceholder', () => {
  let wrapper;

  afterEach(() => {
    wrapper && wrapper.destroy();
  });

  it('create a content-placeholder', () => {
    let showPlaceholder = true;
    wrapper = mount(Placeholder.ContentPlaceholder, {
      propsData: {
        show: showPlaceholder
      }
    });

    expect(wrapper.hasClass('v-content-placeholder')).to.be.true;

    setTimeout(() => {
      showPlaceholder = false
      expect(wrapper.hasClass('v-content-placeholder')).not.to.be.true;
    }, 1000)
  });

  it('create a placeholder directive', () => {
    // let showPlaceholder = true;
    // wrapper = mount(ContentPlaceholder, {
    //   propsData: {
    //     show: showPlaceholder
    //   }
    // });
    console.log(Placeholder.directive);
  });
});
