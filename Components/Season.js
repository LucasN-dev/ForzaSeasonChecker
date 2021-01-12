import React from 'react'
import { StyleSheet, View, ImageBackground, TouchableOpacity, Image, Dimensions, Text } from 'react-native'
import CountDown from 'react-native-countdown-component'

const {width, height} = Dimensions.get("window")

class Season extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      season: undefined,
      nextSeason: undefined,
      untilNextSeason: undefined,
    }
  }

  _getSeason() {
    const seasons = ["Winter", "Spring", "Summer", "Autumn"];
    const firstWinter = new Date(Date.UTC(2020, 11, 31, 14, 30, 0));
    var now = new Date();
    
    var seasonCount = Math.floor(Math.abs(((now - firstWinter) / (7 * 24 * 60 * 60 * 1000))));
    var currentSeason = seasons[seasonCount % 4];
    var nextSeason = seasons[(seasonCount+1) % 4];
    
    var nextSeasonTime = new Date(firstWinter);
    nextSeasonTime.setDate(nextSeasonTime.getDate() + 7*(seasonCount+1));
    
    var now2 = new Date();
    var untilNextSeason = Math.ceil((nextSeasonTime - now2)/1000);

    
    this.setState({
      season: currentSeason,
      nextSeason: nextSeason,
      untilNextSeason: untilNextSeason

      }, () => { 
        console.log('now: ' + now2.getTime())
    })

  }

  _backgroundSetter() {
    switch (this.state.season) {
      case "Winter":
        sourceImage = require('../Images/bg_winter.jpg')
        break;
      case "Spring":
        sourceImage = require('../Images/bg_spring.jpg')
        break;
      case "Summer":
        sourceImage = require('../Images/bg_summer.jpg')
        break;
      case "Autumn":
        sourceImage = require('../Images/bg_autumn.jpg')
        break;
      default:
        sourceImage = require('../Images/bg_summer.jpg')
        break;
    }
    return(sourceImage)
  }

  _seasonImageSetter() {
    switch (this.state.season) {
      case "Winter":
        sourceImage = require('../Images/winter.png')
        break;
      case "Spring":
        sourceImage = require('../Images/spring.png')
        break;
      case "Summer":
        sourceImage = require('../Images/summer.png')
        break;
      case "Autumn":
        sourceImage = require('../Images/autumn.png')
        break;
      default:
        sourceImage = require('../Images/summer.png')
        break;
    }
    return(sourceImage)
  }

  _SeasonChange(){
    this.props.navigation.push("TransitionScreen");
  }

  _goToSettings(){
    this.props.navigation.navigate("Settings")
  }

  componentDidMount(){
    this._getSeason()
  }

  _getCountdown() {
    if (this.state.untilNextSeason === undefined) {
      console.log('untilNextSeason is not defined yet')
    } else {
    return(
      <CountDown
        until={this.state.untilNextSeason}
        size={28}
        onFinish={() => this._SeasonChange()}
        digitStyle={{backgroundColor: '#rgba(2, 165, 133, 0.8)', marginTop: 5}}
        digitTxtStyle={{color: '#FFFFFF',  fontFamily: ''}}
        timeToShow={['D','H','M', 'S']}
        timeLabels={{d:'Days',h:'Hours',m: 'Minutes', s: 'Seconds'}}
        timeLabelStyle={{color: '#FFFFFF', marginTop: 7}}
      />
    )
    }
  }

  render() {
    return (
      <View style={styles.main_container}>
        <ImageBackground source={this._backgroundSetter()} style={styles.bg_image}>
          <View style={styles.top_bar}>
            <TouchableOpacity
              style={styles.settings_container}
              onPress={() => this._goToSettings()}>
              <Image style={styles.settings_image} source={require('../Images/settings.png')}/>
            </TouchableOpacity>
            <View style={styles.forza_logo_container}>
              <Image style={styles.forzalogo} source={require('../Images/forzalogo.png')}/>
            </View>
            <View style={styles.top_bar_filler}/>
          </View>
          <View style={styles.top_content_container}>
            <Image style={styles.season_image} source={this._seasonImageSetter()}/>
          </View>
          <View style={styles.bottom_content_container}>
            <View style={styles.countdown_container}>
              <View style={styles.countdown_filler}/>
              <View style={styles.actual_countdown_container}>
                <Text style={styles.next_season_text}>{this.state.nextSeason} begins in</Text>
                {this._getCountdown()}
              </View>
              <View style={styles.countdown_filler}/>
            </View>
            <View style={styles.bottom_filler}/>
          </View>
        </ImageBackground>
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
  },
  top_bar: {
    backgroundColor: 'transparent', 
    flex:2,
    flexDirection: 'row',
    marginTop: 10
  },
  top_content_container: {
    backgroundColor: 'transparent',
    flex:9,
  },
  bg_image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  settings_container: {
    alignItems: 'center',
    justifyContent: "center",
    flex: 1
  },
  forza_logo_container :{
    alignItems: 'center',
    justifyContent: "center",
    resizeMode: 'contain',
    flex:3,
  },
  forzalogo: {
    flex: 1,
    alignItems: 'center',
    resizeMode: 'contain',
    height: 73,
    width: 200,
    margin: 5
  },
  top_bar_filler: {
    flex: 1
  },
  settings_image: {
    width: 50,
    height: 50,
    margin: 10
  },
  season_image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain',
    margin: 20
  },
  bottom_content_container: {
    flex:12,
  },
  next_season_text: {
    color: 'white',
    fontSize: 20,
    marginBottom: 5
  },
  countdown_container: {
    marginTop:30,
    flex: 20,
    flexDirection: 'row',
  },
  bottom_filler: {
    flex: 19,
  },
  actual_countdown_container: {
    flex: 10,
    backgroundColor: 'rgba(0, 181, 146, 0.7)',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30
  },
  countdown_filler: {
    flex:1
  }
})

export default Season