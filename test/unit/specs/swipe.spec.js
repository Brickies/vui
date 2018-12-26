import Swipe from 'packages/swiper/swipe'
import { mount } from 'avoriaz'
import { expect } from 'chai'

describe('Swipe', () => {
  let wrapper

  afterEach(() => {
    wrapper && wrapper.destroy()
  })

  it('create a swipe', () => {
    wrapper = mount(Swipe)

    expect(wrapper.hasClass('v-swipe')).to.be.true
  })
})
