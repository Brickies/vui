import Toast from 'packages/toast/toast.js'
// import { mount } from 'avoriaz'

describe('Toast', () => {
  let wrapper
  afterEach(() => {
    wrapper && wrapper.destroy()
  })

  it('create a simple toast', () => {
    Toast('a toast message')
    var toast = document.querySelector('.v-toast')
    expect(toast).not.to.be.underfined

    setTimeout(() => {
      expect(toast).to.be.underfined
    }, 2001)
  })

  it('create html toast', () => {
    Toast('<strong style="font-size: 20px">HTML 文字提示~</strong>')
    var toast = document.querySelector('.v-toast')

    expect(toast).not.to.be.underfined

    setTimeout(() => {
      expect(toast).to.be.underfined
    }, 2001)
  })
})
