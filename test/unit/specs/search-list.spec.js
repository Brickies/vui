import SearchList from 'packages/search-list'
import { mount } from 'avoriaz'

describe('SearchList', () => {
  let wrapper

  afterEach(() => {
    wrapper && wrapper.destroy()
  })

  it('create a search-list', () => {
    wrapper = mount(SearchList)

    expect(wrapper.hasClass('v-search-list')).to.be.true
    expect(wrapper.data().visible).to.equal(false)
  })
})
