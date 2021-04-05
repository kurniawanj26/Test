import React from 'react';
import {Header, Left, Body, Right, Button, Title} from 'native-base';
import {StyleSheet} from 'react-native';
import {BlueText} from '../components';

const CustomHeader = props => {
  return (
    <Header style={styles.header}>
        <Body style={styles.body}>
            <BlueText text={props.title}/>
        </Body>
    </Header>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#dfe3eb',
  },
  body: {
    flex: 2,
    alignItems: 'center',
  },
});

export default CustomHeader;