import React, { useState } from 'react';

import { View, TouchableWithoutFeedback, Dimensions } from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom';

import Carousel from 'react-native-snap-carousel';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  Container,
  Content,
  TitleContainer,
  HeaderContent,
  TitleContent,
  SafeAreaViewSlider,
  Card,
  CardImage,
  ModalButtonClose,
  ModalImage,
} from './styles';

import Header from '../../components/Header';
import CardModal from '../../components/CardModal';

const DATAMENSAL = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    uri:
      'https://scontent.fnat1-1.fna.fbcdn.net/v/t1.0-9/95678350_1523603837817371_7813800183040311296_o.jpg?_nc_cat=111&_nc_sid=730e14&_nc_ohc=YBEg7NSEItIAX8M-ovG&_nc_ht=scontent.fnat1-1.fna&oh=7913623a33c3a1fb84c0a020eeb04f3a&oe=5EED5AF9',
  },
  {
    id: 'bd7asdbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    uri:
      'https://scontent.fnat1-1.fna.fbcdn.net/v/t1.0-9/95146521_1523603897817365_4773916463729737728_o.jpg?_nc_cat=108&_nc_sid=730e14&_nc_ohc=NOY7iNJT9GEAX8d6uUO&_nc_ht=scontent.fnat1-1.fna&oh=6a32a20a015e8b1b37ee1b3c16f15bae&oe=5EEDDD1C',
  },
];

const sliderWidth = Dimensions.get('window').width;
const itemWidth = Math.round(sliderWidth);

const Mensal: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const [modalVisible, setModalVisible] = useState(false);

  const handlePressImage = () => {
    setModalVisible(!modalVisible);
    console.log(`Segunda e terça: ${modalVisible}`);
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
                uri: DATAMENSAL[activeIndex].uri,
              }}
              resizeMode="contain"
            />
          </ImageZoom>
        </View>
      </CardModal>
      <Header />
      <Content>
        <TitleContainer>Promoções do mês</TitleContainer>
        <HeaderContent>
          <TitleContent>Maio</TitleContent>
          <Icon
            name="arrow-right"
            size={20}
            color={
              activeIndex === DATAMENSAL.length - 1 ? '#878787' : '#e83f5b'
            }
          />
        </HeaderContent>
        <SafeAreaViewSlider>
          <Carousel
            data={DATAMENSAL}
            useScrollView
            sliderWidth={sliderWidth}
            itemWidth={itemWidth}
            onSnapToItem={(index) => setActiveIndex(index)}
            renderItem={({ item, index }) => (
              <Card>
                <TouchableWithoutFeedback onPress={handlePressImage}>
                  <CardImage
                    source={{
                      uri: `${item.uri}`,
                    }}
                    resizeMode="cover"
                  />
                </TouchableWithoutFeedback>
              </Card>
            )}
          />
        </SafeAreaViewSlider>
      </Content>
    </Container>
  );
};

export default Mensal;
