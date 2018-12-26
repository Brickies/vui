import { createTest, destroyVM } from '../util'
import Radio from 'packages/radio'
import { expect } from 'chai'

describe('Radio', () => {
  let vm
  afterEach(() => {
    destroyVM(vm)
  })

  it('create a radio', () => {
    vm = createTest(Radio)

    expect(vm.$el.classList.contains('v-radio')).to.be.true
  })
})
