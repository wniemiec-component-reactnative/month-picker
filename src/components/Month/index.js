/**
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 * @format
 */

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function Month({ month, onPress, selected, bgColor, fgColor, width }) {
  return (
    <MonthButton
      onPress={onPress}
      selected={selected}
      bgColor={bgColor}
      width={width}
    >
      <Text style={buildMonthTextStyle(fgColor)}>
        {month}
      </Text>
    </MonthButton>
  );
}

function MonthButton({ children, onPress, selected, bgColor, width }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={buildMonthButtonStyle(width)}
    >
      <View style={buildMonthButtonAreaStyle(selected, bgColor)}>
        {children}
      </View>
    </TouchableOpacity>
  );
}

function buildMonthButtonStyle(width) {
  return [
    styles.monthButton,
    { width: width - 20 }
  ];
}

function buildMonthButtonAreaStyle(selected, bgColor) {
  return [
    styles.monthButton, 
    { opacity: selected ? 1 : 0.6 },
    { backgroundColor: bgColor }
  ];
}

function buildMonthTextStyle(fgColor) {
  return [
    styles.monthLabel, 
    { color: fgColor }
  ];
}
