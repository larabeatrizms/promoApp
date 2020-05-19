import React, { useState } from 'react';
import { Image, Dimensions, TouchableWithoutFeedback } from 'react-native';

import Carousel from 'react-native-snap-carousel';

// import {
//   TouchableWithoutFeedback,
//   TouchableOpacity,
// } from 'react-native-gesture-handler';
import logoImg from '../../assets/Logo.png';

import {
  Container,
  Header,
  TitleContainer,
  TitleContent,
  CardList,
  SafeAreaViewSlider,
  Card,
  CardImage,
} from './styles';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    uri:
      'https://www.ibahia.com/fileadmin/user_upload/ibahia/2019/outubro/25/banana.jpg?width=1200&enable=upscale',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    uri:
      'https://www.ibahia.com/fileadmin/user_upload/ibahia/2019/outubro/25/banana.jpg?width=1200&enable=upscale',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    uri:
      'https://www.ibahia.com/fileadmin/user_upload/ibahia/2019/outubro/25/banana.jpg?width=1200&enable=upscale',
  },
];

const sliderWidth = Dimensions.get('window').width;
const itemWidth = Math.round(sliderWidth * 0.55);

interface Promotion {
  id: string;
  title: string;
  uri: string;
}

const Semanal: React.FC = () => {
  const [activeIndexFirst, setActiveIndexFirst] = useState(0);
  const [activeIndexSecond, setActiveIndexSecond] = useState(0);

  const handlePressSecond = () => {
    console.log(activeIndexSecond);
  };

  return (
    <Container>
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
