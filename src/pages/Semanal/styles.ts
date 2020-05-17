import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 0 14px;
`;

export const Header = styled.View`
  height: 60px;

  justify-content: center;
  align-items: flex-start;
`;

export const TitleContainer = styled.Text`
  font-family: 'Roboto-Medium';
  font-size: 14px;
  color: #878787;
`;

export const TitleContent = styled.Text`
  font-size: 24px;
  font-family: 'Roboto-Bold';
  color: #333333;
`;

export const Card = styled.View`
  margin: 0;
  padding: 0;
  background-color: #666;
`;

export const CardImage = styled.Image`
  width: 190px;
  height: 224px;
  border-radius: 20px;

  margin: 0;
  padding: 0;
`;
