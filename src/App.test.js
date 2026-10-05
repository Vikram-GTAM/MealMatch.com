import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders the Meal Match homepage', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  expect(
    screen.getByRole('heading', { name: /meals made to match you/i })
  ).toBeInTheDocument();
  expect(screen.getAllByAltText('Meal Match')).toHaveLength(2);
});
