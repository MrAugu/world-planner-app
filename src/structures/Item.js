class Item {
  constructor (data) {
    this.id = data.id;
    this.name = data.name;
    this.texture = data.texture;
    this.texture_x = data.texture_x;
    this.texture_y = data.texture_y;
    this._sprites_map = {};
    this.sprites_map = {};
    this.rarity = data.rarity;
    this.maximum_amount = data.maximum_amount;
    this.spread_type = data.spread_type;
    this.spread = Buffer.from(data, "base64");
  }

  init () {
    for (const key of Object.keys(this._sprites_map)) {
      this.sprites_map[key] = Buffer.from(this._sprites_map[key], "base64");
    }
    delete this._sprites_map;
  }
}

export default Item;
