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
import { Dimensions, ScrollView } from 'react-native';
import styles from './styles';
import { translate } from '../locales';
import Month from '../components/Month';

const SCREEN_WIDTH = Math.round(Dimensions.get('window').width);
const MONTH_WIDTH = SCREEN_WIDTH / 3;
const MONTHS = [
  translate('january'),
  translate('february'),
  translate('march'),
  translate('april'),
  translate('may'),
  translate('june'),
  translate('july'),
  translate('august'),
  translate('september'),
  translate('october'),
  translate('november'),
  translate('december')
];

/**
 * Month selector.
 * 
 * @param    {number} selectedMonth Month referring to the days of the selector
 * @param    {function(void): void} setSelectedMonth function that changes the 
 * selected month after a month is selected in the selector  
 * @param    {string} [fgColor='#FFFFFF'] Text color
 * @param    {string} [bgColor='#233287'] Background color
 */
export default function MonthPicker({
  selectedMonth, 
  setSelectedMonth, 
  fgColor='#FFFFFF', 
  bgColor='#233287'
}) {
  const monthRef = useRef();
  
  const handleScrollEnd = (event) => {
    const position = getHorizontalPositionOfEvent(event);

    setSelectedMonth(getMonthAt(position));
  }

  const handleSelectMonth = (index) => {
    setSelectedMonth(index);
  }

  const updatePicker = () => {
    // Needed to give Scrollview time to load
    setTimeout(
      () => updateScrollView(), 
      100
    );
  }

  const updateScrollView = () => {
    scrollToMonth(selectedMonth);
  }

  const scrollToMonth = (month) => {
    monthRef.current.scrollTo({
      x: month * MONTH_WIDTH,
      y: 0,
      animated: true
    });
  }

  useLayoutEffect(() => {
    updatePicker();
  }, [selectedMonth]);

  return (
    <ScrollView
      horizontal={true}
      ref={monthRef}
      showsHorizontalScrollIndicator={false}
      decelerationRate='fast'
      snapToInterval={MONTH_WIDTH}
      contentContainerStyle={{ paddingLeft: MONTH_WIDTH, paddingRight: MONTH_WIDTH }}
      onMomentumScrollEnd={handleScrollEnd}
      style={styles.area}
    >
      {MONTHS.map((month, index) => (
        <Month 
          key={index}
          month={month}
          onPress={() => handleSelectMonth(index)}
          selected={selectedMonth == index}
          bgColor={bgColor}
          fgColor={fgColor}
        />
      ))}
    </ScrollView>
  )
}

function getHorizontalPositionOfEvent(event) {
  return event.nativeEvent.contentOffset.x;
}

function getMonthAt(position) {
  return Math.round(position / MONTH_WIDTH);
}
