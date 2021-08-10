/**
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 * @format
 */

import React, { useRef, useLayoutEffect } from 'react';
import { Dimensions, ScrollView, View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function Month({ key, month, onPress, selected, bgColor, fgColor }) {
  return (
    <MonthButton
      key={key}
      onPress={onPress}
      selected={selected}
      fgColor={bgColor}
    >
      <Text style={buildMonthTextStyle(fgColor)}>
        {month}
      </Text>
    </MonthButton>
  );
}

function MonthButton({ children, key, onPress, selected, bgColor }) {
  return (
    <TouchableOpacity
      key={key}
      onPress={onPress}
      style={buildMonthButtonStyle()}
    >
      <View style={buildMonthButtonAreaStyle(selected, bgColor)}>
        {children}
      </View>
    </TouchableOpacity>
  );
}

function buildMonthButtonStyle() {
  return [
    styles.monthButton,
    { width: MONTH_WIDTH - 20 }
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
