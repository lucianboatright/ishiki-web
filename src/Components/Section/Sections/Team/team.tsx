import React from 'react';
import Section from '../../section';
import { Grid } from './team.styles';
import TeamCard from '../../../TextComponents/TeamCard/teamCard';


const team = [
    {
      name: 'Elena Omura',
      title: 'CEO, Founder & Creative Producer',
      description:
        'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.',
      imageUrl: '/avatars/elena.jpg',
    },
    {
      name: 'Mithila Joshi',
      title: 'Executive Director & Creative Producer',
      description:
      'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.',
      imageUrl: '/avatars/mithila.jpg',
    },
    {
      name: 'Emin Akyar',
      title: 'Business Development Lead & Creative Producer',
      description:
      'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.',
      imageUrl: '/avatars/emin.jpg',
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