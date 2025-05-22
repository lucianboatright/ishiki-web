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
      description:
        'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.',
    },
    {
      image: MithilaImage,
      name: 'Mithila Joshi',
      title: 'Executive Director & Creative Producer',
      description:
      'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.',
    },
    {
      image: EminImage,
      name: 'Emin Akyar',
      title: 'Business Development Lead & Creative Producer',
      description:
      'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.',
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