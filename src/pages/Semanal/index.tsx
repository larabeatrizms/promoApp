import React, { useState } from 'react';
import {
  Image,
  Dimensions,
  TouchableWithoutFeedback,
  Modal,
  TouchableOpacity,
} from 'react-native';

import Carousel from 'react-native-snap-carousel';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import logoImg from '../../assets/Logo.png';

import {
  Container,
  Header,
  TitleContainer,
  TitleContent,
  SafeAreaViewSlider,
  Card,
  CardImage,
  ModalContainer,
  ModalButtonClose,
  ModalImage,
} from './styles';

const DATA = [
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
    uri:
      'https://www.kitano.com.br/wp-content/uploads/2019/07/SSP_2803-Brasa-maminha-com-pa%E2%95%A0%C3%BCprica-ore%E2%95%A0%C3%BCgano-e-sal.jpg',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    uri:
      'https://www.ibahia.com/fileadmin/user_upload/ibahia/2019/outubro/25/banana.jpg?width=1200&enable=upscale',
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

  const handlePressSecond = () => {
    console.log(activeIndexSecond);
    setModalVisible(!modalVisible);
  };

  return (
    <Container>
      <Modal
        animationType="slide"
        transparent
        visible={modalVisible}
        onRequestClose={() => {
          console.log('modal fechou');
        }}
      >
        <ModalContainer
          style={{
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.32,
            shadowRadius: 5.46,

            elevation: 9,
          }}
        >
          {/* <TitleContent>Promoção</TitleContent> */}
          {/* <ModalHeader>
            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
              <Icon name="close-circle" size={24} color="#e83f5b" />
            </TouchableOpacity>
          </ModalHeader> */}
          <ModalButtonClose onPress={() => setModalVisible(!modalVisible)}>
            <Icon name="close-circle" size={24} color="#e83f5b" />
          </ModalButtonClose>
          <ModalImage
            source={{
              uri: DATA[activeIndexSecond].uri,
            }}
            resizeMode="contain"
          />
        </ModalContainer>
      </Modal>

      <Header>
        <Image source={logoImg} resizeMode="contain" />
      </Header>
      <TitleContainer>Promoções da semana</TitleContainer>
      <TitleContent>Segunda e Terça</TitleContent>
      <SafeAreaViewSlider>
        <Carousel
          data={DATA}
          useScrollView
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          onSnapToItem={(index) => setActiveIndexFirst(index)}
          renderItem={({ item, index }) => (
            <Card>
              <CardImage
                source={{
                  uri: `${item.uri}`,
                }}
                resizeMode="cover"
              />
            </Card>
          )}
        />
      </SafeAreaViewSlider>

      <TitleContent>Quarta e Quinta</TitleContent>
      <SafeAreaViewSlider>
        <Carousel
          data={DATA}
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
    </Container>
  );
};

export default Semanal;
