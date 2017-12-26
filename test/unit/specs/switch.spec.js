import Switch from 'packages/switch';
import { mount } from 'avoriaz';

describe('Switch', () => {
  let wrapper;

  afterEach(() => {
    wrapper && wrapper.destroy();
  });

  it('create on switch', () => {
    wrapper = mount(Switch, {
      propsData: {
        value: true
      }
    });

    expect(wrapper.hasClass('v-switch')).to.be.true;
    expect(wrapper.hasClass('active')).to.be.true;
  });

  it('create off switch', () => {
    wrapper = mount(Switch, {
      propsData: {
        value: false
      }
    });

    expect(wrapper.hasClass('v-switch')).to.be.true;
    expect(wrapper.hasClass('inactive')).to.be.true;
  });

  it('loading switch should be unclickable', () => {
    wrapper = mount(Switch, {
      propsData: {
        loading: true,
        value: true
      }
    });

    expect(wrapper.hasClass('active')).to.be.true;
    wrapper.simulate('click');
    expect(wrapper.hasClass('active')).to.be.true;
  });

  it('create disabled switch', () => {
    wrapper = mount(Switch, {
      propsData: {
        disabled: true
      }
    });

    expect(wrapper.hasClass('v-switch')).to.be.true;
    expect(wrapper.hasClass('disabled')).to.be.true;
  });

  it('disabled switch should be unclickable', () => {
    wrapper = mount(Switch, {
      propsData: {
        disabled: true,
        value: false
      }
    });

    expect(wrapper.hasClass('inactive')).to.be.true;
    wrapper.simulate('click');
    expect(wrapper.hasClass('inactive')).to.be.true;
  });
});
