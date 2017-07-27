import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/loginform';
import EmployeeList from './components/employeelist';
import EmployeeCreate from './components/employeecreate';
import EmployeeEdit from './components/employeeedit';

const RouterComponent = () => (
	<Router sceneStyle={{ paddingTop: 60 }}>
		<Scene key="auth">
			<Scene key="login" component={LoginForm} title="Login" />
		</Scene>
		<Scene key="main">
			<Scene 
				onRight={() => Actions.employeeCreate()}
				rightTitle="Add"
				key="employeeList" 
				component={EmployeeList} 
				title="Employees"
				initial 
			/>
			<Scene 
				key="employeeCreate"
				component={EmployeeCreate}
				title="Create Employee"
			/>
			<Scene
				key="employeeEdit"
				component={EmployeeEdit}
				title="Edit Employee"
			/>
		</Scene>
	</Router>
);

export default RouterComponent;
