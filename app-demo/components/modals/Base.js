import { Modal, TouchableOpacity, Text, View, StyleSheet, Dimensions } from 'react-native';

import Colors from '../../constants/Colors';

const { height, width } = Dimensions.get('window');

export default function Base ({
  id, title, visible, children, onClose
}) {
  return (
    <Modal
      key={id}
      transparent
      animationType="fade"
      visible={visible}
      onRequestClose={onClose}
    >
      <TouchableOpacity style={styles.overlay} />
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          {title && (
            <View>
              <Text>{title}</Text>
            </View>
          )}
          <View>{children}</View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    paddingVertical: 20,
  },
  modalView: {
    backgroundColor: Colors.white,
    borderRadius: 20,
    margin: 20,
    paddingBottom: 15,
    paddingHorizontal: 25,
    paddingTop: 20,
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    height,
    left: 0,
    position: 'absolute',
    top: 0,
    width,
  },
});
