import React, { useState } from 'react';
import {
  Dimensions,
  TouchableWithoutFeedback,
  View,
  Image,
} from 'react-native';

import Carousel from 'react-native-snap-carousel';
import ImageZoom from 'react-native-image-pan-zoom';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  Container,
  Content,
  TitleContainer,
  TitleContent,
  HeaderContent,
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
    uri:
      'https://scontent.fnat1-1.fna.fbcdn.net/v/t1.0-9/97494011_1539261849584903_6780976628433420288_o.jpg?_nc_cat=108&_nc_sid=730e14&_nc_ohc=-Xah3BuRSmUAX9hy4ML&_nc_ht=scontent.fnat1-1.fna&oh=f6586260b924297d98a483001e72acd9&oe=5EEEF3DB',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    uri:
      'https://scontent.fnat1-1.fna.fbcdn.net/v/t1.0-9/96836113_1533062470204841_5247125802805362688_o.jpg?_nc_cat=105&_nc_sid=730e14&_nc_ohc=95HSw_4A8jEAX_6SM0u&_nc_ht=scontent.fnat1-1.fna&oh=3d3e54349ac6fd34c9bb1b3223071445&oe=5EEE92A7',
  },
];

const DATA2 = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    uri:
      'https://scontent.fnat1-1.fna.fbcdn.net/v/t1.0-9/97325416_1534790353365386_9185101181007953920_o.jpg?_nc_cat=104&_nc_sid=730e14&_nc_ohc=3sxAkB68GHUAX8_vWXk&_nc_ht=scontent.fnat1-1.fna&oh=0405cd56130afaec821b49cc73e308be&oe=5EEFD4C3',
  },
  {
    id: 'bd7asdbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    uri:
      'https://scontent.fnat1-1.fna.fbcdn.net/v/t1.0-9/97963736_1534790190032069_5695046868363378688_o.jpg?_nc_cat=110&_nc_sid=730e14&_nc_ohc=841ZbYwgUEIAX9UomJv&_nc_ht=scontent.fnat1-1.fna&oh=71fd213e82aa2ed897793d941c5ca57f&oe=5EECA438',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    uri:
      'https://scontent.fnat1-1.fna.fbcdn.net/v/t1.0-9/97989398_1534790300032058_1270361591405084672_o.jpg?_nc_cat=100&_nc_sid=730e14&_nc_ohc=EODwKcDhRN4AX_Ap0Fq&_nc_ht=scontent.fnat1-1.fna&oh=6fa4b97b295133f70cf25754f49db75f&oe=5EEE22F8',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    uri:
      'https://scontent.fnat1-1.fna.fbcdn.net/v/t1.0-9/96939826_1534790243365397_3329004012686016512_o.jpg?_nc_cat=104&_nc_sid=730e14&_nc_ohc=rT_lS5Tx8XYAX8YXVFP&_nc_ht=scontent.fnat1-1.fna&oh=076c853e829d961f7fa151c56d186549&oe=5EEEDAC2',
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
          <ImageZoom
            cropWidth={350}
            cropHeight={350}
            imageWidth={350}
            imageHeight={350}
          >
            <ModalImage
              source={{
                uri:
                  list === 1
                    ? DATA1[activeIndexFirst].uri
                    : DATA2[activeIndexSecond].uri,
              }}
            />
          </ImageZoom>
        </View>
      </CardModal>

      <Content>
        <Header />

        <TitleContainer>Promoções da semana</TitleContainer>
        <HeaderContent>
          <TitleContent>Segunda e Terça</TitleContent>
          <Icon
            name="arrow-right"
            size={20}
            color={
              activeIndexFirst === DATA1.length - 1 ? '#878787' : '#e83f5b'
            }
          />
        </HeaderContent>
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

        <HeaderContent>
          <TitleContent>Quarta e Quinta</TitleContent>
          <Icon
            name="arrow-right"
            size={20}
            color={
              activeIndexSecond === DATA2.length - 1 ? '#878787' : '#e83f5b'
            }
          />
        </HeaderContent>
        <SafeAreaViewSlider>
          <Carousel
            data={DATA2}
            layout="default"
            sliderWidth={sliderWidth}
            itemWidth={itemWidth}
            onSnapToItem={(index) => setActiveIndexSecond(index)}
            renderItem={({ item, index }) => (
              <TouchableWithoutFeedback onPress={handlePressSecond}>
                <Card>
                  <CardImage
                    source={{
                      uri: `${item.uri}`,
                    }}
                    resizeMode="cover"
                  />
                </Card>
              </TouchableWithoutFeedback>
            )}
          />
        </SafeAreaViewSlider>
      </Content>
    </Container>
  );
};

export default Semanal;
