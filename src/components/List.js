import React from 'react';
import {Text, View, FlatList, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {BlueText} from '../components';
import {RFPercentage} from 'react-native-responsive-fontsize';

const List = props => {
    return (
        <FlatList
        showsVerticalScrollIndicator={false}
        data={props.data}
        initialNumToRender={5}
        keyExtractor={(item, index) => String(index)}
        renderItem={({item}) => (
            <TouchableOpacity style={styles.listContainer}>
                <View style={styles.itemContainer}>
                    <View style={styles.items}>
                        <Image style={styles.thumbnail} source={{uri: item.picture.thumbnail}}/>
                        <View>
                            <Text style={styles.largeText}>{item.name.first}</Text>
                            <View style={styles.additionalInfo}>
                                <BlueText style={styles.smallText} text={item.location.country}/>
                                <BlueText style={styles.smallText} text={item.location.postcode}/>
                                <BlueText style={styles.smallText} text={item.email}/>
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )}
        />
    );
};

const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: 'white',
    borderRadius: 8,
    marginBottom: 10,
  },
  smallText: {
    fontSize: RFPercentage(1.5),
    marginLeft: 10
  },
  largeText: {
    fontSize: RFPercentage(4),
    marginLeft: 10
  },
  itemContainer: {
    padding: 10
  },
  items: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  thumbnail: {
    width: 50,
    height: 50,
    borderRadius: 10
  },
  additionalInfo: {
      flexDirection: 'row'
  }
});

export default List;