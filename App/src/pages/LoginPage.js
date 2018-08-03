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
import axios from 'axios';

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
        //Realizar consulta via post
        axios
        .get("http://192.168.0.10:8080/verifyusers/"+this.state.email+"/"+this.state.pass)
        .then(res => {
            console.log(res.data);
        });        
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
                <TouchableOpacity style={Style.AccButton} onPress={() => this.tryLogin()}>
                    <Text style={Style.ButtonTitle}>Acessar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Style.RegButton} onPress={() => this.tryLogin()}>
                    <Text style={Style.ButtonTitle}>Registrar-se</Text>
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
        borderRadius: 5,
        borderColor: '#C5C5C5'
    },

    ButtonTitle: {
        color: "white",
        fontSize: 20,
        fontWeight: 'bold',
    },

    AccButton: {
        borderColor: '#23a127',
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
        backgroundColor: '#28b62c',
        margin: 15,
        height: 40
    },
    
    RegButton: {
        borderColor: '#00abff',
        backgroundColor: '#4cc4ff',
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
        margin: 15,
        height: 40
    }
});