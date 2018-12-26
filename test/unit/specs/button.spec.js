import Button from 'packages/button'
import { mount } from 'avoriaz'
import { expect } from 'chai'

describe('Button', () => {
  let wrapper

  afterEach(() => {
    wrapper && wrapper.destroy()
  })

  it('create a default button', () => {
    wrapper = mount(Button)

    expect(wrapper.hasClass('v-button')).to.be.true
    expect(wrapper.hasClass('v-button--default')).to.be.true
    expect(wrapper.hasClass('v-button--normal')).to.be.true
  })
  it('create a primary button', () => {
    wrapper = mount(Button, {
      propsData: {
        type: 'primary'
      }
    })

    expect(wrapper.hasClass('v-button')).to.be.true
    expect(wrapper.hasClass('v-button--primary')).to.be.true
  })
  it('create a warn button', () => {
    wrapper = mount(Button, {
      propsData: {
        type: 'warn'
      }
    })

    expect(wrapper.hasClass('v-button')).to.be.true
    expect(wrapper.hasClass('v-button--warn')).to.be.true
  })
  it('create a large button', () => {
    wrapper = mount(Button, {
      propsData: {
        size: 'large'
      }
    })

    expect(wrapper.hasClass('v-button')).to.be.true
    expect(wrapper.hasClass('v-button--large')).to.be.true
  })
  it('create a normal button', () => {
    wrapper = mount(Button, {
      propsData: {
        size: 'normal'
      }
    })

    expect(wrapper.hasClass('v-button')).to.be.true
    expect(wrapper.hasClass('v-button--normal')).to.be.true
  })
  it('create a middle button', () => {
    wrapper = mount(Button, {
      propsData: {
        size: 'middle'
      }
    })

    expect(wrapper.hasClass('v-button')).to.be.true
    expect(wrapper.hasClass('v-button--middle')).to.be.true
  })
  it('create a small button', () => {
    wrapper = mount(Button, {
      propsData: {
        size: 'small'
      }
    })

    expect(wrapper.hasClass('v-button')).to.be.true
    expect(wrapper.hasClass('v-button--small')).to.be.true
  })
  it('create a block button', () => {
    wrapper = mount(Button, {
      propsData: {
        block: true
      }
    })

    expect(wrapper.hasClass('v-button')).to.be.true
    expect(wrapper.hasClass('v-button--block')).to.be.true
  })
  it('create a disabled button', () => {
    wrapper = mount(Button, {
      propsData: {
        disabled: true
      }
    })

    expect(wrapper.hasClass('v-button')).to.be.true
    expect(wrapper.hasClass('v-button--disabled')).to.be.true
  })
  it('create a fixed button', () => {
    wrapper = mount(Button, {
      propsData: {
        fixed: true
      }
    })

    expect(wrapper.hasClass('v-button')).to.be.true
    expect(wrapper.hasClass('v-button--fixed')).to.be.true
  })
})
