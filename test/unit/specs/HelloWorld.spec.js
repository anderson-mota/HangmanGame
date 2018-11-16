import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld'

describe('HelloWorld.vue', () => {

    it('has a created hook', () => {
      expect(typeof HelloWorld.created).toBe('function')
  })

  it('sets the correct default data', () => {
      expect(typeof HelloWorld.data).toBe('function')
      const defaultData = HelloWorld.data()
      expect(defaultData.msg).toBe('Welcome to Mota`s App.')
  })

  it('should render correct contents', () => {
    const Constructor = Vue.extend(HelloWorld)
    const vm = new Constructor().$mount()
    expect(vm.msg).toBe('Welcome to Mota`s App.')
    expect(vm.$el).toBeDefined()
    expect(vm.$el.querySelector('.hello h1').textContent)
      .toEqual('Welcome to Mota`s App.')
  })
})
