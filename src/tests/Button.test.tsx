import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from '../components/atoms/Button/Button';
import styles from '../components/atoms/Button/Button.module.css';

describe('Button', () => {
  it('renders the text correctly', () => {
    render(<Button>Click here</Button>);
    expect(screen.getByText('Click here')).toBeInTheDocument();
  });

  it('applies the primary variant by default', () => {
    render(<Button>Button</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass(styles.primary);
  });

  it('applies the secondary variant when specified', () => {
    render(<Button variant="secondary">Button</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass(styles.secondary);
  });

  it('calls onClick when clicked', async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();

    render(<Button onClick={handleClick}>Click</Button>);
    await user.click(screen.getByRole('button'));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
