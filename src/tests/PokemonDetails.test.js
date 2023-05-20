import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

test('Se as informações detalhadas do Pokémon selecionado são mostradas na tela:', () => {
  const { history } = renderWithRouter(<App />);
  const linkDetails = screen.getByRole('link', { name: 'More details' });
  expect(linkDetails).toBeInTheDocument();

  userEvent.click(linkDetails);
  const { location: { pathname } } = history;
  expect(pathname).toBe('/pokemon/25');

  const textDetails = screen.getByRole('heading', { name: 'Pikachu Details' });
  expect(textDetails).toBeInTheDocument();
  expect(linkDetails).not.toBeInTheDocument();

  const titleSummary = screen.getByRole('heading', { name: 'Summary' });
  expect(titleSummary).toBeInTheDocument();

  const textPokemon = screen.getByText('This intelligent Pokémon roasts hard berries with electricity to make them tender enough to eat.');
  expect(textPokemon).toBeInTheDocument();
});

test('Se existe na página uma seção com os mapas contendo as localizações do Pokémon:', () => {
  const { history } = renderWithRouter(<App />);
  const linkDetails = screen.getByRole('link', { name: 'More details' });
  expect(linkDetails).toBeInTheDocument();

  userEvent.click(linkDetails);
  const { location: { pathname } } = history;
  expect(pathname).toBe('/pokemon/25');

  const titleGame = screen.getByRole('heading', { name: 'Game Locations of Pikachu' });
  expect(titleGame).toBeInTheDocument();

  const srcViridianForest = 'https://archives.bulbagarden.net/media/upload/0/08/Kanto_Route_2_Map.png';
  const altsViridianForest = 'Pikachu location';
  const img = screen.getAllByRole('img')[1];
  expect(img).toHaveAttribute('src', srcViridianForest);
  expect(img).toHaveAttribute('alt', altsViridianForest);

  const srcPowerPlant = 'https://archives.bulbagarden.net/media/upload/b/bd/Kanto_Celadon_City_Map.png';
  const altsPowerPlant = 'Pikachu location';
  const img2 = screen.getAllByRole('img')[2];
  expect(img2).toHaveAttribute('src', srcPowerPlant);
  expect(img).toHaveAttribute('alt', altsPowerPlant);

  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).toBeInTheDocument();

  const label = screen.getByLabelText('Pokémon favoritado?', { selector: 'input' });
  expect(label).toBeInTheDocument();
  userEvent.click(label);

  const src = '/star-icon.svg';
  const alt = 'Pikachu is marked as favorite';
  const iconFavorite = screen.getAllByRole('img')[1];
  expect(iconFavorite).toHaveAttribute('src', src);
  expect(iconFavorite).toHaveAttribute('alt', alt);
  expect(iconFavorite).toBeInTheDocument();

  userEvent.click(label);

  expect(iconFavorite).not.toBeInTheDocument();
});
