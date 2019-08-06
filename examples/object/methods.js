let rabbit = {};

rabbit.speak = function(line) {
  console.log(`The rabbit says "${line}"`);
};

rabbit.speak("Are you on LSD? Rabbits don't talk at all");

function speak(line) {
  console.log(`The ${this.type} banana says "${line}"`);
};

let angryBanana = {
  type: 'angry',
  speak
};

let halfEatenBanana = {
  type: 'halfEaten',
  speak
};

angryBanana.speak("Don't fuck with angry bananas");
halfEatenBanana.speak("I'm half dead have some respect");