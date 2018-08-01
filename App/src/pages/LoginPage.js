import React from 'react';
import { Text, TextInput, View, StyleSheet, Button } from 'react-native';
import FormRow from '../components/FormRow';

export default class LoginPage extends React.Component {
    render() {
        return(
            <View>
                <FormRow>
                    <TextInput style={Style.input} placeholder='Email'/>                                
                </FormRow>
                <FormRow>
                    <TextInput style={Style.input} placeholder='Senha' secureTextEntry/>                                
                </FormRow>
            </View>    
        );
    }
}

const Style = StyleSheet.create({
    input: {
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom: 10
    },

    Button: {
        borderBottomColor: 'white',
        backgroundColor: 'green'
    }
});