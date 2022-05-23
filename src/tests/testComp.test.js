/** Steps
 * Смонтировать компонент [done]
 * Передать пропс [done]
 * Проверить наличие выведенного пропса  [done]
*/
import {mount} from '@vue/test-utils'
import TestCompVue from '../components/TestComp.vue'

describe('Test Component',()=>{
  test('Test Content with text',()=>{
    const wrapper = mount(TestCompVue, {
      propsData: {
        message: "Hello from test" 
      }
    }) 
    expect(wrapper.text()).toEqual('The message is: Hello from test')
  })

  test('Test Content with html',()=>{
    const wrapper = mount(TestCompVue, {
      propsData: {
        message: "Hello from test" 
      }
    }) 
    expect(wrapper.html()).toEqual('<div>The message is: Hello from test</div>')
  })
})