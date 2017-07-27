import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text
} from 'react-native';
import MapView from 'react-native-maps';
import api from './src/api';

class Weather extends Component {
  constructor() {
    super();
    this.state = {
      region: {
        latitude: 21.0277644,
        longitude: 105.8341598,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },

      pin: {
        latitude: 21.0277644,
        longitude: 105.8341598,
      },

      city: '',
      temperature: '',
      description: ''
    };
  }

  componentWillMount() {
    api(this.state.pin.latitude, this.state.pin.longitude)
      .then(data => this.setState(data));
  }

  onRegionChange(region) {
    this.setState({
      region,
      pin: {
        latitude: region.latitude,
        longitude: region.longitude
      } 
    });

    api(region.latitude, region.longitude) 
      .then(data => {
        this.setState(data);
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView 
          region={this.state.region}
          onRegionChange={this.onRegionChange.bind(this)}
          style={styles.map}>
          <MapView.Marker
            coordinate={this.state.pin}
          />
        </MapView>
      
        <View style={styles.textWrapper}>
          <Text style={styles.text}>{this.state.city}</Text>
          <Text style={styles.text}>{this.state.temperature}</Text>
          <Text style={styles.text}>{this.state.description}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },

  container: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF'
  },

  textWrapper: {
    alignItems: 'center'
  },

  text: {
    fontSize: 30,
    color: '#000'
  }
});

AppRegistry.registerComponent('weather', () => Weather);
