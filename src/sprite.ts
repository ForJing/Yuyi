interface IPosition {
  x: number
  y: number
}

class Sprite {
  public createTime: Date
  constructor(
    public width: number,
    public height: number,
    public x: number = 0,
    public y: number = 0
  ) {
    this.createTime = new Date()
  }

  move() {}
}
