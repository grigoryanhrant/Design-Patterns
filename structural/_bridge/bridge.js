class Model {
    constructor(color) {
        this.color = color;
    }
}

class Color {
    constructor(type) {
        this.type = type;
    }

    get() {
        return this.type;
    }
}

class BlackColor extends Color {
    constructor() {
        super("dark-black");
    }
}

class GreenColor extends Color {
    constructor() {
        super("green-metallic");
    }
}

class Audi extends Model {
    constructor(color) {
        super(color);
    }

    paint() {
        return `Auto: Audi, Color: ${this.color.get()}`;
    }
}

class Bmw extends Model {
    constructor(color) {
        super(color);
    }

    paint() {
        return `Auto: Bmw, Color: ${this.color.get()}`;
    }
}

const blackBmw = new Bmw(new BlackColor());

blackBmw.paint();