// Importando o Vue e o componente a ser testado
import Vue from 'vue'
import MyComponent from '@/components/MyComponent'

// Alguns testes do Jasmine 2.0, apesar de que você pode usar
// qualquer test runner / assertion library que preferir
describe('MyComponent', () => {
    // Inspeciona as opções do componente
    it('has a created hook', () => {
        expect(typeof MyComponent.created).toBe('function')
    })

    // Avalia os resultados das funções
    // nas opções do componente
    it('sets the correct default data', () => {
        expect(typeof MyComponent.data).toBe('function')
        const defaultData = MyComponent.data()
        expect(defaultData.message).toBe('hello!')
    })

    // Inspeciona a instância do componente ao montar
    it('correctly sets the message when created', () => {
        const vm = new Vue(MyComponent).$mount()
        expect(vm.message).toBe('bye!')
    })

    // Monta uma instância e inspeciona a saída de renderização
    it('renders the correct message', () => {
        const Constructor = Vue.extend(MyComponent)
        const vm = new Constructor().$mount()
        expect(vm.$el.textContent).toBe('bye!')
    })
})