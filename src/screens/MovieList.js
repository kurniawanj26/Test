import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Header, List} from '../components';
import {RFPercentage} from 'react-native-responsive-fontsize';
import {MovieListAPI} from '../api';

const MovieList = ({navigation}) => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetchInitialData();
      }, []);
    
    const fetchInitialData = async () => {
        try {
            let result = await MovieListAPI();
            setMovies(result);
            // alert(JSON.stringify(result))
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <View style={styles.container}>
            <Header title="Movie Turbo"/>
            <List data={movies} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center'
        backgroundColor: 'white'
    },
});

export default MovieList;