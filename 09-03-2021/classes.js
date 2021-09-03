class Shape {
  constructor(dimensions) {
    this.dimensions = dimensions;
  }
}

class Cube extends Shape {
  constructor(height, width, depth) {
    super({ height: height, width: width, depth: depth });
  }
}

class Rectangle extends Shape {
  constructor(height, width) {
    super({ width: width, height: height });
  }

  displayHeightAndWidth() {
    return `height => ${this.dimensions.height} : width => ${this.dimensions.width}`;
  }
}

// function Rectangle(height, width) {
//   this.height = height;
//   this.width = width;
// }

// Rectangle.prototype.displayHeightAndWidth = function () {
//   return `height => ${this.height} : width => ${this.width}`;
// };

const newRectangle = new Rectangle(10, 20);

console.log(newRectangle.displayHeightAndWidth());
