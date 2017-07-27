import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux'; 
import reducers from './reducers';
import { Header } from './components/common';
import LibraryList from './components/librarylist';

const App = () => {
	return (
		<Provider store={createStore(reducers)}>
			<View style={{ flex: 1 }}>
				<Header headerText="Mẹo Nấu Ăn" />
				<LibraryList />
			</View>
		</Provider>
	);
}
export default App;