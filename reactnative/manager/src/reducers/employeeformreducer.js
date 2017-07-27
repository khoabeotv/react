import {
	EMPLOYEE_UPDATE, 
	EMPLOYEE_CREATE,
	EMPLOYEE_SAVE,
	BACK_TO_LIST
} from '../actions/types';

const INITIAL_STATE = {
	name: '',
	phone: '',
	shift: ''
};

export default (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case EMPLOYEE_UPDATE:
			return { ...state, [action.payload.prop]: action.payload.value };
		case EMPLOYEE_CREATE:
			return INITIAL_STATE;
		case EMPLOYEE_SAVE:
			return INITIAL_STATE;
		case BACK_TO_LIST:
			return INITIAL_STATE;
		default:
		 return state;
	};
}