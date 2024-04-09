import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import FlatCards from './components/FlatCards';
import ElevatorCards from './components/ElevatorCards';
import FancyCard from './components/FancyCard';
import ActionCard from './components/ActionCard';
import ContactLists from './components/ContactLists';

function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        <ElevatorCards />
        <FancyCard />
        <ContactLists />
        <ActionCard />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
