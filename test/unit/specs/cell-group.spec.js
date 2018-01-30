import CellGroup from 'packages/cell-group';
import { mount } from 'avoriaz';

describe('CellGroup', () => {
  let wrapper;

  afterEach(() => {
    wrapper && wrapper.destroy();
  });

  it('create a cell-group', () => {
    wrapper = mount(CellGroup);

    expect(wrapper.hasClass('v-cell-group')).to.be.true;
    expect(wrapper.hasClass('v-cell-group--top-bottom')).to.be.true;
  });
  it('create a no border cell-group', () => {
    wrapper = mount(CellGroup, {
      propsData: {
        border: false
      }
    });

    expect(wrapper.hasClass('v-cell-group')).to.be.true;
    expect(wrapper.hasClass('v-cell-group--top-bottom')).not.to.be.true;
  });
});
