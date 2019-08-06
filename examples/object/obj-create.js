let modelRabbit = {
  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  }
}

// Creates a new obj, using modelRabbit as a model
let killerRabbit = Object.create(modelRabbit);

killerRabbit.type = 'killer';
killerRabbit.speak('Bought a gun and I wanna use it. \\_(:D)_/');