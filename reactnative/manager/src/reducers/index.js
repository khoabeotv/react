import { combineReducers } from 'redux';
import AuthReducer from './authreducer';
import EmployeeFormReducer from './employeeformreducer';
import EmployeeReducer from './employeereducer';

export default combineReducers({
	auth: AuthReducer,
	employeeForm: EmployeeFormReducer,
	employees: EmployeeReducer
});
