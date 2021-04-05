import React from 'react';
import {View, StyleSheet, Image, Dimensions} from 'react-native';
import {BlueText} from '../components';
import {RFPercentage} from 'react-native-responsive-fontsize';

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

const Icon = () => {
  return (
    <View style={styles.container}>
        <View style={styles.content}>
            <View style={styles.topContent}>
                <Image resizeMode='center' style={styles.img} source={require('../assets/Turbo.png')} />
                <BlueText text='Turbo'/>
            </View>
            <View style={styles.bottomContent}><BlueText style={styles.textBig} text='Movie'/></View>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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

export default Icon;