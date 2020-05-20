import React, { useState } from 'react';
import { Dimensions, TouchableWithoutFeedback, View } from 'react-native';

import Carousel from 'react-native-snap-carousel';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  Container,
  Content,
  TitleContainer,
  TitleContent,
  SafeAreaViewSlider,
  Card,
  CardImage,
  ModalButtonClose,
  ModalImage,
} from './styles';

import Header from '../../components/Header';
import CardModal from '../../components/CardModal';

const DATA1 = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    uri: 'https://i.gyazo.com/01b4887cc36788b03a3f07a6050fc458.jpg',
  },
  {
    id: 'bd7asdbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    uri: 'https://i.gyazo.com/3586907860fd4703a42003db216efc0b.jpg',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    uri: 'https://i.gyazo.com/3586907860fd4703a42003db216efc0b.jpg',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    uri: 'https://i.gyazo.com/01b4887cc36788b03a3f07a6050fc458.jpg',
  },
];

const DATA2 = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    uri: 'https://i.gyazo.com/01b4887cc36788b03a3f07a6050fc458.jpg',
  },
  {
    id: 'bd7asdbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    uri: 'https://i.gyazo.com/3586907860fd4703a42003db216efc0b.jpg',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    uri: 'https://i.gyazo.com/3586907860fd4703a42003db216efc0b.jpg',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    uri: 'https://i.gyazo.com/01b4887cc36788b03a3f07a6050fc458.jpg',
  },
];

const sliderWidth = Dimensions.get('window').width;
const itemWidth = Math.round(sliderWidth * 0.6);

interface Promotion {
  id: string;
  title: string;
  uri: string;
}

const Semanal: React.FC = () => {
  const [activeIndexFirst, setActiveIndexFirst] = useState(0);
  const [activeIndexSecond, setActiveIndexSecond] = useState(0);

  const [modalVisible, setModalVisible] = useState(false);
  const [list, setList] = useState(1);

  const handlePressFirst = () => {
    setModalVisible(!modalVisible);
    setList(1);
    console.log(`Segunda e terça: ${modalVisible}`);
  };

  const handlePressSecond = () => {
    setModalVisible(!modalVisible);
    setList(2);
    console.log(`Quarta e Quinta: ${modalVisible}`);
  };

  return (
    <Container>
      <CardModal visible={modalVisible}>
        <View>
          <ModalButtonClose onPress={() => setModalVisible(!modalVisible)}>
            <Icon name="close-circle" size={24} color="#e83f5b" />
          </ModalButtonClose>
          <ModalImage
            source={{
              uri:
                list === 1
                  ? DATA1[activeIndexFirst].uri
                  : DATA2[activeIndexSecond].uri,
            }}
            resizeMode="contain"
          />
        </View>
      </CardModal>

      <Content>
        <Header />

        <TitleContainer>Promoções da semana</TitleContainer>
        <TitleContent>Segunda e Terça</TitleContent>
        <SafeAreaViewSlider>
          <Carousel
            data={DATA1}
            useScrollView
            sliderWidth={sliderWidth}
            itemWidth={itemWidth}
            onSnapToItem={(index) => setActiveIndexFirst(index)}
            renderItem={({ item, index }) => (
              <Card>
                <TouchableWithoutFeedback onPress={handlePressFirst}>
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

        <TitleContent>Quarta e Quinta</TitleContent>
        <SafeAreaViewSlider>
          <Carousel
            data={DATA2}
            layout="default"
            sliderWidth={sliderWidth}
            itemWidth={itemWidth}
            onSnapToItem={(index) => setActiveIndexSecond(index)}
            renderItem={({ item, index }) => (
              <Card>
                <TouchableWithoutFeedback onPress={handlePressSecond}>
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

export default Semanal;
