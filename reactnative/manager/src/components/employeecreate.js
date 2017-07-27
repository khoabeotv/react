import React from 'react';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate, backToList } from '../actions';
import { Card, Button } from './common';
import EmployeeForm from './employeeform';

class EmployeeCreate extends React.Component {

	componentWillMount() {
		this.props.backToList();
	}

	onButtonPress() {
		const { name, phone, shift } = this.props;
		this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
	}

	render() {
		return (
			<Card>
			<EmployeeForm {...this.props} />
				<Button onPress={this.onButtonPress.bind(this)}>
					Create
				</Button>
			</Card>
		);
	}
}

const mapStateToProps = ({ employeeForm }) => {
	const { name, phone, shift } = employeeForm;
	return { name, phone, shift };
};

export default connect(
	mapStateToProps, 
	{ employeeUpdate, employeeCreate, backToList }
)(EmployeeCreate);
