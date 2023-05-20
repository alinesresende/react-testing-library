import { render, screen } from '@testing-library/react';
import React from 'react';
import { About } from '../pages';

test('Se a página contém um heading h2 com o texto About Pokédex', () => {
  render(<About />);
  const title = screen.getByRole('heading', { name: 'About Pokédex', level: 2 });
  expect(title).toBeInTheDocument();
});

test('Se a página contém dois parágrafos com texto sobre a Pokédex', () => {
  render(<About />);
  const paragraphOne = screen.getByText('This application simulates a Pokédex, a digital encyclopedia containing all Pokémon');
  expect(paragraphOne).toBeInTheDocument();

  const paragraphTwo = screen.getByText('One can filter Pokémon by type, and see more details for each one of them');
  expect(paragraphTwo).toBeInTheDocument();
});

test('Se a página contém a seguinte imagem de uma Pokédex', () => {
  render(<About />);
  const src = 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png';
  const alt = 'Pokédex';
  const img = screen.getByRole('img');
  expect(img).toHaveAttribute('src', src);
  expect(img).toHaveAttribute('alt', alt);
});
