import React from 'react';
import { 
    Text, 
    TextInput, 
    View,
    StyleSheet, 
    Button,
    TouchableOpacity 
} from 'react-native';
import FormRow from '../components/FormRow';

export default class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            pass: ""
        }
    }

    onChangeHandler(field, value) {
        //Ecma Script 5
        // const newState = '';
        // newState[field] = value;
        // this.setState(newState);

        //Ecma Script 6 
        this.setState({
            [field]: value
        });
    }

    tryLogin() {
        console.log(this.state);

    }

    render() {
        return(
            <View style={Style.BoxContainer}>
                <FormRow>
                    <TextInput style={Style.Input} placeholder='Email' onChangeText={value => this.onChangeHandler('email', value)}/>                                
                </FormRow>
                <FormRow>
                    <TextInput style={Style.Input} placeholder='Senha' secureTextEntry onChangeText={value => this.onChangeHandler('pass', value)}/>                                
                </FormRow>
                <TouchableOpacity style={Style.Button} onPress={() => this.tryLogin()}>
                    <Text style={Style.ButtonTitle}>Acessar</Text>
                </TouchableOpacity>
                {/* <Button title="Entrar" onPress={() => this.tryLogin()}/> */}
            </View>    
        );
    }
}

const Style = StyleSheet.create({
    BoxContainer: {
        padding: 20,
        backgroundColor: '#FFF',
    },

    Input: {
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom: 10,
        borderColor: '#C5C5C5'
    },

    ButtonTitle: {
        color: "white",
        fontSize: 20,
        fontWeight: 'bold',
    },

    Button: {
        borderBottomColor: 'white',
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
        backgroundColor: '#70BD85',
        margin: 15,
        height: 40
    }
});