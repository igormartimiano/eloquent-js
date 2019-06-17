// not abstract at all, more chances of having bugs
let total = 0, count = 1;

while (count <= 10) {
  total += count;
  count += 1;
}

console.log(total);

// much more abstract example
function range(start) {
	let arr = [];

	for (let i = start; i < start; i++) {
		arr.push(i);
	}

	return arr;
}

function sum(arr) {
  return arr.reduce((acc, num) => acc + num);
}

console.log(sum(range(1, 10)));