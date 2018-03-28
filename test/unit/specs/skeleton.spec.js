import Skeleton from 'packages/skeleton'
import { mount } from 'avoriaz'

describe('Skeleton', () => {
  let wrapper

  afterEach(() => {
    wrapper && wrapper.destroy()
  })

  it('create a skeleton', () => {
    let showPlaceholder = true
    wrapper = mount(Skeleton, {
      propsData: {
        show: showPlaceholder
      }
    })

    expect(wrapper.hasClass('v-skeleton')).to.be.true

    setTimeout(() => {
      showPlaceholder = false
      expect(wrapper.hasClass('v-skeleton')).not.to.be.true
    }, 1000)
  })

  it('create a placeholder directive', () => {
    console.log('create a placeholder directive')
  })
})
