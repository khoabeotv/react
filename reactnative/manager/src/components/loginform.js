import React from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { CardSection, Button, Spinner, Card, Input } from './common';

class LoginForm extends React.Component {

	onEmailChange(text) {
		this.props.emailChanged(text);
	}

	onPasswordChange(text) {
		this.props.passwordChanged(text);
	}

	onButtonPress() {
		const { email, password } = this.props;

		this.props.loginUser({ email, password });
	}

	renderButton() {
		if (this.props.loading) {
			return <Spinner size="large" />;
		}

		return <Button onPress={this.onButtonPress.bind(this)}>Login</Button>;
	}

	renderError() {
		if (this.props.error !== '') {
			return (
				<CardSection>
					<Text style={styles.errorStyle}>
						{this.props.error}
					</Text>
				</CardSection>
			);
		}
	}

	render() {
		return (
			<View>
				<Card>
					<CardSection> 
						<Input 
							label="Email"
							placeholder="user@gmail.com"
							onChangeText={this.onEmailChange.bind(this)}
							value={this.props.email}
						/>
					</CardSection>

					<CardSection>
						<Input 
							secureTextEntry
							placeholder="password"
							label="Password"
							onChangeText={this.onPasswordChange.bind(this)}
							value={this.props.password}
						/>
					</CardSection>

					{this.renderError()}
				</Card>
				{this.renderButton()}
			</View>
		);
	}
}

const styles = {
	errorStyle: {
		fontSize: 18,
		flex: 1,
		textAlign: 'center',
		color: 'red'
	}
};

const mapStateToProps = ({ auth }) => {
	const { email, password, error, loading } = auth;
	return { 
		email, password, error, loading
	};
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);
