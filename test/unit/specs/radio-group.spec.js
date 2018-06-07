import { createTest, destroyVM } from '../util'
import RadioGroup from 'packages/radio-group'

describe('RadioGroup', () => {
  let vm
  afterEach(() => {
    destroyVM(vm)
  })

  it('create a radio-group', () => {
    vm = createTest(RadioGroup)

    expect(vm.$el.classList.contains('v-radio-group')).to.be.true
  })
})
