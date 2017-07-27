import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import Router from './router';


class App extends React.Component {
	componentWillMount() {
		firebase.initializeApp({
			apiKey: 'AIzaSyBCsTeVDuJDYOyZHm6g5ajX-_TTshqKV0U',
			authDomain: 'manager-91345.firebaseapp.com',
			databaseURL: 'https://manager-91345.firebaseio.com',
			projectId: 'manager-91345',
			storageBucket: 'manager-91345.appspot.com',
			messagingSenderId: '1037872612978'
		});
	}

	render() {
		const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
		return (
			<Provider store={store}>
				<Router />
			</Provider>
		);
	}
}

export default App;
