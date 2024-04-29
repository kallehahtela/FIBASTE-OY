import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';

import MainContainer from './navigation/MainContainer';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput 
          placeholder='Search tasks...'
          value={searchQuery}
          onChangeText={handleSearchChange}
          style={styles.searchInput}
          />
      </View>
      <MainContainer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    marginTop: 50,
    marginBottom: 20,
    width: '100%',
    alignItems: 'center',
  },
  searchInput: {
    height: 40,
    width: '60%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 6,
    color: 'black',
    paddingLeft: 10, // Padding on the left for the text
    paddingRight: 10, // Padding on the right for the text
    paddingTop: 5, // Padding on the top for the text
    paddingBottom: 5, // Padding on the bottom for the text
    borderRadius: 6,
  },
});

export default App;