import Picker from 'packages/picker';
import { mount } from 'avoriaz';

describe('Picker', () => {
  let wrapper;

  afterEach(() => {
    wrapper && wrapper.destroy();
  });

  it('create a pick', () => {
    wrapper = mount(Picker, {
      propsData: {
        type: 'date'
      }
    });
    expect(wrapper.hasClass('m-datetime')).not.to.be.true;
    wrapper.simulate('click')
    expect(wrapper.data().picker).not.be.undefined;
  });
});
