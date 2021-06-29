# Strategy Group 

Lovelace: Custom Strategies

## Minimum Home Assistant Version

Home Assistant version 2021.5 or higher is required as of release 1.2.0 of config-template-card


## Installation

Use [HACS](https://hacs.xyz) 

```yaml
resources:
  - url: /local/strategy-group.js
    type: module
```

## Example in View

```yaml
title: Engenharia
path: engenharia
strategy:
  type: custom:strategy-group
group: group.engenharia
```


## Domains Supported

| domain              | card                   | reference                                                |
|---------------------|------------------------|----------------------------------------------------------|
| camera              | `custom:webrtc-camera` | https://github.com/AlexxIT/WebRTC                        |
| lock                | `entities`             | https://www.home-assistant.io/lovelace/entities/         |
| climate             | `thermostat`           | https://www.home-assistant.io/lovelace/thermostat/       |
| scene               | `entities`             | https://www.home-assistant.io/lovelace/entities/       |
| binary_sensor       | `entities`             | https://www.home-assistant.io/lovelace/entities/       |
| sensor              | `sensor`               | https://www.home-assistant.io/lovelace/sensor/           |
| cover               | `entities`             | https://www.home-assistant.io/lovelace/entities/         |
| switch              | `entities`             | https://www.home-assistant.io/lovelace/entities/         |
| weather             | `weather-forecast`     | https://www.home-assistant.io/lovelace/weather-forecast/ |
| light               | `entities`             | https://www.home-assistant.io/lovelace/entities/         |
| media_player        | `entities`             | https://www.home-assistant.io/lovelace/entities/         |
| counter             | `entities`             | https://www.home-assistant.io/lovelace/entities/         |
| alarm_control_panel | `alarm-panel`          | https://www.home-assistant.io/lovelace/alarm-panel/      |

## Autor

|<img src="https://avatars3.githubusercontent.com/u/42282908?s=60&v=4" width="60">|
|:-:|
|[@jadson179](https://github.com/jadson179)|
