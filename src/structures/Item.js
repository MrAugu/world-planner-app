export class Item {
  constructor (data) {
    this.id = data.id;
    this.name = data.name;
    this.texture = data.texture;
    this.texture_x = data.texture_x;
    this.texture_y = data.texture_y;
    this._sprites_map = data.sprites_map;
    this.sprites_map = {};
    this.rarity = data.rarity;
    this.maximum_amount = data.maximum_amount;
    this.spread_type = data.spread_type;
    this.sprite = Buffer.from(data.sprite, "base64");
  }

  init () {
    for (const key of Object.keys(this._sprites_map)) {
      this.sprites_map[key] = {
        data: Buffer.from(this._sprites_map[key].data, "base64"),
        texture_x: this._sprites_map[key].texture_x,
        texture_y: this._sprites_map[key].texture_y,
      };
    }
  }
}
