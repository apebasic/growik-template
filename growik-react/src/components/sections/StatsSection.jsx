import { useRef } from 'react';
import CounterNumber from '../ui/CounterNumber';
import styles from './StatsSection.module.css';

/**
 * StatsSection Component
 * Statistics section with animated count-up numbers
 */
const StatsSection = () => {
  const sectionRef = useRef(null);

  const stats = [
    {
      value: 15,
      suffix: '+',
      label: 'Of creative marketing experience'
    },
    {
      value: 98,
      suffix: '%',
      label: 'Customer happiness and loyalty rate'
    },
    {
      value: 200,
      suffix: '+',
      label: 'Brands we\'ve partnered with worldwide'
    }
  ];

  return (
    <section ref={sectionRef} className={styles.stats} id="stats">
      <div className={styles.container}>
        {stats.map((stat, index) => (
          <div key={index} className={styles.statItem}>
            <div className={styles.statValue}>
              <CounterNumber 
                start={0}
                end={stat.value}
                duration={2.5}
                format="number"
                suffix={stat.suffix}
                trigger="scroll"
                className={styles.counter}
              />
            </div>
            <p className={styles.statLabel}>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
