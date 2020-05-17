import React from 'react';
import { Image } from 'react-native';

import logoImg from '../../assets/Logo.png';

import {
  Container,
  Header,
  TitleContainer,
  TitleContent,
  Card,
  CardImage,
} from './styles';

const Semanal: React.FC = () => {
  return (
    <Container>
      <Header>
        <Image source={logoImg} resizeMode="contain" />
      </Header>

      <TitleContainer>Promoções da semana</TitleContainer>
      <TitleContent>Segunda e Terça</TitleContent>

      <Card>
        <CardImage
          source={{
            uri:
              'https://www.ibahia.com/fileadmin/user_upload/ibahia/2019/outubro/25/banana.jpg?width=1200&enable=upscale',
          }}
          resizeMode="contain"
        />
      </Card>

      <TitleContent>Quarta e Quinta</TitleContent>
      <Card>
        <CardImage
          source={{
            uri:
              'https://www.ibahia.com/fileadmin/user_upload/ibahia/2019/outubro/25/banana.jpg?width=1200&enable=upscale',
          }}
          resizeMode="contain"
        />
      </Card>
    </Container>
  );
};

export default Semanal;
