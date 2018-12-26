import Picker from 'packages/picker'
import { mount } from 'avoriaz'
import { expect } from 'chai'

describe('Picker', () => {
  let wrapper

  afterEach(() => {
    wrapper && wrapper.destroy()
  })

  it('create a pick', () => {
    wrapper = mount(Picker, {
      propsData: {
        type: 'date'
      }
    })
    expect(wrapper.hasClass('m-datetime')).not.to.be.true
  })
})
