import React from 'react';

import Section from '../../section';
import { Grid, Title } from './ourCollective.styles';
import TeamNameComponent from '../../../TextComponents/TeamName/teamName';

const members = [
  { name: 'Lorem Ipsum', role: 'Dolor sit amet' },
  { name: 'Lorem Ipsum', role: 'Dolor sit amet' },
  { name: 'Lorem Ipsum', role: 'Dolor sit amet' },
  { name: 'Lorem Ipsum', role: 'Dolor sit amet' },
  { name: 'Lorem Ipsum', role: 'Dolor sit amet' },
  { name: 'Lorem Ipsum', role: 'Dolor sit amet' },
  { name: 'Lorem Ipsum', role: 'Dolor sit amet' },
  { name: 'Lorem Ipsum', role: 'Dolor sit amet' },
  { name: 'Lorem Ipsum', role: 'Dolor sit amet' },
];

const CollectiveSection: React.FC = () => {
  return (
    <Section>
      <Title>Our Collective</Title>
      <Grid>
        {members.map((member, index) => (
          <TeamNameComponent key={index} {...member} />
        ))}
      </Grid>
    </Section>
  );
};

export default CollectiveSection;
