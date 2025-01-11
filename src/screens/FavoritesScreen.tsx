import React from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { useWeatherStore } from '../store/weatherStore';

const FavoritesScreen = () => {
  const { favoriteCities, removeFavoriteCity } = useWeatherStore();

  const renderItem = ({ item }) => (
    <View style={styles.cityContainer}>
      <Text style={styles.cityName}>{item}</Text>
      <Button title="Remove" onPress={() => removeFavoriteCity(item)} />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favorite Cities</Text>
      <FlatList
        data={favoriteCities}
        keyExtractor={(item) => item}
        renderItem={renderItem}
      />
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
  cityContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    marginBottom: 8,
  },
  cityName: {
    fontSize: 18,
  },
});

export default FavoritesScreen;
