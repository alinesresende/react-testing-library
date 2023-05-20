import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import pokemonList from '../data';
import FavoritePokemon from '../pages/FavoritePokemon';
import renderWithRouter from '../renderWithRouter';

test('Se apenas são exibidos os Pokémon favoritados.', async () => {
  global.fetch = jest.fn().mockResolvedValue({
    json: jest.fn().mockResolvedValue(pokemonList),
  });
  const { history } = renderWithRouter(<App />);
  const button = screen.getByRole('button', { name: 'Fire' });
  expect(button).toBeInTheDocument();
  userEvent.click(button);

  const linkDetails = screen.getByRole('link', { name: 'More details' });
  userEvent.click(linkDetails);

  const label = screen.getByLabelText('Pokémon favoritado?', { selector: 'input' });
  expect(label).toBeInTheDocument();
  userEvent.click(label);

  const linkFavorites = screen.getByRole('link', { name: 'Favorite Pokémon' });
  expect(linkFavorites).toBeInTheDocument();
  userEvent.click(linkFavorites);

  const { location: { pathname } } = history;
  expect(pathname).toBe('/favorites');

  const cardFavorites = await screen.findByText('Charmander');
  expect(cardFavorites).toBeInTheDocument();

  jest.restoreAllMocks();
});

test('Se é exibida na tela a mensagem No favorite pokemon found, caso a pessoa não tenha Pokémon favoritos', () => {
  render(<FavoritePokemon />);
  const title = screen.getByText('No favorite Pokémon found');
  expect(title).toBeInTheDocument();
});
