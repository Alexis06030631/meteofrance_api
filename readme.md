# MeteoFrance api

## Description

This module allows you to get the weather from the api of meteofrance.

## Installation

```bash
npm install meteofrance_api
```


## Usage

```javascript
const {getWeater} = require('meteofrance_api')
```

--- 

## Methods

### getPlace

Use this method to get information about a place (city, village, etc...).
This method returns array of place.

```javascript
const {getPlace} = require('meteofrance_api')

getPlace('Paris').then(console.log)
```

### getWeather

Use this method to get information about the weather of a place.

```javascript
const {getWeather} = require('meteofrance_api')

getWeather('Paris').then(console.log)
// For better performance use the id instead of the name
getWeather(751160).then(console.log)
```

### getNextRain

Use this method to get information about the next rain of a place.

```javascript
const {getNextRain} = require('meteofrance_api')
getNextRain('Paris').then(console.log)
```


--- 

## Make By Alexis06030631
[Instagram](https://www.instagram.com/leko_system/)
