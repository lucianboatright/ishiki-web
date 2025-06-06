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
            muted
            playsInline
            style={{ width: '100%', height: 'auto' }}
        />
    </Section>
  );
};

export default VideoSection;
