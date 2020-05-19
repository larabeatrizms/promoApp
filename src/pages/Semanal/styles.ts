import styled from 'styled-components/native';

// interface Promotion {
//   id: string;
//   title: string;
//   uri: string;
// }

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

export const SafeAreaViewSlider = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
`;

export const Card = styled.View`
  position: relative;
  left: -64px;
`;

export const CardImage = styled.Image`
  width: 220px;
  height: 224px;
  border-radius: 10px;

  /* transform: scale(2); */

  margin-left: 0;
`;

export const ModalContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  /* margin: 150px 10px;
  padding: 5px;
  border-radius: 20px;

  background-color: #ebebeb; */
`;

export const ModalHeader = styled.View`
  width: 100%;
  padding: 10px 5px 0 0;

  align-items: flex-end;
`;

export const ModalButtonClose = styled.TouchableOpacity`
  position: relative;
  top: 190px;
  right: 16px;
  width: 100%;
  z-index: 1;

  align-items: flex-end;
`;

export const ModalImage = styled.Image`
  width: 98%;
  height: 95%;
  /* background-color: pink; */

  border-radius: 5px;
`;
