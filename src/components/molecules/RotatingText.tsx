import { useEffect, useState } from 'react';
import styles from './RotatingText.module.css';

interface RotatingTextProps {
  words: string[];
  interval?: number;
}

const RotatingText = ({ words, interval = 3000 }: RotatingTextProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, interval);

    return () => clearInterval(timer);
  }, [words.length, interval]);

  return (
    <div className={styles.rotatingContainer} aria-live="polite" aria-atomic="true">
      {words.map((word, index) => (
        <span
          key={index}
          className={`${styles.word} ${index === currentIndex ? styles.active : styles.inactive}`}
        >
          {word}
        </span>
      ))}
    </div>
  );
};

export default RotatingText;
