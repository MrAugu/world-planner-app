export class Weather {
  constructor (data) {
    this.name = data.name;
    this.hash = data.hash;
    this.data = Buffer.from(data.data, "base64");
  }
}
