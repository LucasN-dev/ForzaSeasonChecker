import React from 'react'
import { StyleSheet, View, ImageBackground, TouchableOpacity, Image, Dimensions, Text } from 'react-native'
import CountDown from 'react-native-countdown-component'

const {width, height} = Dimensions.get("window")

class Season extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
    }
  }
  render() {
    return (
      <View style={styles.main_container}>
          <CountDown
            until={3}
            size={0}
            onFinish={() => this.props.navigation.push("Season")}
            digitStyle={{backgroundColor: 'transparent', marginTop: 5}}
            digitTxtStyle={{color: 'transparent',  fontFamily: ''}}
            timeToShow={['S']}
            timeLabels={{s: ''}}
            timeLabelStyle={{color: 'transparent'}}
            />
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