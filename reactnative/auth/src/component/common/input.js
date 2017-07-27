import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
	return (
		<View style={styles.containerStyle}>
			<Text style={styles.labelStyle}>{label}</Text>
			<TextInput
				secureTextEntry={secureTextEntry}
				autoCorrect={false}
				placeholder={placeholder}
				style={styles.inputStyle}
				value={value}
				onChangeText={onChangeText}
			/>  
		</View>
	);
};

const styles = {
	inputStyle: {
		fontSize: 18,
		lineHeight: 23,
		color: '#000',
		paddingLeft: 5,
		paddingRight: 5,
		flex: 2,
	},

	labelStyle: {
		color: '#000',
		fontSize: 18,
		flex: 1,
		textAlign: 'center',
	},

	containerStyle: {
		flex: 1,
		flexDirection: 'row',
		alignItems:'center'
	},
};

export { Input };