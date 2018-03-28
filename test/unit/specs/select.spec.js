import Select from 'packages/select'
import { mount } from 'avoriaz'

describe('Select', () => {
  let wrapper

  afterEach(() => {
    wrapper && wrapper.destroy()
  })

  it('create a select', () => {
    wrapper = mount(Select, {
      propsData: {
        selectData: [
          { id: 1, name: 'LIST ONE 1' },
          { id: 2, name: 'LIST ONE 2' },
          { id: 3, name: 'LIST ONE 3' },
          { id: 4, name: 'LIST ONE 4' },
          { id: 5, name: 'LIST ONE 5' }
        ]
      }
    })

    expect(wrapper.data().selectStatus).to.equal(false)
    expect(wrapper.data().currentIndex).to.equal(0)
    expect(wrapper.data().showTitle).to.equal(true)
  })

  it('create a default value select', () => {
    wrapper = mount(Select, {
      propsData: {
        defaultValue: 1,
        selectData: [
          { id: 1, name: 'LIST ONE 1' },
          { id: 2, name: 'LIST ONE 2' },
          { id: 3, name: 'LIST ONE 3' },
          { id: 4, name: 'LIST ONE 4' },
          { id: 5, name: 'LIST ONE 5' }
        ]
      }
    })

    expect(wrapper.data().currentIndex).to.equal(1)
  })
})
