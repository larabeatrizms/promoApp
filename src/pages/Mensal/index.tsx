import React, { useState } from 'react';

import { View, TouchableWithoutFeedback, Dimensions } from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  Container,
  Content,
  TitleContainer,
  TitleContent,
  Card,
  CardImage,
  ModalButtonClose,
  ModalImage,
} from './styles';

import Header from '../../components/Header';
import CardModal from '../../components/CardModal';

const Mensal: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const handlePressSecond = () => {
    setModalVisible(!modalVisible);
    console.log(`Semanal: ${modalVisible}`);
  };

  return (
    <Container>
      <CardModal visible={modalVisible}>
        <View>
          <ModalButtonClose onPress={() => setModalVisible(!modalVisible)}>
            <Icon name="close-circle" size={24} color="#e83f5b" />
          </ModalButtonClose>
          <ImageZoom
            cropWidth={Dimensions.get('window').width}
            cropHeight={550}
            imageWidth={400}
            imageHeight={550}
          >
            <ModalImage
              enableHorizontalBounce
              source={{
                uri: 'https://i.gyazo.com/8fc06923813195cfc604d38bd8cc52ab.png',
              }}
              resizeMode="contain"
            />
          </ImageZoom>
        </View>
      </CardModal>
      <Header />
      <Content>
        <TitleContainer>Promoções do mês</TitleContainer>
        <TitleContent>Maio</TitleContent>

        <Card>
          <TouchableWithoutFeedback onPress={handlePressSecond}>
            <CardImage
              source={{
                uri: 'https://i.gyazo.com/8fc06923813195cfc604d38bd8cc52ab.png',
              }}
              resizeMode="cover"
            />
          </TouchableWithoutFeedback>
        </Card>
      </Content>
    </Container>
  );
};

export default Mensal;
