import Dialog from 'packages/dialog/dialog'
import { expect } from 'chai'
// import { mount } from 'avoriaz'

describe('Dialog', () => {
  let wrapper
  afterEach(() => {
    wrapper && wrapper.destroy()
  })

  it('create a dialog component', () => {
    Dialog({
      title: 'test',
      okText: '确定'
    })
    const dialog = document.querySelector('.v-dialog')
    expect(dialog).not.to.be.undefined

    const confirmBtn = document.querySelector('.v-dialog-ok')
    expect(confirmBtn).not.to.be.undefined

    const content = document.querySelector('.v-dialog-content')
    expect(content).not.to.be.undefined
  })
})
