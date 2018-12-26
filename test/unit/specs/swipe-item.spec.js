import SwipeItem from 'packages/swiper/swipe-item'
import { mount } from 'avoriaz'
import { expect } from 'chai'

describe('SwipeItem', () => {
  let wrapper

  afterEach(() => {
    wrapper && wrapper.destroy()
  })

  it('create a swipe item', () => {
    wrapper = mount(SwipeItem)

    expect(wrapper.hasClass('v-swipe-item')).to.be.true
  })
})
