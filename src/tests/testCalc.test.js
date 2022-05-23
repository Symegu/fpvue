import { mount } from "@vue/test-utils";
import Calc from "../components/Calc.vue";
import { expect } from "@jest/globals";
import 'regenerator-runtime/runtime'


describe('Test Calculator', ()=>{
  it('test operand1', ()=>{
    const wrapper = mount(Calc)
    const operand1 = wrapper.find('input[name=operand1]')
    operand1.setValue('1')

    expect(wrapper.vm.operand1).toBe(1)
  })

  it('test operand2', ()=>{
    const wrapper = mount(Calc)

    const operand2 = wrapper.find('input[name=operand2]')
    operand2.element.value = '1'
    operand2.trigger('input')

    expect(wrapper.vm.operand2).toBe(1)
  })

  it('test sum', ()=>{
    const wrapper = mount(Calc)
    const operand1 = wrapper.find('input[name=operand1]')
    const operand2 = wrapper.find('input[name=operand2]')
    operand1.setValue('1')
    operand2.setValue('2')
    const sumOperationButton = wrapper.find('button[name="+"]')
    sumOperationButton.trigger('click')

    const btn = wrapper.find('button[name="+"]')
    btn.trigger('click')

    expect(wrapper.vm.result).toBe(3)
  })

  it('test dif', ()=>{
    const wrapper = mount(Calc)
    const operand1 = wrapper.find('input[name=operand1]')
    const operand2 = wrapper.find('input[name=operand2]')
    operand1.setValue('2')
    operand2.setValue('1')

    const btn = wrapper.find('button[name="-"]')
    btn.trigger('click')

    expect(wrapper.vm.result).toBe(1)
  })

  it('test mult', ()=>{
    const wrapper = mount(Calc)
    const operand1 = wrapper.find('input[name=operand1]')
    const operand2 = wrapper.find('input[name=operand2]')
    operand1.setValue('2')
    operand2.setValue('2')

    const btn = wrapper.find('button[name="*"]')
    btn.trigger('click')

    expect(wrapper.vm.result).toBe(4)
  })

  it('test division', ()=>{
    const wrapper = mount(Calc)
    const operand1 = wrapper.find('input[name=operand1]')
    const operand2 = wrapper.find('input[name=operand2]')
    operand1.setValue('4')
    operand2.setValue('2')

    const btn = wrapper.find('button[name="/"]')
    btn.trigger('click')

    expect(wrapper.vm.result).toBe(2)
  })

  it('test screen keyboard', async () => {
    const wrapper = mount(Calc)
    const showvk = wrapper.find('input[type="checkbox"]')
    await showvk.setChecked()
    expect(wrapper.element.checked).toBeTruthy

    const setOperand2 = wrapper.find('input[name=radio2]')
    await setOperand2.setChecked()
    expect(wrapper.vm.operand1).toBeTruthy
    
    const btnTwo = wrapper.find('button[name=btn2]')
    btnTwo.trigger('click')
    btnTwo.trigger('click')
    expect(wrapper.vm.operand2).toBe(22)

    const delBtn = wrapper.find('button[name=remove]')
    delBtn.trigger('click')
    expect(wrapper.vm.operand2).toBe(2)

    const setOperand1 = wrapper.find('input[name=radio1]')
    await setOperand1.setChecked()
    expect(wrapper.vm.operand1).toBeTruthy

    const btnFour = wrapper.find('button[name=btn4]')
    btnFour.trigger('click')
    btnFour.trigger('click')
    expect(wrapper.vm.operand1).toBe(44)

    delBtn.trigger('click')
    expect(wrapper.vm.operand1).toBe(4)

})
})