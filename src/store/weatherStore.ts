import create from 'zustand';

interface WeatherState {
  weatherData: any;
  favoriteCities: string[];
  searchCity: string;
  setWeatherData: (data: any) => void;
  addFavoriteCity: (city: string) => void;
  removeFavoriteCity: (city: string) => void;
  setSearchCity: (city: string) => void;
}

export const useWeatherStore = create<WeatherState>((set) => ({
  weatherData: null,
  favoriteCities: [],
  searchCity: '',
  setWeatherData: (data) => set({ weatherData: data }),
  addFavoriteCity: (city) => set((state) => ({ favoriteCities: [...state.favoriteCities, city] })),
  removeFavoriteCity: (city) => set((state) => ({ favoriteCities: state.favoriteCities.filter((c) => c !== city) })),
  setSearchCity: (city) => set({ searchCity: city }),
}));
