import React from 'react';
import Section from '../../section';
import { Grid } from './team.styles';
import TeamCard from '../../../TextComponents/TeamCard/teamCard';

import ElenaImage from '../../../../assets/CoreTeam/Elena_omura.png'
import MithilaImage from '../../../../assets/CoreTeam/Mithila_joshi.png'
import EminImage from '../../../../assets/CoreTeam/Emin_akyar.png'


const team = [
    {
      image: ElenaImage,
      name: 'Elena Omura',
      title: 'CEO, Founder & Creative Producer',
    },
    {
      image: MithilaImage,
      name: 'Mithila Joshi',
      title: 'Executive Director & Creative Producer',
    },
    {
      image: EminImage,
      name: 'Emin Akyar',
      title: 'Business Development Lead & Creative Producer',
    },
];

const Team = () => (
  <Section id="coreTeam" title="Team">
    
      <Grid>
        {team.map((member) => (
          <TeamCard key={member.name} {...member} />
        ))}
      </Grid>
  </Section>
);

export default Team;