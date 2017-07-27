import React from 'react';
import { Text, View, TouchableHighlight, ScrollView } from 'react-native';
import formatTime from 'minutes-seconds-milliseconds';

export default class App extends React.Component {
  
  constructor() {
    super();
    this.state = {
      timeElapsed: null,
      running: false,
      startTime: null,
      laps: []    
    };
  }


  onStartPress() {
    if (this.state.running) {
      clearInterval(this.interval);
      this.setState({ running: false }); 
      return; 
    }

    this.setState({ startTime: new Date() });

    this.interval = setInterval(() => { 
      this.setState({
        timeElapsed: new Date() - this.state.startTime,
        running: true
      });
    }, 30);
  }

  onLapPress() {
    const lap = this.state.timeElapsed;

    this.setState({
      startTime: new Date(),
      laps: [...this.state.laps, lap]
    });
  }

  renderStopButton() {
    const style = this.state.running ? styles.stopButton : styles.startButton;
    return (
      <TouchableHighlight
        underlayColor="gray"
        onPress={this.onStartPress.bind(this)}
        style={[styles.button, style]}
      >
        <Text>{this.state.running ? 'Stop' : 'Start'}</Text>
      </TouchableHighlight>
    );
  }

  renderLapButton() {
    return (
      <TouchableHighlight 
        onPress={this.onLapPress.bind(this)}
        underlayColor="gray"
        style={styles.button}
      >
        <Text>Lap</Text>
      </TouchableHighlight>
    );
  }

  renderLaps() {
    return this.state.laps.map((time, index) => (
      <View key={index} style={styles.lap}>
        <Text style={styles.lapText}>Lap #{index + 1}</Text>
        <Text style={styles.lapText}>{formatTime(time)}</Text>
      </View>
    ));
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.timerWrapper}>
            <Text style={styles.timer}>{formatTime(this.state.timeElapsed)}</Text>
          </View>

          <View style={styles.buttonWrapper}>
            {this.renderStopButton()}
            {this.renderLapButton()}
          </View>
        </View>

        <View style={styles.footer}>
          <ScrollView>
            {this.renderLaps()}
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    alignItems: 'stretch'
  },

  header: {
    flex: 1
  },

  footer: {
    flex: 1
  },

  timerWrapper: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonWrapper: {
    flex: 3,
    flexDirection: 'row', 
    justifyContent: 'space-around',
    alignItems: 'center'
  },

  timer: {
    fontSize: 60,
    color: '#000'
  },

  button: {
    borderWidth: 2,
    height: 100,
    width: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },

  startButton: {
    borderColor: '#00CC00'
  },

  stopButton: {
    borderColor: '#CC0000'
  },

  lap: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },

  lapText: {
    fontSize: 30,
    color: '#000'
  }
};

