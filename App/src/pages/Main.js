import React from 'react';
import { Text, Button, ListView, StyleSheet } from 'react-native';

export default class MainPage extends React.Component {
    constructor(props) {
        super(props);
        
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        this.state = {
            dataSource: ds.cloneWithRows(['row 1', 'row 2', 'row 3', 'row 4']),
        }
    }

    render() {
        return(
            <ListView dataSource={this.state.dataSource}
            renderRow={(rowData) => <Text>{rowData}</Text>}/>
        );
    }
}

const Style = StyleSheet.create({
    Container: {
        backgroundColor: "white",
        flex: 1,
        alignItems: "center",    
        justifyContent: "center"    
    }
});