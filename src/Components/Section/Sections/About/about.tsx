import React from 'react';
import Section from '../../section';
import TextComponent from '../../../TextComponents/TextImageComponent/textImageComponent';

const BioSection: React.FC = () => {
  return (
    <Section id="bio">
        <TextComponent title='Ishiki Bio' subTitle='Sed ut perspiciatis' textBody='    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
                quisquam est.<br /><br /> 

                Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.<br /><br /> 

                Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
                quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
                quia non numquam.'/>
    </Section>
  );
};

export default BioSection;
