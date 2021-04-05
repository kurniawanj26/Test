import React, {useEffect} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {Icon} from '../components';
import {RFPercentage} from 'react-native-responsive-fontsize';

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

const Home = ({navigation}) => {

    useEffect(() => {
        setTimeout(() => {
          navigation.navigate('GettingStarted');
        }, 2000);
      });

  return (
    <View style={styles.container}>
        <Icon/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  content:{
    alignItems: 'flex-end'
  },
  topContent: {
    flexDirection: 'row', 
    alignItems: 'baseline',
  },
  bottomContent: {
    padding:0,
    margin: 0
  },
  img: {
    width: width * 0.2,
    height: height * 0.1,
  },
  textBig: {
    fontSize: RFPercentage(9)
  }
});

export default Home;