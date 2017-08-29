import {createStore} from 'redux';
import catReducer from '../reducer/category.js';

export default () => createStore(catReducer);
