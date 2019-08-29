// Компонент Counter - простой счётчик
// Напишите для него тесты.
// Убедитесь, что вы протестировали всю функциональнось.
// Также проверьте что компонент рендерится верно, используя Snapshot тест.

// * Задание со звёздочкой - выполнять не обязательно

// Вынесите логику в хук и протестируйте его

import React from 'react'
import { Counter } from './Counter'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'

describe('Counter', () => {
    it('renders correctly', () => {
        const tree = renderer.create(<Counter />).toJSON()
        expect(tree).toMatchSnapshot( )
    })

    describe('count correctly', () => {
        const wrapper = shallow(<Counter />)
        const increment = wrapper.find('.increment')
        const decrement = wrapper.find('.decrement')

        it('increment correctly', () => {
            expect(wrapper.find('.count').text()).toEqual('0');
            increment.simulate('click');
            expect(wrapper.find('.count').text()).toEqual('1');
        })

        it('decrement correctly', () => {
            expect(wrapper.find('.count').text()).toEqual('1');
            decrement.simulate('click');
            expect(wrapper.find('.count').text()).toEqual('0');
        })
    })
})
