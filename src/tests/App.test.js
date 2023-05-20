import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

test('Se primeiro link com o texto Home', () => {
  const { history } = renderWithRouter(<App />);
  const linkHome = screen.getByRole('link', { name: 'Home' });
  expect(linkHome).toBeInTheDocument();

  userEvent.click(linkHome);
  const { location: { pathname } } = history;
  expect(pathname).toBe('/');
});

test('Se segundo link com o texto Home', () => {
  const { history } = renderWithRouter(<App />);
  const linkAbout = screen.getByRole('link', { name: 'About' });
  expect(linkAbout).toBeInTheDocument();

  userEvent.click(linkAbout);
  const { location: { pathname } } = history;
  expect(pathname).toBe('/about');
});

test('Se terceiro link com o texto Favorite Pokémon', () => {
  const { history } = renderWithRouter(<App />);
  const linkFavorites = screen.getByRole('link', { name: 'Favorite Pokémon' });
  expect(linkFavorites).toBeInTheDocument();

  userEvent.click(linkFavorites);
  const { location: { pathname } } = history;
  expect(pathname).toBe('/favorites');
});
