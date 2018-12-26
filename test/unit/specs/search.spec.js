import Search from 'packages/search'
import { mount } from 'avoriaz'
import { expect } from 'chai'

describe('Search', () => {
  let wrapper

  afterEach(() => {
    wrapper && wrapper.destroy()
  })

  it('create a default search', () => {
    wrapper = mount(Search)

    expect(wrapper.hasClass('v-search')).to.be.true
    expect(wrapper.data().showClose).to.equal(false)
    expect(wrapper.data().searchFlag).to.equal(true)

    const input = wrapper.find('.v-search__input')[0]
    input.trigger('keyup')
    expect(wrapper.data().searchFlag).to.equal(false)

    setTimeout(() => {
      expect(wrapper.data().searchFlag).to.equal(true)
    }, 101)
  })

  it('create a async search', () => {
    wrapper = mount(Search, {
      propsData: {
        async: false
      }
    })
    expect(wrapper.data().searchFlag).to.equal(true)

    const input = wrapper.find('.v-search__input')[0]
    input.trigger('keyup')
    expect(wrapper.data().searchFlag).to.equal(true)
  })
})
