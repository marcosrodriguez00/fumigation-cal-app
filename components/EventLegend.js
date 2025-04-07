import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function EventLegend() {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <View style={[styles.dot, styles.pink]} />
        <Text style={styles.label}>Evento 1</Text>
      </View>
      <View style={styles.item}>
        <View style={[styles.dot, styles.orange]} />
        <Text style={styles.label}>Evento 2</Text>
      </View>
      <View style={styles.item}>
        <View style={[styles.dot, styles.purple]} />
        <Text style={styles.label}>Evento 3</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      width: '90%', // Ocupa todo el ancho disponible
      marginTop: 10,
      alignItems: 'flex-start',
      gap: 3,
    },
    item: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    dot: {
      width: 14,
      height: 14,
      borderRadius: 7,
      marginRight: 10,
    },
    pink: {
      backgroundColor: '#FF69B4',
    },
    orange: {
      backgroundColor: '#FFA500',
    },
    purple: {
      backgroundColor: '#9B59B6',
    },
    label: {
      color: '#FFFFFF',
      fontSize: 16,
      fontWeight: '500',
    }, 
});
