import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Mapbox from '@mapbox/react-native-mapbox-gl';

Mapbox.setAccessToken('pk.eyJ1IjoiZ3VpbGhlcm1laGQiLCJhIjoiY2oycW94eHpoMDJpZTJxbjFzcDE5cjl0ZCJ9.dy9eJfwLF_knnVf35r8vlw');

export default class App extends Component<{}> {

  renderSede4 () {
    return (
      <Mapbox.PointAnnotation
        key='sede4'
        id='sede4'
        coordinate={[-47.90238126,-15.73643729]}>

        <View style={styles.annotationContainer}>
          <View style={styles.annotationFill} />
        </View>
        <Mapbox.Callout title='BB Sede 4, seu passeio começa aqui!' />
      </Mapbox.PointAnnotation>
    )
  }

  renderCapitalDigital () {
    return (
      <Mapbox.PointAnnotation
        key='capitalDigital'
        id='capitalDigital'
        coordinate={[-47.90885483,-15.71067416]}>

        <View style={styles.annotationContainer}>
          <View style={styles.annotationFill} />
        </View>
        <Mapbox.Callout title='Capital Digital, seu passeio começa aqui!' />
      </Mapbox.PointAnnotation>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <Mapbox.MapView
            styleURL={Mapbox.StyleURL.Dark}
            zoomLevel={13}
	    zoomEnabled={false}
 	    scrollEnabled={false}
	    pitchEnabled={false}
	    rotateEnabled={false}
      logoEnabled={false}

            centerCoordinate={[-47.9085,-15.7172]}
            style={styles.container}
            showUserLocation={true}>
            {this.renderSede4()}
	    {this.renderCapitalDigital()}
        </Mapbox.MapView>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  annotationContainer: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'yellow',
    borderRadius: 15,
  },
  annotationFill: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'blue',
    transform: [{ scale: 0.6 }],
  },
});
