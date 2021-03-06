import styled from 'styled-components/native';

import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

// interface Promotion {
//   id: string;
//   title: string;
//   uri: string;
// }

export const Container = styled.View`
  flex: 1;
  /* padding: 0 14px; */
`;

export const Content = styled.View`
  flex: 1;
`;

export const TitleContainer = styled.Text`
  font-family: 'Roboto-Medium';
  letter-spacing: 0.5px;
  font-size: 14px;
  color: #878787;

  padding-left: 14px;
  padding-right: 14px;
  margin-top: 5px;
  margin-bottom: 10px;
`;

export const HeaderContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 14px;
  margin-right: 8px;
`;

export const TitleContent = styled.Text`
  font-size: 24px;
  letter-spacing: 0.5px;
  font-family: 'Roboto-Bold';
  color: #333333;

  padding-left: 14px;
  padding-right: 14px;
`;

export const ModalButtonClose = styled.TouchableOpacity`
  position: relative;
  top: -10px;
  left: ${Dimensions.get('window').width - 33}px;
  width: 30px;
  height: 30px;
`;

export const ModalImage = styled.Image`
  width: 98%;
  height: 99%;
  /* background-color: pink; */

  border-radius: 5px;
`;

export const Card = styled.View`
  flex: 1;

  margin: 10px;
`;

export const CardImage = styled.Image`
  width: ${width - 20}px;
  height: ${height - 270}px;
  border-radius: 10px;

  /* transform: scale(2); */
`;

export const SafeAreaViewSlider = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
`;
