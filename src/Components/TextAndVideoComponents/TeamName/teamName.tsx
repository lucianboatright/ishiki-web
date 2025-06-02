import React from 'react';
import { Card, Name, Role } from './teamName.styles';

interface TeamNameComponentProps {
  name: string;
  role: string;
}

const TeamNameComponent: React.FC<TeamNameComponentProps> = ({ name, role }) => {
  return (
    <Card>
      <Name>{name}</Name>
      <Role>{role}</Role>
    </Card>
  );
};

export default TeamNameComponent;