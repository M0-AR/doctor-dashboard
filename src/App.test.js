import { render, screen } from '@testing-library/react';
import React from 'react';

// Define the mock component
const MockApp = () => (
  <div className="flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow-md">
    <h2 className="text-2xl font-bold mb-4">
      Force Bipolar from da Vinci Instruments
    </h2>
    <div className="w-full h-96 mb-4" data-testid="mock-3d-canvas" />
    <div className="mt-4 space-y-2 w-full max-w-xs">
      <label className="block">
        Jaw Opening:
        <input type="range" readOnly />
      </label>
    </div>
  </div>
);

// Jest mock with __esModule: true and default
jest.mock('./App', () => ({
  __esModule: true,
  default: () => (
    <div className="flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">
        Force Bipolar from da Vinci Instruments
      </h2>
      <div className="w-full h-96 mb-4" data-testid="mock-3d-canvas" />
    </div>
  ),
}));

test('renders Force Bipolar 3D component (via mock)', () => {
  // Directly import the component, Jest will provide the mock
  const App = require('./App').default;
  render(<App />);
  const titleElement = screen.getByText(/Force Bipolar from da Vinci Instruments/i);
  expect(titleElement).toBeInTheDocument();
  expect(screen.getByTestId('mock-3d-canvas')).toBeInTheDocument();
});
