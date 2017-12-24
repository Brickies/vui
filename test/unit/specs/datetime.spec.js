import Datetime from 'packages/picker/src/datetime';
import { mount } from 'avoriaz';

describe('Datetime', () => {
  let wrapper;

  afterEach(() => {
    wrapper && wrapper.destroy();
  });

  it('create a datetime', () => {
    wrapper = mount(Datetime);

    expect(wrapper.data().show).to.equal(false);
  });
});
