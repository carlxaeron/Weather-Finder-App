import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import CitySearchInput from '../components/CitySearchInput';
import { useWeatherStore } from '../store/weatherStore';

jest.mock('../store/weatherStore');

describe('CitySearchInput', () => {
  it('should update the city input value', () => {
    const { getByPlaceholderText } = render(<CitySearchInput />);
    const input = getByPlaceholderText('Enter city name');

    fireEvent.changeText(input, 'New York');
    expect(input.props.value).toBe('New York');
  });

  it('should call setSearchCity with the correct city name', () => {
    const setSearchCity = jest.fn();
    useWeatherStore.mockReturnValue({ setSearchCity });

    const { getByPlaceholderText, getByText } = render(<CitySearchInput />);
    const input = getByPlaceholderText('Enter city name');
    const button = getByText('Search');

    fireEvent.changeText(input, 'New York');
    fireEvent.press(button);

    expect(setSearchCity).toHaveBeenCalledWith('New York');
  });
});
