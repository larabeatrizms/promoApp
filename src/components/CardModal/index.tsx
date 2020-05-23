import React from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';

import Modal from 'react-native-modal';

import { Container } from './styles';

interface CardModalProps {
  visible: boolean;
}

const CardModal: React.FC<CardModalProps> = ({ visible, children }) => {
  return (
    <Modal
      isVisible={visible}
      backdropColor="#fff"
      backdropOpacity={0.8}
      animationIn="zoomInDown"
      animationOut="zoomOutUp"
      animationInTiming={600}
      animationOutTiming={600}
      backdropTransitionInTiming={600}
      backdropTransitionOutTiming={600}
    >
      <Container>{children}</Container>
    </Modal>
  );
};

export default CardModal;
