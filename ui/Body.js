import React, { Component } from 'react';
import {
    Button,
    StyleSheet,
    TextInput, 
    View,
} from 'react-native';
import {
    Content
} from 'native-base';

import Values from './Values';

class Body extends Component {
    constructor() {
        super();
        this.state = {
          inputValue: '',
          tip: 0.2
        }
    }

    updateCustomTip(customTip) {
        if (customTip) {
          this.setState ({
            tip: parseFloat(customTip) / 100
          });
        } else {
          this.setState({tip: 0})
        }
    };

    render() {
        
        return (
            <View style={styles.container}>
                <Content style={{width: '100%'}}>
                    <Values 
                        tipPercent={this.state.tip} 
                        bill={this.state.inputValue}
                    />
                    <View style={styles.inputs}>
                        <TextInput 
                            value={this.state.inputValue}
                            keyboardType="numeric"
                            placeholder="0.00"
                            style={styles.input}
                            underlineColorAndroid="#FFF"
                            placeholderTextColor="#FFF"
                            onChangeText={(text) => this.setState({inputValue: text})}
                        />
                        <View style={styles.buttonGroup}>
                            <Button
                            title="10%"
                            onPress={() => this.setState({tip: 0.1})}
                            />
                            <Button
                            title="20%"
                            onPress={() => this.setState({tip: 0.2})}
                            />
                            <Button
                            title="25%"
                            onPress={() => this.setState({tip: 0.25})}
                            />
                            <TextInput
                            value={(this.state.tip * 100).toString()}
                            style={styles.customTip}
                            keyboardType="numeric"
                            placeholder="20%"
                            underlineColorAndroid="#FFF"
                            placeholderTextColor="#FFF"
                            onChangeText={(customTip) => this.updateCustomTip(customTip)}
                            />
                        </View>
                    </View>
                </Content>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        height: "100%",
        width: "100%"
      },
    input: {
        height: 40,
        width: '100%',
        padding: 5,
        color: "#fff"
      },
      customTip: {
        height: 40,
        width: 60,
        padding: 5,
        color: "#fff"
      },
      buttonGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between'
      },
      inputs: {
          backgroundColor: "#212121",
          padding: 20
      }
})

export default Body;