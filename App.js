import React, { Component } from 'react'
import { StyleSheet, View, Alert } from 'react-native'
import { RNCamera } from 'react-native-camera'

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          style={{ flex: 1, alignItems: 'center' }}
          ref={ref => {
            this.camera = ref
          }}
          /* Trying to insert the button, but it keep sending 
          undefined is not an object error.
          
          style={styles.view}
          aspect={Camera.constants.Aspect.fill}>
            <Text 
            style={styles.capture} 
            onPress={this.takePicture.bind(this)}>
              [CAPTURE_IMAGE]
            </Text>*/
        />
      </View>
    );
  }
}
/*takepicture funtion
takePicture() {
  const options = {}

  this.camera.capture({metadata: options}).then((data) => {
    console.log(data)
  }).catch((error) => {
    console.log(error)
  })
}
}
*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black'
  }
})

/*
Styling for the capture button and other component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  view: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: 'blue',
    borderRadius: 12,
    color: 'white',
    padding: 13,
    margin: 40
  }
});*/
export default App