let protoRabbit = Object.create({
  type: 'Common',
  getType() {
    return this.type;
  }
})

// A contructor function makes sure a new instance of obj is created from its father with the same method and properties
function Rabbit(type) {
  let rabbit = Object.create(protoRabbit);
  rabbit.type = type;

  return rabbit;
}

Rabbit();

let rabbit = new Rabbit('cheerful');

console.log(rabbit, rabbit.getType());

class Rabbit {
  constructor(type) {
    this.type = type;
  }

  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  }
}

let uglyRabbit = new Rabbit('ugly');

console.log(uglyRabbit.speak('Damn I got no luck'));