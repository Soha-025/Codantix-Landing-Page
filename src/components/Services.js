import React from 'react';
import Card from './Card';
import './Services.css';

const services = [
  {
    icon: '💻',
    title: 'Web Development',
    description: 'Modern websites for growing businesses.',
  },
  {
    icon: '📱',
    title: 'App Development',
    description: 'Cross-platform mobile apps with sleek UI/UX.',
  },
  {
    icon: '☁️',
    title: 'Cloud Services',
    description: 'Scalable and secure cloud infrastructure.',
  },
];

const Services = () => {
  return (
    <section className="services-section">
      <h2>Our Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <Card
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
