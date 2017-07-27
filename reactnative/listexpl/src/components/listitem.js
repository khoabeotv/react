import React from 'react';
import { Text, View, TouchableWithoutFeedback, LayoutAnimation, UIManager } from 'react-native';
import { CardSection } from './common';
import * as actions from '../actions';
import { connect } from 'react-redux';

class ListItem extends React.Component {

	componentWillMount() {
		UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
	}

	componentWillUpdate() {
		LayoutAnimation.spring();
	}

	renderDescription() {
		if (this.props.expended) {
			console.log('selected');
			return (
				<CardSection>
					<Text style={{ flex: 1 }}>{this.props.library.description}</Text>
				</CardSection>
			);
		}
	}

	render() {
		const { id, title } = this.props.library;

		return (
			<TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
				<View>
					<CardSection>
						<Text style={styles.titleStyle}>{title}</Text>
					</CardSection>
					{this.renderDescription()}
				</View>
			</TouchableWithoutFeedback>
		);
	}
}

const styles = {
	titleStyle: {
		fontSize: 18,
		paddingLeft: 15,
		color: '#000'
	}
};

const mapStateToProps = (state, ownProps) => {
	const expended = state.selectedLibraryId === ownProps.library.id;

	return { expended };
};

export default connect(mapStateToProps, actions)(ListItem);