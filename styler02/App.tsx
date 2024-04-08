import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import FlatCards from './components/FlatCards';
import ElevatorCards from './components/ElevatorCards';
import FancyCard from './components/FancyCard';

function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        <ElevatorCards />
        <FancyCard />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
