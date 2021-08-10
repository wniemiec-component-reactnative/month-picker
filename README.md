![](https://github.com/wniemiec-component-reactnative/month-picker/blob/master/docs/img/logo/logo.jpg)

<h1 align='center'>Month picker</h1>
<p align='center'>Month selector.</p>
<p align="center">
	<a href="https://github.com/wniemiec-component-reactnative/month-picker/actions/workflows/windows.yml"><img src="https://github.com/wniemiec-component-reactnative/month-picker/actions/workflows/windows.yml/badge.svg" alt=""></a>
	<a href="https://github.com/wniemiec-component-reactnative/month-picker/actions/workflows/macos.yml"><img src="https://github.com/wniemiec-component-reactnative/month-picker/actions/workflows/macos.yml/badge.svg" alt=""></a>
	<a href="https://github.com/wniemiec-component-reactnative/month-picker/actions/workflows/ubuntu.yml"><img src="https://github.com/wniemiec-component-reactnative/month-picker/actions/workflows/ubuntu.yml/badge.svg" alt=""></a>
	<a href="https://reactnative.dev/"><img src="https://img.shields.io/badge/React Native-0.60+-D0008F.svg" alt="React Native compatibility"></a>
	<a href="https://github.com/wniemiec-component-reactnative/month-picker/releases"><img src="https://img.shields.io/github/v/release/wniemiec-component-reactnative/month-picker" alt="Release"></a>
	<a href="https://github.com/wniemiec-component-reactnative/month-picker/blob/master/LICENSE"><img src="https://img.shields.io/github/license/wniemiec-component-reactnative/month-picker" alt="License"></a>
</p>
<hr />

## ❇ Introduction
React Native component that allows you to choose a month.

## 🖼 Gallery

<div style="display: flex; flex-direction: row; justify-content: center; align-items: center; flex-wrap: wrap"
<img height=400 src="https://raw.githubusercontent.com/wniemiec-component-reactnative/month-picker/master/docs/img/screens/img1.png" alt="image 1" />

<img height=400 src="https://raw.githubusercontent.com/wniemiec-component-reactnative/month-picker/master/docs/img/screens/img2.png" alt="image 2" />

<img height=400 src="https://raw.githubusercontent.com/wniemiec-component-reactnative/month-picker/master/docs/img/screens/img3.png" alt="image 3" />
</div>

## ❓ How to use
1. Install the component
```
$ npm install --save @wniemiec-component-reactnative/month-picker
```

2. Import the component
```
import MonthPicker from '@wniemiec-component-reactnative/month-picker';
```

3. Use it
```
[...]

import React, { useState } from 'react';
import { View } from 'react';

[...]

const [selectedMonth, setSelectedMonth]  = useState(0);

[...]

<View style={{ display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  <MonthPicker 
	selectedMonth={selectedMonth} 
	setSelectedMonth={setSelectedMonth}
  />
</View>

[...]
```

## 📖 Documentation
|        Property        |Type|Description|Default|
|----------------|-------------------------------|-----------------------------|--------|
|selectedDay |`number`|Month that will be centered in the selector | - |
|setSelectedMonth |`function(void): void`|Function that changes the selected month after a month is selected in the selector | - |
|bgColor |`string`|Background color (in hexadecimal)  |`"#233287"`|
|fgColor |`string`|Foreground color (in hexadecimal)  |`"#FFFFFF"`|

## 🚩 Changelog
Details about each version are documented in the [releases section](https://github.com/wniemiec-component-reactnative/month-picker/releases).

## 🤝 Contribute!
See the documentation on how you can contribute to the project [here](https://github.com/wniemiec-component-reactnative/month-picker/blob/master/CONTRIBUTING.md).

## 📁 Files

### /
|        Name        |Type|Description|
|----------------|-------------------------------|-----------------------------|
|docs |`Directory`|Documentation files|
|src     |`Directory`| Source files|
