import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CubicText3D from '../ui/CubicText3D';
import VideoShape from '../ui/VideoShape';
import MarqueeText from '../ui/MarqueeText';
import CounterNumber from '../ui/CounterNumber';
import Card from '../ui/Card';
import styles from './ServicesSection.module.css';

gsap.registerPlugin(ScrollTrigger);

/**
 * ServicesSection Component
 * Services section with stacking cards animation
 */
const ServicesSection = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  const services = [
    {
      number: 1,
      title: 'Strategy',
      description: 'We craft data-driven marketing strategies tailored to your business goals, ensuring measurable growth and long-term success.',
      features: ['Goal-Oriented', 'Data-Driven', 'Custom-Tailored', 'Multi-Channel', 'Scalable'],
      videoUrl: '/videos/shape-01.mp4',
      scrollingText: 'Strategy ✺ '
    },
    {
      number: 2,
      title: 'Branding',
      description: 'Build a strong and memorable brand identity with compelling visuals, messaging, and positioning that resonate with your audience.',
      features: ['Memorable Identity', 'Consistent Messaging', 'Visual Impact', 'Market Positioning', 'Emotional Connection'],
      videoUrl: '/videos/shape-02.mp4',
      scrollingText: 'Branding ✺ '
    },
    {
      number: 3,
      title: 'Advertising',
      description: 'Maximize your reach with targeted ad campaigns across digital platforms, delivering high ROI and precise audience engagement.',
      features: ['Targeted Reach', 'Multi-Platform', 'Performance-Optimized', 'Creative Messaging', 'Budget-Friendly'],
      videoUrl: '/videos/shape-03.mp4',
      scrollingText: 'Advertising ✺ '
    },
    {
      number: 4,
      title: 'Consulting',
      description: 'We provide strategic consulting to help brands identify growth opportunities, refine their marketing approach, and make smarter business decisions.',
      features: ['Market Analysis', 'Brand Strategy', 'Growth Planning', 'Performance Review', 'Creative Direction'],
      videoUrl: '/videos/shape-04.mp4',
      scrollingText: 'Consulting ✺ '
    }
  ];

  useEffect(() => {
    if (cardsRef.current.length === 0) return;

    // Stacking cards animation
    cardsRef.current.forEach((card, index) => {
      if (!card) return;

      ScrollTrigger.create({
        trigger: card,
        start: 'top top',
        end: 'bottom top',
        pin: true,
        pinSpacing: false,
        scrub: true
      });

      // Scale down previous cards as new ones come in
      if (index > 0) {
        gsap.to(cardsRef.current.slice(0, index), {
          scale: 0.95 - (index * 0.02),
          scrollTrigger: {
            trigger: card,
            start: 'top bottom',
            end: 'top top',
            scrub: true
          }
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className={styles.services} id="services">
      {/* Section Title */}
      <div className={styles.titleWrapper}>
        <div className={styles.decorator}>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path d="M20 4L24 16L36 20L24 24L20 36L16 24L4 20L16 16L20 4Z" fill="currentColor"/>
          </svg>
        </div>
        <div className={styles.titleLabel}>Marketing Solutions</div>
        <CubicText3D 
          words={['Services', 'Services', 'Services', 'Services']}
          size="section"
          autoRotate={false}
          scrollTrigger={{
            trigger: sectionRef.current,
            start: 'top 60%'
          }}
        />
        <div className={styles.totalCount}>(0{services.length})</div>
      </div>

      {/* Service Cards */}
      <div className={styles.cardsContainer}>
        {services.map((service, index) => (
          <Card
            key={index}
            ref={el => cardsRef.current[index] = el}
            variant="service"
            className={styles.serviceCard}
          >
            {/* Background Video */}
            <div className={styles.videoBackground}>
              <VideoShape src={service.videoUrl} />
              <div className={styles.videoOverlay}></div>
            </div>

            {/* Card Content */}
            <div className={styles.cardContent}>
              {/* Number */}
              <div className={styles.cardNumber}>
                <CounterNumber 
                  start={0}
                  end={service.number}
                  format="padded"
                  trigger="scroll"
                />
              </div>

              {/* Title */}
              <h3 className={styles.cardTitle}>{service.title}</h3>

              {/* Description */}
              <p className={styles.cardDescription}>{service.description}</p>

              {/* Features */}
              <ul className={styles.featureList}>
                {service.features.map((feature, idx) => (
                  <li key={idx} className={styles.featureItem}>{feature}</li>
                ))}
              </ul>
            </div>

            {/* Scrolling Text */}
            <div className={styles.scrollingText}>
              <MarqueeText speed={15} direction="left">
                <span className={styles.marqueeText}>
                  {service.scrollingText.repeat(10)}
                </span>
              </MarqueeText>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
