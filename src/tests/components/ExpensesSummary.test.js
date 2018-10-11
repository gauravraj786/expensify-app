import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseSummary } from '../../components/ExpenseSummary';

test('should correctly render ExpenseSummary with 1 expense',() => {
    const wrapper = shallow(<ExpenseSummary expneseCount={1} expenseTotal={235} />);
    expect(wrapper).toMatchSnapshot();
});

test('should correctly render ExpenseSummary with multiple expenses',() => {
    const wrapper = shallow(<ExpenseSummary expneseCount={23} expenseTotal={2359765987} />);
    expect(wrapper).toMatchSnapshot();
});