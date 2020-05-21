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
      <Container
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
      />
      {children}
    </Modal>
  );
};

export default CardModal;
