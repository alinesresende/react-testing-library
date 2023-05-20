import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

test('se a página contém um heading h2 com o texto Encountered Pokémon', () => {
  renderWithRouter(<App />);
  const title = screen.getByRole('heading', { name: 'Encountered Pokémon' });
  expect(title).toBeInTheDocument();
});

test('Se é exibido o próximo Pokémon da lista quando o botão Próximo Pokémon é clicado', async () => {
  renderWithRouter(<App />);
  const buttonPokemon = screen.getByRole('button', { name: 'Próximo Pokémon' });
  expect(buttonPokemon).toBeInTheDocument();

  const pokemonPikachu = await screen.findByText('Pikachu');
  expect(pokemonPikachu).toBeInTheDocument();

  userEvent.click(buttonPokemon);
  const pokemonCharmander = await screen.findByText('Charmander');
  expect(pokemonCharmander).toBeInTheDocument();

  userEvent.click(buttonPokemon);
  const pokemonCaterpie = await screen.findByText('Caterpie');
  expect(pokemonCaterpie).toBeInTheDocument();

  userEvent.click(buttonPokemon);
  const pokemonEkans = await screen.findByText('Ekans');
  expect(pokemonEkans).toBeInTheDocument();

  userEvent.click(buttonPokemon);
  const pokemonAlakazam = await screen.findByText('Alakazam');
  expect(pokemonAlakazam).toBeInTheDocument();

  userEvent.click(buttonPokemon);
  const pokemonMew = await screen.findByText('Mew');
  expect(pokemonMew).toBeInTheDocument();

  userEvent.click(buttonPokemon);
  const pokemonRapidash = await screen.findByText('Rapidash');
  expect(pokemonRapidash).toBeInTheDocument();

  userEvent.click(buttonPokemon);
  const pokemonSnorlax = await screen.findByText('Snorlax');
  expect(pokemonSnorlax).toBeInTheDocument();

  userEvent.click(buttonPokemon);
  const pokemonDragonair = await screen.findByText('Dragonair');
  expect(pokemonDragonair).toBeInTheDocument();

  userEvent.click(buttonPokemon);
  const pokemonPikachu2 = await screen.findByText('Pikachu');
  expect(pokemonPikachu2).toBeInTheDocument();
});

test('Se é mostrado apenas um Pokémon por vez;', () => {
  renderWithRouter(<App />);
  const linkDetails = screen.getByRole('link', { name: 'More details' });
  expect(linkDetails).toBeInTheDocument();
});

test('Se a Pokédex tem os botões de filtro', () => {
  renderWithRouter(<App />);
  const buttonFilterPokemon = screen.getAllByTestId('pokemon-type-button');
  expect(buttonFilterPokemon).toHaveLength(7);
});

test('Se botão All precisa estar sempre visível', async () => {
  renderWithRouter(<App />);
  const buttonTypeFire = screen.getAllByText('Fire')[0];
  expect(buttonTypeFire).toBeInTheDocument();

  userEvent.click(buttonTypeFire);
  const typeFire = screen.getAllByText('Fire')[1];
  expect(typeFire).toBeInTheDocument();

  const buttonPokemon = screen.getByRole('button', { name: 'Próximo Pokémon' });
  userEvent.click(buttonPokemon);

  const typeFire1 = screen.getAllByText('Fire')[1];
  expect(typeFire1).toBeInTheDocument();
  const buttonAll = screen.getByRole('button', { name: 'All' });
  expect(buttonAll).toBeVisible();

  userEvent.click(buttonAll);

  const pokemonPikachu = await screen.findByText('Pikachu');
  expect(pokemonPikachu).toBeInTheDocument();

  userEvent.click(buttonPokemon);
  const pokemonCharmander = await screen.findByText('Charmander');
  expect(pokemonCharmander).toBeInTheDocument();

  userEvent.click(buttonPokemon);
  const pokemonCaterpie = await screen.findByText('Caterpie');
  expect(pokemonCaterpie).toBeInTheDocument();

  userEvent.click(buttonPokemon);
  const pokemonEkans = await screen.findByText('Ekans');
  expect(pokemonEkans).toBeInTheDocument();

  userEvent.click(buttonPokemon);
  const pokemonAlakazam = await screen.findByText('Alakazam');
  expect(pokemonAlakazam).toBeInTheDocument();

  userEvent.click(buttonPokemon);
  const pokemonMew = await screen.findByText('Mew');
  expect(pokemonMew).toBeInTheDocument();

  userEvent.click(buttonPokemon);
  const pokemonRapidash = await screen.findByText('Rapidash');
  expect(pokemonRapidash).toBeInTheDocument();

  userEvent.click(buttonPokemon);
  const pokemonSnorlax = await screen.findByText('Snorlax');
  expect(pokemonSnorlax).toBeInTheDocument();

  userEvent.click(buttonPokemon);
  const pokemonDragonair = await screen.findByText('Dragonair');
  expect(pokemonDragonair).toBeInTheDocument();

  userEvent.click(buttonPokemon);
  const pokemonPikachu2 = await screen.findByText('Pikachu');
  expect(pokemonPikachu2).toBeInTheDocument();
});

test('É possível clicar no botão de filtragem All', () => {
  renderWithRouter(<App />);
  const buttonAll = screen.getByRole('button', { name: 'All' });
  expect(buttonAll).toBeInTheDocument();
  userEvent.click(buttonAll);
});
