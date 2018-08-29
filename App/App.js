import {createStackNavigator} from 'react-navigation';
import LoginPage from './src/pages/LoginPage';
import MainPage from './src/pages/Main';

export default createStackNavigator({
    'login': {
      screen: LoginPage,
      navigationOptions: {        
        headerTintColor: 'white',
        headerStyle: {          
          backgroundColor: '#3b5998',
          borderBottomWidth: 1,          
          borderBottomColor: '#C5C5C5'
        },
        title: "Autenticação" 
      }      
    },
    'MainPage': {
      screen: MainPage
    },
}, {
  navigationOptions: {
      title: 'PlayApp',
      headerTintColor: 'white',
      headerTitleStyle: {
        color: 'white',
        fontSize: 30,
        fontWeight: "normal", 
        textAlign: "center",
        flex: 1,
      },
      headerStyle: {
        backgroundColor: '#6ca2f7',
        borderBottomWidth: 1,
        borderBottomColor: '#C5C5C5'
      }
  }
});