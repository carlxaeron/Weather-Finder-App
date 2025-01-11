import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useWeatherStore } from '../store/weatherStore';
import { fetchWeatherData } from '../api/weatherApi';

const HomeScreen = () => {
  const [city, setCity] = useState('');
  const { weatherData, setWeatherData, addFavoriteCity } = useWeatherStore();

  const handleSearch = async () => {
    try {
      const data = await fetchWeatherData(city);
      setWeatherData(data);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Weather Finder</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter city name"
        value={city}
        onChangeText={setCity}
      />
      <Button title="Search" onPress={handleSearch} />
      {weatherData && (
        <View style={styles.weatherContainer}>
          <Text style={styles.weatherText}>Temperature: {weatherData.main.temp}°C</Text>
          <Text style={styles.weatherText}>Humidity: {weatherData.main.humidity}%</Text>
          <Text style={styles.weatherText}>Condition: {weatherData.weather[0].description}</Text>
          <Button title="Add to Favorites" onPress={() => addFavoriteCity(city)} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    width: '100%',
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    marginBottom: 16,
  },
  weatherContainer: {
    marginTop: 16,
    alignItems: 'center',
  },
  weatherText: {
    fontSize: 18,
    marginBottom: 8,
  },
});

export default HomeScreen;
