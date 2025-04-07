import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Alert } from 'react-native';
import React, { useState } from 'react';
import ChatPanel from './components/ChatPanel';
import Navbar from './components/Navbar';
import CustomCalendar from './components/CustomCalendar';
import EventLegend from './components/EventLegend';
import ChatToogle from './components/ChatToogle';
import AddEventButton from './components/AddEventButton';

export default function App() {
  const [isChatVisible, setIsChatVisible] = useState(false);

  return (
    <View style={styles.wrapper}>
      {/* Esto asegura que el fondo de la status bar sea igual al navbar */}
      <StatusBar style="light" />

      <SafeAreaView style={styles.safeArea}>
        <Navbar />
      </SafeAreaView>

      <View style={styles.content}>
        <EventLegend />
        <CustomCalendar
          onDayPress={(day, dateObj, events) => {
            if (events.length > 0) {
              const message = events.map(e => `• ${e.label}`).join('\n');
              Alert.alert(`Eventos para el día ${day}`, message);
            } else {
              Alert.alert(`Día ${day}`, 'No hay eventos para este día.');
            }
          }}
        />
        <ChatPanel visible={isChatVisible} onClose={() => setIsChatVisible(false)} />
      </View>

      <ChatToogle onPress={() => setIsChatVisible(!isChatVisible)} />
      <AddEventButton />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#0A0F2C',
  },
  safeArea: {
    backgroundColor: '#16213E', // Mismo color que el navbar
  },
  content: {
    flex: 1,
    backgroundColor: '#0A0F2C',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  text: {
    color: '#AAB4C2',
    fontSize: 16,
  },
});
