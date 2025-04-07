import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Alert } from 'react-native';
import {
  getDaysInMonth,
  startOfMonth,
  getDay,
  addMonths,
  subMonths,
  format
} from 'date-fns';
import { es } from 'date-fns/locale';

// const SCREEN_WIDTH = Dimensions.get('window').width;
const CALENDAR_PADDING = 16;
const CELL_HEIGHT = 90;

export default function CustomCalendar({ onDayPress }) {
  const [currentDate, setCurrentDate] = useState(new Date());

  const totalDays = getDaysInMonth(currentDate);
  const startWeekDay = (getDay(startOfMonth(currentDate)) + 6) % 7;

  const events = [
    { day: 3, type: 'pink', label: 'Evento 1' },
    { day: 3, type: 'orange', label: 'Evento 2' },
    { day: 3, type: 'purple', label: 'Evento 3' },
    { day: 5, type: 'orange', label: 'Evento 2' },
    { day: 10, type: 'pink', label: 'Evento 1' },
    { day: 15, type: 'purple', label: 'Evento 3' },
    { day: 15, type: 'pink', label: 'Evento 1' },
    { day: 20, type: 'orange', label: 'Evento 2' },
    { day: 20, type: 'pink', label: 'Evento 1' },
    { day: 25, type: 'purple', label: 'Evento 3' },
  ];

  const days = [];
  for (let i = 0; i < startWeekDay; i++) {
    days.push(null);
  }
  for (let i = 1; i <= totalDays; i++) {
    days.push(i);
  }

  const handlePrevMonth = () => {
    setCurrentDate(prev => subMonths(prev, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(prev => addMonths(prev, 1));
  };

  const formattedTitle = format(currentDate, 'MMMM yyyy', { locale: es });

  return (
    <View style={styles.calendarContainer}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handlePrevMonth}>
          <Text style={styles.arrow}>{'<'}</Text>
        </TouchableOpacity>
        <Text style={styles.title}>{formattedTitle}</Text>
        <TouchableOpacity onPress={handleNextMonth}>
          <Text style={styles.arrow}>{'>'}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.weekRow}>
        {['L', 'M', 'M', 'J', 'V', 'S', 'D'].map((d, idx) => (
          <Text key={idx} style={styles.weekDayText}>{d}</Text>
        ))}
      </View>

      <View style={styles.daysGrid}>
        {days.map((day, index) => {
          const dayEvents = events.filter(e => e.day === day);

          return (
            <TouchableOpacity
              key={index}
              style={styles.dayCell}
              onPress={() => day && onDayPress?.(day, currentDate, dayEvents)}
              disabled={!day}
            >
              {day && (
                <>
                  <Text style={styles.dayNumber}>{day}</Text>
                  <View style={styles.eventRow}>
                    {dayEvents.slice(0, 3).map((event, idx) => (
                      <View
                        key={idx}
                        style={[styles.eventDot, styles[event.type]]}
                      />
                    ))}
                  </View>
                </>
              )}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  calendarContainer: {
    backgroundColor: '#0A0F2C',
    padding: CALENDAR_PADDING,
    width: '100%',
    alignSelf: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  arrow: {
    fontSize: 20,
    color: '#FFFFFF',
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  weekRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  weekDayText: {
    width: `${100 / 7}%`,
    textAlign: 'center',
    color: '#AAB4C2',
    fontWeight: 'bold',
  },
  daysGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  dayCell: {
    width: `${100 / 7}%`,
    height: CELL_HEIGHT,
    backgroundColor: '#16213E',
    padding: 6,
    position: 'relative',
    borderWidth: 1,
    borderColor: '#1F2A48', // Puedes probar con #2C3E50 o similar si querés más contraste
  },
  dayNumber: {
    color: '#AAB4C2',
    fontSize: 12,
    position: 'absolute',
    top: 6,
    left: 6,
  },
  eventRow: {
    position: 'absolute',
    bottom: 6,
    left: 6,
    right: 6,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 4,
  },
  eventDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
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
});
