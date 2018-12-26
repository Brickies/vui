import Icon from 'packages/icon'
import { mount } from 'avoriaz'
import { expect } from 'chai'

describe('Icon', () => {
  let wrapper

  afterEach(() => {
    wrapper && wrapper.destroy()
  })

  it('create a address icon', () => {
    wrapper = mount(Icon, {
      propsData: {
        name: 'address'
      }
    })

    expect(wrapper.hasClass('v-icon')).to.be.true
    expect(wrapper.hasClass('v-icon-address')).to.be.true
  })
})
