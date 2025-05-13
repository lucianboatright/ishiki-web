import React from 'react';
import Section from '../../section';
import SimpleTextComponent from '../../../TextComponents/SimpleTextComponent/simpleTextComponent';

const OurMission: React.FC = () => {
  return (
    <Section id="ourMission">
        <SimpleTextComponent title='OUR MISSION' textBody='Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.'/>
    </Section>
  );
};

export default OurMission;
