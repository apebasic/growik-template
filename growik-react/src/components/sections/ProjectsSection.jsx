import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CubicText3D from '../ui/CubicText3D';
import Card from '../ui/Card';
import Button from '../ui/Button';
import styles from './ProjectsSection.module.css';

gsap.registerPlugin(ScrollTrigger);

/**
 * ProjectsSection Component
 * Portfolio/case studies section with project cards
 */
const ProjectsSection = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  const projects = [
    {
      title: 'Involve',
      year: '2025',
      image: 'https://via.placeholder.com/600x400/FF6B4A/ffffff?text=Involve',
      link: '#'
    },
    {
      title: 'Botify',
      year: '2024',
      image: 'https://via.placeholder.com/600x400/000000/ffffff?text=Botify',
      link: '#'
    },
    {
      title: 'Flowen',
      year: '2023',
      image: 'https://via.placeholder.com/600x400/FF6B4A/ffffff?text=Flowen',
      link: '#'
    },
    {
      title: 'Techsy',
      year: '2022',
      image: 'https://via.placeholder.com/600x400/000000/ffffff?text=Techsy',
      link: '#'
    }
  ];

  useEffect(() => {
    if (cardsRef.current.length === 0) return;

    cardsRef.current.forEach((card, index) => {
      if (!card) return;

      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            once: true
          }
        }
      );
    });
  }, []);

  return (
    <section ref={sectionRef} className={styles.projects} id="projects">
      {/* Section Header */}
      <div className={styles.header}>
        <div className={styles.decorator}>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path d="M20 4L24 16L36 20L24 24L20 36L16 24L4 20L16 16L20 4Z" fill="currentColor"/>
          </svg>
        </div>
        <div className={styles.titleLabel}>Success Stories</div>
        <CubicText3D 
          words={['Projects', 'Projects', 'Projects', 'Projects']}
          size="section"
          autoRotate={false}
          scrollTrigger={{
            trigger: sectionRef.current,
            start: 'top 60%'
          }}
        />
        <p className={styles.subtitle}>
          Explore our latest work and see how our strategies turned ideas into measurable results.
        </p>
      </div>

      {/* Project Grid */}
      <div className={styles.grid}>
        {projects.map((project, index) => (
          <Card
            key={index}
            ref={el => cardsRef.current[index] = el}
            variant="project"
            className={styles.projectCard}
          >
            <div className={styles.imageWrapper}>
              <img src={project.image} alt={project.title} className={styles.projectImage} />
              <div className={styles.overlay}>
                <Button variant="link" href={project.link}>
                  VIEW
                </Button>
              </div>
            </div>
            <div className={styles.projectInfo}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <span className={styles.projectYear}>• {project.year}</span>
            </div>
          </Card>
        ))}
      </div>

      {/* See All Button */}
      <div className={styles.footer}>
        <Button variant="primary" href="#projects">
          SEE ALL
        </Button>
      </div>
    </section>
  );
};

export default ProjectsSection;
