import React from 'react';
import { Text, TextInput, View,StyleSheet, Button, TouchableOpacity, ActivityIndicator } from 'react-native';
import FormRow from '../components/FormRow';
import axios from 'axios';

export default class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            pass: "",
            isVisible: true,
        }
    }

    componentWillMount() {
        setTimeout(() => {
            this.setState({
                isVisible: false
            });
        }, 1000);        
    }

    onChangeHandler(field, value) {
        this.setState({
            [field]: value
        });
    }

    tryLogin() {                
        let postData = {
            user: this.state.email,
            pass: this.state.pass                       
        }    

        axios
        .get(`http://webservice.hiddo.com.br/users/${postData.user}/${postData.pass}`)
        .then((res) => {
            const {ok} = res.data.status;

            if (ok) {
                this.props.navigation.navigate('MainPage');
            }
        })       
    }

    render() {
        if (this.state.isVisible) {
            return(            
                <View style={Style.spinner}>
                    <ActivityIndicator size="large"/>
                </View>
            );
        }
        else {
            return(
                <View style={Style.Application}>
                    <View style={Style.BoxContainer}>
                        <FormRow>
                            <TextInput style={Style.Input} placeholder='Email' onChangeText={value => this.onChangeHandler('email', value)}/>                                
                        </FormRow>
                        <FormRow>
                            <TextInput style={Style.Input} placeholder='Senha' secureTextEntry onChangeText={value => this.onChangeHandler('pass', value)}/>                                
                        </FormRow>
                        <View style={Style.button}>
                            <Button title="Acessar" onPress={() => {                                
                                this.tryLogin()
                            }}/>
                        </View>                  
                    </View>
                </View>                 
            );            
        }
        return (
            <View>
                <Text>Normal</Text>
            </View>
        );
    }
}

const Style = StyleSheet.create({
    spinner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    button: {
        padding: 20
    },

    Application: {
        backgroundColor: "#FFF",
        flex: 1,
        position: "absolute", 
        top: 0, 
        bottom: 0, 
        left: 0, 
        right: 0
    },

    BoxContainer: {
        padding: 30,
        backgroundColor: '#FFF',
        marginTop: 70
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