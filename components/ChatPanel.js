import React, { useEffect, useRef } from 'react';
import {
  Animated,
  Dimensions,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default function ChatPanel({ visible, onClose }) {
  const slideAnim = useRef(new Animated.Value(SCREEN_WIDTH)).current;

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: visible ? 0 : SCREEN_WIDTH,
      duration: 300,
      useNativeDriver: true, // usamos transform
    }).start();
  }, [visible]);

  return (
    <Animated.View
      style={[
        styles.panelWrapper,
        {
          transform: [{ translateX: slideAnim }],
        },
      ]}
    >
      <View style={styles.panel}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Soporte Técnico</Text>
          <TouchableOpacity onPress={onClose}>
            <Icon name="close" size={24} color="#0A0F2C" />
          </TouchableOpacity>
        </View>

        <View style={styles.messageBubble}>
          <Text style={styles.messageText}>Hola 👋 ¿En qué podemos ayudarte hoy?</Text>
        </View>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  panelWrapper: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    width: SCREEN_WIDTH * 0.8,
    zIndex: 99,
    elevation: 8,
  },
  panel: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderLeftWidth: 1,
    borderLeftColor: '#ccc',
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    paddingHorizontal: 16,
    paddingTop: 24, // aumento para dejar espacio desde arriba
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0A0F2C',
  },
  messageBubble: {
    backgroundColor: '#F0F0F0',
    padding: 12,
    borderRadius: 8,
  },
  messageText: {
    fontSize: 14,
    color: '#333',
  },
});
