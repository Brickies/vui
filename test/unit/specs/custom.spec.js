import Custom from 'packages/picker/src/custom';
import { mount } from 'avoriaz';

describe('Custom', () => {
  let wrapper;

  afterEach(() => {
    wrapper && wrapper.destroy();
  });

  it('create a custom', () => {
    wrapper = mount(Custom);

    expect(wrapper.data().show).to.equal(false);
  });
});
