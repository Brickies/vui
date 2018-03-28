import Cell from 'packages/cell'
import { mount } from 'avoriaz'

describe('Cell', () => {
  let wrapper

  afterEach(() => {
    wrapper && wrapper.destroy()
  })

  it('create a cell with nothing', () => {
    wrapper = mount(Cell)

    expect(wrapper.hasClass('v-cell')).to.be.true
  })
})
