import Select from 'packages/select';
import { mount } from 'avoriaz';

describe('Select', () => {
  let wrapper;

  afterEach(() => {
    wrapper && wrapper.destroy();
  });

  it('create a select', () => {
    wrapper = mount(Select);

    expect(wrapper.data().selectStatus).to.equal(false);
    expect(wrapper.data().currentIndex).to.equal(0);
    expect(wrapper.data().showTitle).to.equal(true);
  });

  it('create a default value select', () => {
    wrapper = mount(Select, {
      propsData: {
        defaultValue: 1
      }
    });

    expect(wrapper.data().currentIndex).to.equal(1);
  });
});
