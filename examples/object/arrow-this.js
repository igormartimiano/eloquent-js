// Arrow functions do not create the "this" binding inside their scope
// however, they can use its "this" binding from its wrapper function
function normalize() {
  console.log(this.coords.map(x => x / this.length));
}

normalize.call({
  coords: [0, .2, .7],
  length: 3
})