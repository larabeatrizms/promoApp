import styled from 'styled-components/native';
import { FlatList } from 'react-native';

interface Promotion {
  id: string;
  title: string;
  uri: string;
}

export const Container = styled.View`
  flex: 1;
  /* padding: 0 14px; */
`;

export const Header = styled.View`
  height: 60px;

  padding-left: 14px;
  padding-right: 14px;

  justify-content: center;
  align-items: flex-start;
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

export const TitleContent = styled.Text`
  font-size: 24px;
  letter-spacing: 0.5px;
  font-family: 'Roboto-Bold';
  color: #333333;

  padding-left: 14px;
  padding-right: 14px;
  margin-bottom: 14px;
`;

export const CardList = styled(FlatList as new () => FlatList<Promotion>).attrs(
  {
    numColumns: 1,
  },
)`
  margin-bottom: 14px;
`;

export const SafeAreaViewSlider = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
`;

export const Card = styled.View`
  position: relative;
  left: -75px;
  /* transform: translateX(50); */
  /* width: 190px; */

  margin-left: 0;
  padding-left: 0;
`;

export const CardImage = styled.Image`
  width: 190px;
  height: 224px;
  border-radius: 20px;

  margin-left: 0;
`;
