import React from 'react';
import _ from 'lodash';
import { Card, Button, Confirm } from './common';
import { connect } from 'react-redux';
import { employeeUpdate, employeeSave, employeeDelete } from '../actions';
import EmployeeForm from './employeeform';
import Communications from 'react-native-communications';

class EmployeeEdit extends React.Component {

	state =	{ showModal: false }; 

	componentWillMount() {
		_.each(this.props.employee, (value, prop) => {
			this.props.employeeUpdate({prop, value});
		});
	}

	onButtonPress() {
		const { name, phone, shift } = this.props;
		this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid });
	}

	onTextPress() {
		const { phone, shift } = this.props;
		Communications.text(phone, `Your upcoming shift is on ${shift}`);
	}

	onAccept() { 
		const { uid } = this.props.employee;
		this.props.employeeDelete({ uid });
	}

	onDecline() {
		this.setState({ showModal: false });
	}

	render() {
		return (
			<Card>
				<EmployeeForm />
				<Button onPress={this.onButtonPress.bind(this)}>Save Changes</Button>
				<Button style={{ marginTop: 3 }} onPress={this.onTextPress.bind(this)}>Text Schedule</Button>
				<Button style={{ marginTop: 3 }} onPress={() => this.setState({ showModal: !this.state.showModal })}>Fire</Button>
				<Confirm
					visible={this.state.showModal}
					onAccept={this.onAccept.bind(this)}
					onDecline={this.onDecline.bind(this)}
				>
					Are you sure you want to delete this?
				</Confirm>
			</Card>
		);
	}
}

const mapStateToProps = state => {
	const { name, phone, shift } = state.employeeForm;

	return { name, phone, shift };
}

export default connect(mapStateToProps, { employeeUpdate, employeeSave, employeeDelete })(EmployeeEdit);