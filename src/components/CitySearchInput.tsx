import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useWeatherStore } from '../store/weatherStore';

const CitySearchInput = () => {
  const [city, setCity] = useState('');
  const { setSearchCity } = useWeatherStore();

  const handleSearch = () => {
    setSearchCity(city);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter city name"
        value={city}
        onChangeText={setCity}
      />
      <Button title="Search" onPress={handleSearch} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  input: {
    flex: 1,
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    marginRight: 8,
  },
});

export default CitySearchInput;
