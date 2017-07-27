import React, { Component } from 'react';
import { Button, Card, CardSection, Input, Spinner } from './common';
import { Text } from 'react-native';
import firebase from 'firebase';

export default class LoginForm extends Component {

	constructor() {
		super();
		this.state = {
			email: '',
			password: '',
			error: '',
			loading: false
		};
	}

	onButtonPress() {
		const { email, password } = this.state;

		this.setState({ error: '', loading: true });

		firebase.auth().signInWithEmailAndPassword(email, password)
			.then(this.onLoginSuccess.bind(this))
			.catch(() => {
				firebase.auth().createUserWithEmailAndPassword(email, password)
					.then(this.onLoginSuccess.bind(this ))
					.catch(this.onLoginFailed.bind(this));
			});
	}

	onLoginFailed() {
		this.setState({ error: 'Authentication Failed.', loading: false });
	}

	onLoginSuccess() {
		this.setState({
			email: '',
			password: '',
			error: '',
			loading: false
		});
	}

	renderButton() {
		if (this.state.loading) {
			return <Spinner size="small" />;
		}

		return <Button onPress={this.onButtonPress.bind(this)}>Log in</Button>;
	}

	render() {
		return (
			<Card>
				<CardSection> 
					<Input 
						label="Email"
						placeholder="user@gmail.com"
						onChangeText={email => this.setState({ email })}
						value={this.state.email}
					/>
				</CardSection>

				<CardSection>
					<Input 
						secureTextEntry
						placeholder="password"
						value={this.state.password}
						label="Password"
						onChangeText={password => this.setState({ password })}
					/>
				</CardSection>

				<Text style={styles.errorTextStyle}>{this.state.error}</Text>

				{this.renderButton()}
			</Card>
		);
	}
}

const styles = {
	errorTextStyle: {
		fontSize: 20,
		textAlign: 'center',
		color: 'red'
	}
};