import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ContactList() {
  const contacts = [
    {
      uid: 1,
      name: 'Noel FOKA',
      status: 'Web and Mobile developer',
      imageUrl: '../img/photo1.jpg',
    },
    {
      uid: 2,
      name: 'Ismael MESSA',
      status: 'Front-end developer and cloud architecture developer',
      imageUrl: '../img/logo1.png',
    },
    {
      uid: 3,
      name: 'Orleando DASSI',
      status: 'Lead consultant',
      imageUrl: '../img/photo2.jpg',
    },
    {
      uid: 4,
      name: 'Juliette FOKA',
      status: 'Lead manager',
      imageUrl: '../img/photo1.jpg',
    },
  ];
  return (
    <View>
      <Text style={styles.headingText}>contacts Lists</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contacts.map(({uid, name, status, imageUrl}) => (
          <View key={uid} style={styles.userCard}>
            <Image source={require(imageUrl)} style={styles.userImage} />
            <Text style={styles.userName}>{name}</Text>
            <Text style={styles.userStatus}>{status}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {},
  container: {},
  userCard: {},
  userImage: {},
  userName: {},
  userStatus: {},
});
