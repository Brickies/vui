import Swipe from 'packages/swipe';
import { mount } from 'avoriaz';

describe('Swipe', () => {
  let wrapper;

  afterEach(() => {
    wrapper && wrapper.destroy();
  });

  it('create a swipe', () => {
    wrapper = mount(Swipe);

    expect(wrapper.hasClass('v-swipe')).to.be.true;
  });
});
