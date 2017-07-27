import React from 'react';
import { connect } from 'react-redux';
import { View, Text, Picker } from 'react-native';
import { CardSection, Input } from './common';
import { employeeUpdate } from '../actions';

class EmployeeForm extends React.Component {
	render() {
		return (
			<View>
				<CardSection>
				<Input 
					label="Name" 
					placeholder="Jane" 
					value={this.props.name}
					onChangeText={value => this.props.employeeUpdate({ prop: 'name', value })}
				/>
				</CardSection>

				<CardSection>
				<Input 
					label="Phone" 
					placeholder="0973-667-874" 
					value={this.props.phone}
					onChangeText={value => this.props.employeeUpdate({ prop: 'phone', value })}
				/>	
				</CardSection>

				<CardSection style={{ flexDirection: 'row' }}>
				<Text style={{ fontSize: 18, marginLeft: 20, alignSelf: 'center', color: '#000', flex: 1 }}>
					Shift
				</Text>
				<Picker 
					style={{ flex: 2 }} 
					selectedValue={this.props.shift} 
					onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value })}
				>
					<Picker.Item label="Monday" value="Monday" />
					<Picker.Item label="Tuesday" value="Tuesday" />
					<Picker.Item label="Wednesday" value="Wednesday" />
					<Picker.Item label="Thursday" value="Thursday" />
					<Picker.Item label="Friday" value="Friday" />
					<Picker.Item label="Saturday" value="Saturday" />
					<Picker.Item label="Sunday" value="Sunday" />
				</Picker>
				</CardSection>
			</View>
		);
	}
}

const mapStateToProps = (state) => {
	const { name, phone, shift } = state.employeeForm;
	return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);

