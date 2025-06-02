import React from 'react';
import { SectionWrapper, ContentWrapper, TextColumn, Title, SubTitle, Paragraph, ImageColumn } from './TextImageComponent/textImageComponent.styles';

interface TextComponentProps {
    title?: string;
    subTitle?: string;
    textBody?: string;
    video?: any;
}

const TextComponent: React.FC<TextComponentProps> = ({ title, subTitle, textBody, video }) => {
  return (
        <SectionWrapper>
        <ContentWrapper>
            <TextColumn>
            <Title>{title}</Title>
            <SubTitle>{subTitle}</SubTitle>
            <Paragraph>
            <div dangerouslySetInnerHTML={{ __html: textBody || 'string'}}></div>
            </Paragraph>
            </TextColumn>
            <ImageColumn />
        </ContentWrapper>
        </SectionWrapper>
  );
};

export default TextComponent;