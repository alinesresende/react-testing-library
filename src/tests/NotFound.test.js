import { render, screen } from '@testing-library/react';
import React from 'react';
import { NotFound } from '../pages';

import renderWithRouter from '../renderWithRouter';

test('se a página contém um heading h2 com o texto Page requested not found', () => {
  const { history } = renderWithRouter(<NotFound />);
  history.push('/*');
  const titlePageNotFound = screen.getByRole('heading', { name: 'Page requested not found', level: 2 });
  expect(titlePageNotFound).toBeInTheDocument();
});

test('Se a página Not Found mostra a imagem', () => {
  render(<NotFound />);
  const src = 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif';
  const alt = 'Pikachu crying because the page requested was not found';
  const img = screen.getByRole('img');
  expect(img).toHaveAttribute('src', src);
  expect(img).toHaveAttribute('alt', alt);
});
