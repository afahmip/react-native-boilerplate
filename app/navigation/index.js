import {createStackNavigator} from 'react-navigation-stack';
import Intro from '../screens/Intro';
import Sample from '../screens/Sample';

const Navigator = createStackNavigator(
  {
    intro: {screen: Intro},
    sample: {screen: Sample},
  },
  {
    headerMode: 'none',
    initialRouteName: 'intro',
  },
);

export default Navigator;
