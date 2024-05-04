import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, Dimensions } from 'react-native';

import IconButton from './IconButton';
import { GlobalStyles } from '../../constants/colors';

const SearchBar = ({ style }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (text) => {
    setQuery(text);
  };

  const clearInput = () => {
    setQuery('');
  };

  return (
    <View style={[styles.container, style]}>
      <View style={styles.searchContainer}>
        <IconButton
          icon='search-outline'
          size={24}
          color={GlobalStyles.color.dark_grey}
          style={styles.iconInside}
        />
        <TextInput
          placeholder="What to do?"
          value={query}
          onChangeText={handleSearch}
          style={styles.input}
          placeholderTextColor={GlobalStyles.color.dark_grey}
        />
        {query.length > 0 && (
          <IconButton
            icon='close-circle'
            size={24}
            color={GlobalStyles.color.black}
            onPress={clearInput}
            style={styles.iconOutside}
          />
        )}
      </View>
      <View style={styles.labelContainer}>
        <Text style={styles.labelText}>Anytime -</Text>
        <Text style={styles.labelText}>Any age -</Text>
        <Text style={styles.labelText}>Earn cash</Text>
      </View>
    </View>
  );
};

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    width: screenWidth * 0.9 ,  // Width set to 100% of parent container's width
    alignSelf: 'center', // Centers the searchBar horizontally
    alignItems: 'center',
    backgroundColor: GlobalStyles.color.white,
    borderRadius: 30,
    borderWidth: 0.2,
    borderColor: GlobalStyles.color.light_grey,
    marginBottom: 10,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { width: -1, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    paddingVertical: 10,
    minHeight: 35,  // Fixed minimum height to maintain vertical sizing
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    minHeight: 30,
  },
  input: {
    flex: 1,
    minHeight: 38,
    borderWidth: 0,
    color: GlobalStyles.color.black,
  },
  iconInside: {
    marginRight: 10,
  },
  iconOutside: {
    marginRight: 10,
  },
  labelContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    marginTop: 0,
    paddingHorizontal: 20,
    marginLeft: 55
  },
  labelText: {
    color: GlobalStyles.color.light_grey,
    fontSize: 13,  // This fontSize can now be changed without affecting the container size
    marginRight: 5, // Small gap between texts
  },
});

export default SearchBar;