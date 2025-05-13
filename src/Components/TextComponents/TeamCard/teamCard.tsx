import React from 'react';
import { Card, Avatar, Info, Name, Title, Description } from './teamCard.styles';

interface TeamCardProps {
  imageUrl: string;
  name: string;
  title: string;
  description: string;
}

const TeamCard: React.FC<TeamCardProps> = ({
  imageUrl,
  name,
  title,
  description,
}) => {
  return (
    <Card>
      <Avatar src={imageUrl} alt={name} />
      <Info>
        <Name>{name}</Name>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Info>
    </Card>
  );
};

export default TeamCard;