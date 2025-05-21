import React from 'react';
import Section from '../../section';
import TextComponent from '../../../TextComponents/TextImageComponent/textImageComponent';

const BioSection: React.FC = () => {
  return (
    <Section id="bio">
        <TextComponent title='Ishiki Bio' subTitle='' textBody='Ishiki is a studio rooted in ‘awareness’ of people, technology, and the shifting landscapes of the future. We embrace this complexity through honest, in-depth storytelling that circumvents fear-driven narratives to explore what it means to be human. <br /> <br /> While filmmaking remains the core of our craft, the stories we tell transcend it. Whether via film, mixed reality, or experiential events, Ishiki strives to inspire change through an immersive approach that connects audiences to solutions. Innovative and authentic, our work explores ways to ensure emerging tools serve humanity rather than replace it. Guided by our core values, Ishiki is a space for ethical, creative collaboration - to play, discover, and awaken our consciousness together.'/>
    </Section>
  );
};

export default BioSection;
