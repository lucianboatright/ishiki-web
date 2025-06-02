import React from 'react';
import Section from '../../section';
import { Grid } from './team.styles';
import TeamCard from '../../../TextAndVideoComponents/TeamCard/teamCard';

import ElenaImage from '../../../../assets/CoreTeam/Elena_omura.png'
import MithilaImage from '../../../../assets/CoreTeam/matila-second.jpg'
import EminImage from '../../../../assets/CoreTeam/EminPic.jpg'


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