import Arrow from 'packages/scroller/src/arrow';
import { mount } from 'avoriaz';

describe('Arrow', () => {
  let wrapper;

  afterEach(() => {
    wrapper && wrapper.destroy();
  });

  it('create a arrow', () => {
    wrapper = mount(Arrow);
  });
});
