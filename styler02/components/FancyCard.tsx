import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

function FancyCard() {
  return (
    <View style={styles.all}>
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
  all: {
    marginBottom: 10,
  },
  headingText: {
    color: '#000000',
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  card: {
    width: 380,
    height: 360,
    borderRadius: 10,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  cardElevated: {
    backgroundColor: '#CAD5E2',
    elevation: 6,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  cardImage: {
    height: 200,
    width: '100%',
    marginBottom: 8,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
  },
  cardTitle: {
    color: '#000000',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  cardLabel: {
    fontSize: 14,
    marginBottom: 6,
  },
  cardDescription: {
    fontSize: 12,
    marginTop: 6,
    marginBottom: 12,
  },
  cardFooter: {},
});

export default FancyCard;
