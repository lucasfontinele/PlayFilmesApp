import {createStackNavigator} from 'react-navigation';
import LoginPage from './src/pages/LoginPage';

export default createStackNavigator({
    'login': {
      screen: LoginPage,      
    }
}, {
  navigationOptions: {
      title: 'Séries',
      headerTintColor: 'white',
      headerTitleStyle: {
        color: 'white',
        fontSize: 30,
      },
      headerStyle: {
        backgroundColor: '#6ca2f7',
        borderBottomWidth: 1,
        borderBottomColor: '#C5C5C5'
      }
  }
});