import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Hero from '../components/organisms/Hero/Hero';

describe('Hero Section', () => {
  it('renders the main heading', () => {
    render(<Hero />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveTextContent(/WHAT MAKES/i);
    expect(heading).toHaveTextContent(/YOU/i);
    expect(heading).toHaveTextContent(/MOVE\?/i);
  });

  it('renders the description text', () => {
    render(<Hero />);
    expect(screen.getByText(/Mariana, whatever your why/i)).toBeInTheDocument();
  });

  it('renders the CTA button', () => {
    render(<Hero />);
    const button = screen.getByRole('button', { name: /get started/i });
    expect(button).toBeInTheDocument();
  });

  it('renders the hero image with alt text', () => {
    render(<Hero />);
    const image = screen.getByAltText(/Mother and child/i);
    expect(image).toBeInTheDocument();
  });

  it('renders all rotating words simultaneously', () => {
    render(<Hero />);
    expect(screen.getByText('CAREER')).toBeInTheDocument();
    expect(screen.getByText('FUTURE SELF')).toBeInTheDocument();
    expect(screen.getByText('LOVED ONES')).toBeInTheDocument();
    expect(screen.getByText('STRENGTH')).toBeInTheDocument();
    expect(screen.getByText('GOALS')).toBeInTheDocument();
    expect(screen.getByText('ENERGY')).toBeInTheDocument();
    expect(screen.getByText('MARRIAGE')).toBeInTheDocument();
  });

  it('has proper accessibility attributes', () => {
    render(<Hero />);
    const section = screen.getByLabelText('Hero section');
    expect(section).toBeInTheDocument();
  });
});
