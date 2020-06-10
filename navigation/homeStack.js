import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../pages/Home';
import Login from '../pages/Login';
import VolSignup from '../pages/VolSignup'
import SeekSignup from '../pages/SeekSignup'
import Profile from '../pages/Profile'
const screens = {
  Home: {
    screen: Home,
  },
  Login:{
    screen:Login,
  },
  VolSignup:{
    screen:VolSignup,
  },
  SeekSignup:{
    screen:SeekSignup,
  },
  Profile:{
    screen:Profile,
  },
  
};

// home stack navigator screens
const HomeStack = createStackNavigator(screens,{defaultNavigationOptions: {header: null}});

export default createAppContainer(HomeStack);