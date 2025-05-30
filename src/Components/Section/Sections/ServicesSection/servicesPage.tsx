import React from 'react';
import Services from '../../../TextComponents/Services/services';
import RingSvg from '../../../../assets/logo/ringstack.svg'
import Section from '../../section';

const services = [
  {
    label: 'DROP IN',
    gradient: 'linear-gradient(90deg, #3CEACE 0%, #1154E0 100%)',
    description:
      'A 3–5 minute introduction film, unique to your brand/initiative.',
    subtext: 'Ideal for small enterprises, start-ups & NGOs',
  },
  {
    label: 'DIVE IN',
    gradient: 'linear-gradient(90deg, #1154E0 0%, #5B6BFF 100%)',
    description:
      'Sharing ideas, solutions & stories through a mini series or long format film.',
    subtext:
      'Ideal for mid-size and large enterprises, international organizations and initiatives',
  },
  {
    label: 'RESONANCE',
    gradient: 'linear-gradient(90deg, #999 0%, #FFF 100%)',
    description:
      'Creating deeper connections through immersive events like interactive exhibitions, mixed reality experiences or workshops.',
    subtext: 'Ideal for mid-size and large enterprises, looking for immersive experiences',
  },
];

const ServicesSection: React.FC = () => {
  return (
    <Section id="services" title='Our Offering'>
      <Services
        title="Amplifying the impact of value-aligned clients & initiatives, with sincere storytelling & strategic distribution."
        image={RingSvg}
        services={services}
      />    
    </Section>
  );
};

export default ServicesSection;
