class StrategyGroup {

   static async generateView(info) {
    
    const group = info.hass.states[info.view.group]
    const cards = []

    group.attributes.entity_id.map(entity => {
        const [domain,name] = entity.split(".")

        const card = this[domain](info.hass.states[entity])

        if (card)  cards.push(card)
        console.log(cards)
    })
    
    return {
      cards: cards,
    };
  }

  static camera(entity) {
    const card = { "type": "custom:webrtc-camera" , "entity": entity.entity_id }

    return card
  }

  static lock(entity) {
    const card = { "type": "entities" , "entities": [{ "entity": entity.entity_id }] }

    return card    
  }

  static climate(entity) {
    const card = { "type": "thermostat" , "entity": entity.entity_id  }

    return card    
  }

  static scene(entity) {
    const card = { "type": "entities" , "entities": [{ "entity": entity.entity_id }] }

    return card  
  }

  static binary_sensor(entity) {
    const card = { "type": "entities" , "entities": [{ "entity": entity.entity_id }] }

    return card  
  }

  static sensor(entity) {
    const card = { "type": "sensor" , "entity": entity.entity_id }
    return card  
  }

  static cover(entity) {
    const card = { "type": "entities" , "entities": [{ "entity": entity.entity_id }] }
    return card  
  }

  static switch(entity) {
    const card = { "type": "entities" , "entities": [{ "entity": entity.entity_id }] }
    return card  
  }

  static weather(entity) {
    const card = { "type": "weather-forecast" , "entity": entity.entity_id }
    return card  
  }

  static light(entity) {
    const card = { "type": "entities" , "entities": [{ "entity": entity.entity_id }] }
    return card  
  }

  static media_player(entity) {
    const card = { "type": "entities" , "entities": [{ "entity": entity.entity_id }] }
    return card  
  }

  static counter(entity) {
    const card = { "type": "entities" , "entities": [{ "entity": entity.entity_id }] }
    return card  
  }

  static alarm_control_panel(entity) {
    const card = { "type": "alarm-panel" , "entity": entity.entity_id }
    return card  
  }

  
}

customElements.define("ll-strategy-strategy-group", StrategyByGroup);
