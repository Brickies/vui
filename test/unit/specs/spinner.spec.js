import Spinner from 'packages/scroller/src/spinner';
import { mount } from 'avoriaz';

describe('Spinner', () => {
  let wrapper;

  afterEach(() => {
    wrapper && wrapper.destroy();
  });

  it('create a spinner', () => {
    wrapper = mount(Spinner);
  });
});
