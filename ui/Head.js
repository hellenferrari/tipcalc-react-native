import React, { Component } from 'react';
import { 
    StyleSheet, 
    View,
    Platform,
    StatusBar,
  } from 'react-native';
import {
    Header,
    Left,
    Body,
    Title
  } from 'native-base';

const Head = () => (
    <View style={styles.header}>
    <Header>
    <Left>
        <Body>
        <Title>Header</Title>
        </Body>
    </Left>
    </Header>
    </View>
);

    const styles = StyleSheet.create({
        header: {
        ...Platform.select({
            android: {
            marginTop: StatusBar.currentHeight
            },
        }),
        },
    }); 

  export default Head;
