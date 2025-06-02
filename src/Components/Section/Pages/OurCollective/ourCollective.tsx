import React from 'react';

import Section from '../../section';
import { Grid } from './ourCollective.styles';
import TeamNameComponent from '../../../TextAndVideoComponents/TeamName/teamName';

const members = [
  { name: 'Samual Duckett', role: 'Creative Producer' },
  { name: 'Gabriela Takacova', role: 'Business Consultant' },
  { name: 'Anisha Lanewala', role: 'Cinematographer' },
  { name: 'Prarthana Gupta', role: 'Production Designer' },
  { name: 'Petar Mrdjen', role: 'Sound Designer' },
  { name: 'Giona Sem', role: 'Editor' },
  { name: 'Aaryaman Kutty', role: 'Colorist' },
  { name: 'Nicole Goode', role: 'Colorist' },
  { name: 'Lena D’Helena', role: 'Hair & Make-up' },
  { name: 'Freyja Sewell', role: 'Artistic Collaborator' },
  { name: 'Karin Torbjörnsdóttir', role: 'Artistic Collaborator' },
  { name: 'Hami.Studio', role: 'Branding & Design Studio' },
  { name: 'Lucian Boatwright-Roberts', role: 'Full Stack Developer' },
];

const CollectiveSection: React.FC = () => {
  return (
    <Section id='ourCollective' title='Our Collective'>
      <Grid>
        {members.map((member, index) => (
          <TeamNameComponent key={index} {...member} />
        ))}
      </Grid>
    </Section>
  );
};

export default CollectiveSection;
