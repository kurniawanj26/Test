import React from 'react';
import {TouchableOpacity, Text, StyleSheet, Dimensions} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';

const btnHeight = Dimensions.get("screen").height;
const btnWidth = Dimensions.get("screen").width;

const Button = props => {
    return <TouchableOpacity onPress={props.onPress} style={[styles.default, props.style]}>
        <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>;
};

const styles = StyleSheet.create({
  default: {
    height: btnHeight * 0.07,
    width: btnWidth * 0.5,
    backgroundColor:'#4287f5',
    borderRadius: btnWidth /2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: RFPercentage(3),
    fontWeight: '600',
    color: 'white'
  }
});

export default Button;