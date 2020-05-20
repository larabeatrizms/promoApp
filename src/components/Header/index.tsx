import React from 'react';

import { Image } from 'react-native';

import logoImg from '../../assets/Logo.png';

import { Container } from './styles';

const Header: React.FC = () => (
  <Container>
    <Image source={logoImg} resizeMode="contain" />
  </Container>
);

export default Header;
