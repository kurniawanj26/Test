import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button, Icon} from '../components';
import {RFPercentage} from 'react-native-responsive-fontsize';

const GettingStarted = ({navigation}) => {

  return (
    <View style={styles.container}>
        <Icon />
        <View style={styles.textContainer}>
            <Text style={styles.text}>WELCOME</Text>
        </View>
        <Button title="GETTING START" onPress={()=>navigation.navigate('Login')}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 100
  },
  textContainer: {
    justifyContent: 'center',
    flex:1
  },
  text:{
    fontSize: RFPercentage(4),
    fontWeight: '800'
  }
});

export default GettingStarted;