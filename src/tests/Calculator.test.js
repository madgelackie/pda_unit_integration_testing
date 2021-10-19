import React from 'react';
import Calculator from '../containers/Calculator';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = mount(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.find('#number4');
    const runningTotal = container.find('#running-total');
    button4.simulate('click');
    expect(runningTotal.text()).toEqual('4');
  })

  it('should add two numbers together to give new running total', () => {
    const button1 = container.find('#number1');
    const button4 = container.find('#number4'); 
    const operatorAdd = container.find('#operator_add');
    const operatorEquals = container.find('#operator-equals');
    const runningTotal = container.find('#running-total');
    button1.simulate('click');
    operatorAdd.simulate('click');
    button4.simulate('click');
    operatorEquals.simulate('click');
    expect(runningTotal.text()).toEqual('5');
  })

it('should subtract one number from another to give new running total', () => {
    const button7 = container.find('#number7');
    const button4 = container.find('#number4'); 
    const operatorSubtract = container.find('#operator-subtract');
    const operatorEquals = container.find('#operator-equals');
    const runningTotal = container.find('#running-total');
    button7.simulate('click');
    operatorSubtract.simulate('click');
    button4.simulate('click');
    operatorEquals.simulate('click');
    expect(runningTotal.text()).toEqual('3');
})

it('should multiply one number by another to give new running total', () => {
  const button3 = container.find('#number3');
  const button5 = container.find('#number5'); 
  const operatorMultiply = container.find('#operator-multiply');
  const operatorEquals = container.find('#operator-equals');
  const runningTotal = container.find('#running-total');
  button3.simulate('click');
  operatorMultiply.simulate('click');
  button5.simulate('click');
  operatorEquals.simulate('click');
  expect(runningTotal.text()).toEqual('15');
})

it('should divide one number by another to give a new running total', () => {
  const button2 = container.find('#number2');
  const button1 = container.find('#number1');
  const button7 = container.find('#number7'); 
  const operatorDivide = container.find('#operator-divide');
  const operatorEquals = container.find('#operator-equals');
  const runningTotal = container.find('#running-total');
  button2.simulate('click');
  button1.simulate('click');
  operatorDivide.simulate('click');
  button7.simulate('click');
  operatorEquals.simulate('click');
  expect(runningTotal.text()).toEqual('3');
})

it('should concatenate multiple number clicks', () => {
  const button8 = container.find('#number8');
  const runningTotal = container.find('#running-total');
  button8.simulate('click');
  button8.simulate('click');
  button8.simulate('click');
  expect(runningTotal.text()).toEqual('888');

})

})

