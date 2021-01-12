import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Season from '../Components/Season'
import Settings from '../Components/Settings'
import TransitionScreen from '../Components/TransitionScreen'

const forFade = ({ current }) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

const config = {
  animation: 'timing',
  config: {
    duration: 2000
  },
};

const SearchStackNavigator = createStackNavigator({
  Season: {
    screen: Season,
    navigationOptions: {
      title: 'Season',
      headerShown: false,
      cardStyleInterpolator: forFade,
      transitionSpec: {
        open: config,
      }
    }
  },
  Settings: {
    screen: Settings,
    navigationOptions: {
      title: 'Settings',
    }
  },
  TransitionScreen: {
    screen: TransitionScreen,
    navigationOptions: {
      title: 'TransitionScreen',
      headerShown: false,
      cardStyleInterpolator: forFade,
      transitionSpec: {
        open: config,
        close: config,
      }
    }
  }
})

export default createAppContainer(SearchStackNavigator)