import { View, StyleSheet, TouchableOpacity, Alert } from "react-native";
import Icon from 'react-native-vector-icons/Feather';


export default function Navbar() {
  const handleMenuPress = () => {
    Alert.alert("Menú", "Botón de despliegue presionado");
  };

  const handleProfilePress = () => {
    Alert.alert("Perfil", "Botón de perfil presionado");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleMenuPress}>
        <Icon name="menu" size={24} color="#AAB4C2" />
      </TouchableOpacity>

      <TouchableOpacity onPress={handleProfilePress}>
        <Icon name="user" size={24} color="#AAB4C2" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#16213E',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 6, // sombra en Android si la necesitás
  },
});
