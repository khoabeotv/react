import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header, Button, Spinner } from './component/common';
import firebase from 'firebase';
import LoginFrom from './component/loginfrom'

export default class App extends Component {

	constructor() {
		super();
		this.state = {
			loggedIn: null,
		};
	}

	componentWillMount() {
		firebase.initializeApp({
    	apiKey: "AIzaSyD--53oTQyXXkbxuHIjxulSe3qBeqscj48",
    	authDomain: "auth-33d4a.firebaseapp.com",
    	databaseURL: "https://auth-33d4a.firebaseio.com",
    	projectId: "auth-33d4a",
    	storageBucket: "auth-33d4a.appspot.com",
    	messagingSenderId: "605767174362"
  	});

  	firebase.auth().onAuthStateChanged(user => {
  		if (user) {
  			this.setState({
  				loggedIn: true,
  			});
  		} else {
  			this.setState({
  				loggedIn: false,
  			});
  		}
  	});
	}

	renderContent() {
		switch(this.state.loggedIn) {
			case true:
				return (
					<Button onPress={() => firebase.auth().signOut()}>Log out</Button>
				);
			case false:
				return <LoginFrom />;
			default:
				return <Spinner size="large" />;
		};
	}

	render() {
		return (
			<View>
				<Header headerText='Authentication' />
				{this.renderContent()}
			</View>
		);
	}
}
