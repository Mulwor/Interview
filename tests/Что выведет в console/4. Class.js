class Chameleon {
  static colorChange(newColor) {
    this.newColor = newColor
    return this.newColor
  }

  constructor({ newColor = "green" } = {}) {
    this.newColor = newColor
  }
}

const freddie = new Chameleon({ newColor: "pink" })
freddie.colorChange("orange")
