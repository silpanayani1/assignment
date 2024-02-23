import { render, screen } from '@testing-library/react';
import App from './App';

test('renders text', () => {
  render(<App />);
  const linkElement = screen.getByText(/NYC High Schools/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders school name', () => {
  render(<App />);
  const linkElement = screen.queryAllByTestId('school_name')
  expect(linkElement).toBeInTheDocument();
});


test('renders dbn', () => {
  render(<App />);
  const linkElement = screen.queryAllByTestId('school_dbn');
  expect(linkElement).toBeInTheDocument();
});

test('renders School Details', () => {
  render(<App />);
  const linkElement = screen.getByText(/School Details:/i);
  expect(linkElement).toBeInTheDocument();
});


test('renders details', () => {
  render(<App />);
  const linkElement = screen.queryAllByTestId('school_dbn');
  expect(linkElement).toBeInTheDocument();
});

test('renders school details1', () => {
  render(<App />);
  const linkElement = screen.queryAllByTestId('school_para');
  expect(linkElement).toBeInTheDocument();
});
test('renders details2', () => {
  render(<App />);
  const linkElement = screen.queryAllByTestId('school_opp');
  expect(linkElement).toBeInTheDocument();
});
test('renders details3', () => {
  render(<App />);
  const linkElement = screen.queryAllByTestId('school_opp2');
  expect(linkElement).toBeInTheDocument();
});
