import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image source={require('../img/house.jpg')} style={styles.cardImage} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  card: {},
  cardElevated: {},
  cardImage: {
    height: 200,
  },
});

export default FancyCard;
