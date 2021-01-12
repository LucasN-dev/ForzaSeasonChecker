import React from 'react'
import { StyleSheet, View, ImageBackground, TouchableOpacity, Image, Dimensions, Text } from 'react-native'

const {width, height} = Dimensions.get("window")

class Season extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
    }
  }

  

  componentDidMount(){
  }

  render() {
    return (
      <View style={styles.main_container}>
          <Text>Settings</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    backgroundColor: '#eee',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  }
})

export default Season