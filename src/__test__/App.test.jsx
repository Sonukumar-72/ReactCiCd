// import { render, screen } from '@testing-library/react';
// import { describe, it, expect } from 'vitest';
// import App from '../App'; // Correct relative path

// describe('App Component', () => {
//   it('renders App component successfully', () => {
//     render(<App />);
//     expect(screen.getByText(/Vite \+ React/i)).toBeInTheDocument(); // Ensure the text matches
//   });
// });



import { render, screen } from '@testing-library/react'; // Import testing utilities
import { describe, it, expect } from 'vitest'; // Vitest for testing
import App from '../App'; // Import App component (relative path)

describe('App Component', () => {
  it('renders App component successfully', () => {
    render(<App />); // Render the App component
    expect(screen.getByText(/Vite \+ React/i)).toBeInTheDocument(); // Assert text is in the DOM
  });
});
