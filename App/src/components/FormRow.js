import React from 'react';
import { Text, TextInput, View, StyleSheet, Button } from 'react-native';

const FormRow = (props) => {
    const {children} = props;
    return(
        <View style={Style.container}>
            {children}
        </View>
    );    
}

const Style = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: 'white',
        marginTop: 5,
        marginBottom: 5,
        elevation: 1
    }
});

export default FormRow;