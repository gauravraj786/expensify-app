import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/confugureStore';
import { addExpense } from './actions/expenses';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase';

const store  = configureStore();

// store.dispatch(addExpense({ description: 'water bill', amount: 3500 }));
// store.dispatch(addExpense({ description: 'gas bill', createdAt: 1000 }));
// store.dispatch(addExpense({ description: 'rent', amount: 243400 }));
// store.dispatch(setTextFilter('water'))

// setTimeout(() => {
//     store.dispatch(setTextFilter('bill'));
// }, 3000);

// const state = store.getState();
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
// console.log(visibleExpenses);

const jsx = (
    <Provider store = {store}>
        <AppRouter/>
    </Provider>
);
ReactDOM.render(jsx ,document.getElementById('app'));
