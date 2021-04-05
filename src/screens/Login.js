import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Dimensions, Alert} from 'react-native';
import {Button, Icon} from '../components';
import {RFPercentage} from 'react-native-responsive-fontsize';

const width = Dimensions.get("screen").width;

const GettingStarted = ({navigation}) => {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const login = () => {
        if(!userName || !password){
            Alert.alert(
                'Login Failed',
                'Incorrect Username or Password'
            )
        }else{
            navigation.navigate('MovieList')
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.contentContainer}>
                <Icon />
                <View style={styles.inputContainer}>
                    <View style={styles.inputView}>
                        <TextInput
                            placeholder='User Name'
                            style={styles.input}
                            onChangeText={(userName) => setUserName(userName)}
                        />
                    </View>
                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.input}
                            onChangeText={(password) => setPassword(password)}
                            secureTextEntry={true}
                            placeholder='Password'
                        />
                    </View>
                </View>
                <Button title="LOGIN" onPress={login}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex:1,
  },
  inputContainer: {
    marginBottom: 20,
    marginTop: 30
  },
  input: {
    height: 50,
    width: '100%',
    flex: 1,
    padding: 10,
    textAlign: 'left',
    fontSize: RFPercentage(2),
    fontWeight: '700'
  },
  inputView: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 30,
    width: width * 0.7,
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
});

export default GettingStarted;