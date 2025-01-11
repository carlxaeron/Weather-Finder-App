# Weather-Finder-App

## Description

Weather-Finder-App is a mobile application built with React-Native, Typescript, and React Query. It allows users to search for weather information by city name, view weather details, and manage a list of favorite cities. The app features a responsive UI using Material UI to ensure it looks good on different screen sizes and devices.

## Features

- Search City: Allows users to search for weather information by city name.
- Weather Details: Displays weather details for the searched city, including temperature, humidity, and weather conditions.
- Favorite Cities: Allows users to save and manage a list of their favorite cities.
- Responsive UI: Ensures the application looks good on different screen sizes and devices using Material UI.

## UI/UX

- Uses a modern UI framework like `react-native-paper` or `react-native-elements` for components.
- Implements basic animations (optional) for transitions or loading states to enhance the user experience.
- Ensures the UI is responsive and looks good on different screen sizes and devices by using Material UI.

## State Management

- Uses `zustand` for state management.
- The state and actions for managing the weather data, search functionality, and favorite cities are defined in the zustand store.

## Navigation

- Uses `react-navigation` for handling screen transitions.
- Home Screen: For searching and displaying weather information.
- Favorites Screen: For listing saved cities.

## API Integration

- Fetches weather data from the OpenWeatherMap API using Axios or Fetch API.
- Handles API errors gracefully (e.g., invalid city name or network errors).

## Local Storage

- Persists the Favorites list using AsyncStorage or a library like `react-native-mmkv`.

## Styling

- Follows best practices for styling with StyleSheet or libraries like `tailwind-rn`.

## Testing

- Includes basic unit tests for components (e.g., city search input) using Jest and React Native Testing Library.

## Setup and Running the Project

1. Clone the repository:
   ```
   git clone https://github.com/carlxaeron/Weather-Finder-App.git
   ```
2. Navigate to the project directory:
   ```
   cd Weather-Finder-App
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Run the project:
   ```
   npm start
   ```
