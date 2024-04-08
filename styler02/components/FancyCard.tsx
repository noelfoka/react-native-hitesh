import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image source={require('../img/house.jpg')} style={styles.cardImage} />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Douala, Cameroon</Text>
          <Text style={styles.cardLabel}>Coast Region of Cameroon</Text>
          <Text style={styles.cardDescription}>
            Douala is the economic capital of Cameroon. This cosmopolitan city
            of about 3 million inhabitants concentrates almost 20% of the urban
            population of the country{' '}
          </Text>
          <Text style={styles.cardFooter}>20 minutes away</Text>
        </View>
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
  cardBody: {},
  cardTitle: {},
  cardLabel: {},
  cardDescription: {},
  cardFooter: {},
});

export default FancyCard;
