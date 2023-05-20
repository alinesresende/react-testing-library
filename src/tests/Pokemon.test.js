import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

test('Se é renderizado um card com as informações de determinado Pokémon', () => {
  renderWithRouter(<App />);
  const namePokemon = screen.getByText('Pikachu');
  expect(namePokemon).toBeInTheDocument();

  const typePokemon = screen.getAllByText('Electric')[0];
  expect(typePokemon).toBeInTheDocument();

  const weightPokemon = screen.getByText('Average weight: 6.0 kg');
  expect(weightPokemon).toBeInTheDocument();

  const src = 'https://archives.bulbagarden.net/media/upload/b/b2/Spr_5b_025_m.png';
  const alt = 'Pikachu sprite';
  const img = screen.getByRole('img');
  expect(img).toHaveAttribute('src', src);
  expect(img).toHaveAttribute('alt', alt);
});

test('Se o card do Pokémon indicado na Pokédex contém um link de navegação para exibir detalhes deste Pokémon', () => {
  const { history } = renderWithRouter(<App />);
  const linkDetails = screen.getByRole('link', { name: 'More details' });
  expect(linkDetails).toBeInTheDocument();

  userEvent.click(linkDetails);
  const { location: { pathname } } = history;
  expect(pathname).toBe('/pokemon/25');
});

test('Se existe um ícone de estrela nos Pokémon favoritados', () => {
  const { history } = renderWithRouter(<App />);

  const linkDetails = screen.getByRole('link', { name: 'More details' });
  userEvent.click(linkDetails);

  const { location: { pathname } } = history;
  expect(pathname).toBe('/pokemon/25');

  const typePokemon = screen.getByText('Electric');
  expect(typePokemon).toBeInTheDocument();

  const label = screen.getByLabelText('Pokémon favoritado?', { selector: 'input' });
  userEvent.click(label);

  const src = '/star-icon.svg';
  const alt = 'Pikachu is marked as favorite';
  const iconFavorite = screen.getAllByRole('img')[1];
  expect(iconFavorite).toHaveAttribute('src', src);
  expect(iconFavorite).toHaveAttribute('alt', alt);
});
