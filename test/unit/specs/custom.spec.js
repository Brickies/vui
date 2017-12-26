import Custom from 'packages/picker/src/custom';
import { mount } from 'avoriaz';

describe('Custom', () => {
  let wrapper;

  afterEach(() => {
    wrapper && wrapper.destroy();
  });

  it('create a custom', () => {
    wrapper = mount(Custom, {
      propsData: {
        value: [
          { name: "保密", value: 0 },
          { name: "男", value: 1 },
          { name: "女", value: 2 }
        ]
      }
    });

    expect(wrapper.data().show).to.equal(false);
  });
});
