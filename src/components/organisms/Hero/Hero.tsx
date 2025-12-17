import Button from '../../atoms/Button/Button';
import RotatingText from '../../molecules/RotatingText';
import styles from './Hero.module.css';

const Hero = () => {
  const rotatingTextWords = [
    'CAREER',
    'FUTURE SELF',
    'LOVED ONES',
    'STRENGTH',
    'GOALS',
    'ENERGY',
    'MARRIAGE',
  ];

  const handleGetStarted = () => {
    console.log('Get started clicked');
  };

  return (
    <section className={styles.hero} aria-label="Hero section">
      <div className={styles.heroContent}>
        {/* Hero Left Section */}
        <div className="container">
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>
              WHAT MAKES
              <br />
              YOU <span className={styles.highlightText}>MOVE?</span>
            </h1>
            <p className={styles.heroDescription}>
              {
                "Mariana, whatever your why, it's worth moving for. With weekly personalized movement plans and 1:1 expert guidance, Sword Move can guide you toward your healthiest self."
              }
            </p>
            <Button
              variant="primary"
              size="lg"
              onClick={handleGetStarted}
              aria-label="Get started with Sword Move"
            >
              Get Started
            </Button>
            <p className={styles.heroFootNote}>Join members moving with purpose.</p>
          </div>
        </div>
        {/* Hero Right Section */}
        <div className={styles.heroImage}>
          <div className={styles.imageWrapper}>
            <img
              src="/hero-image.jpg"
              alt="Mother and child embracing, representing loved ones and family motivation"
              className={styles.image}
            />
            <div className={styles.rotatingOverlay} aria-hidden="true">
              <RotatingText words={rotatingTextWords} interval={3000} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
