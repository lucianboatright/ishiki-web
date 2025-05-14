import React from 'react';
import Section from '../../section';


interface VideoSectionProps {
  sectionTitle?: string;
    section: string;
    video?: any;
}

const VideoSection: React.FC<VideoSectionProps> = ({
    video,
    section,
    sectionTitle
}) => {
  return (
    <Section id={section} title={sectionTitle}>
        <video
            src="/videos/IshikiLogoCropped.mp4"
            autoPlay
            // loop
            muted
            playsInline
            style={{ width: '100%', height: '10rem' }}
        />
    </Section>
  );
};

export default VideoSection;
