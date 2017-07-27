import React from 'react';
import { Text, View } from 'react-native';

class Header extends React.Component {
	render() {
		return (
			<View style={styles.viewStyle}>
				<Text style={styles.textStyle}>{this.props.headerText}</Text>
			</View>
		);
	}
}

const styles = {	
	textStyle: {
		fontSize: 20,
		color: '#000000',
	},

	viewStyle: {
		backgroundColor: '#F8F8F8',
		justifyContent: 'center',
		alignItems: 'center',
		height: 60,
		elevation: 2,
		position: 'relative',
	},
};
export { Header };