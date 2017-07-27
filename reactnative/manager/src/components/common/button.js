import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children, style }) => (
	<TouchableOpacity onPress={onPress} style={[styles.buttonStyle, style]}>
		<Text style={styles.textStyle}> {children} </Text>
	</TouchableOpacity>
);


const styles = {

	textStyle: {
		alignSelf: 'center',
		color: '#007aff',
		fontSize: 16,
		fontWeight: '600',
		paddingTop: 10,
		paddingBottom: 10,
	},

	buttonStyle: {
		backgroundColor: '#fff',
		borderRadius: 2,
		elevation: 2,
	}
};

export { Button };
