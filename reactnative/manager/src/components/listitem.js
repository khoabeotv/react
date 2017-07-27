import React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { CardSection } from './common';
import { Actions } from 'react-native-router-flux';

class ListItem extends React.Component {

	onRowPress() {
		Actions.employeeEdit({ employee: this.props.employee });
	}

	render() {
		const { name } = this.props.employee;

		return (
			<TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
				<View>
					<CardSection>
						<Text style={{ fontSize: 18, color: '#000', paddingLeft: 16 }}>
							{name}
						</Text>
					</CardSection>
				</View>
			</TouchableWithoutFeedback>
		);
	};
}

export default ListItem;