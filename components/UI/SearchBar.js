import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { GlobalStyles } from '../../constants/colors';

const SearchBar = ({ style }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (text) => {
    setQuery(text);
    // You can add functionality here to handle the search query, like filtering data or making an API call
  };

  const clearInput = () => {
    setQuery('');
    // Optional add any additional actions when clearing the input
  };

  return (
    <View style={[styles.container, style]}>
      <TextInput
        placeholder="Search here..."
        value={query}
        onChangeText={handleSearch}
        style={styles.input}
        placeholderTextColor={GlobalStyles.color.black}
      />
      {query.length > 0 && (
        <TouchableOpacity onPress={clearInput} style={styles.icon}>
            <Ionicons name='close-circle' size={24} color={GlobalStyles.color.Color3} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', // Keep items in a row
    width: '100%',
    minWidth: 200, // Sets minimum width of searchbar
    height: 40, // Fixed height for the container
    paddingHorizontal: 10,
    alignItems: 'center',
    backgroundColor: GlobalStyles.color.white, // Set a background color of container
    borderColor: GlobalStyles.color.light_pink,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
  },
  input: {
    flex: 1, // Take all available space
    minHeight: 38, // Minimum height for the input
    paddingHorizontal: 10, // Padding inside the input
    borderWidth: 0, // No additional border
    color: GlobalStyles.color.black, // Color of the text
  },
  icon: {
    marginRight: 10, // Right margin for the icon
  },
});

export default SearchBar;