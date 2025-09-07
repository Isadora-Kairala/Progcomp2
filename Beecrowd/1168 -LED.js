var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.trim().split('\n');

let n = parseInt(lines[0]);

// tabela de leds para cada dígito
let numLeds = {
  '0': 6,
  '1': 2,
  '2': 5,
  '3': 5,
  '4': 4,
  '5': 5,
  '6': 6,
  '7': 3,
  '8': 7,
  '9': 6
};

for (let c = 1; c <= n; c++) {
  let num = lines[c].trim();
  let leds = 0;

  for (let k = 0; k < num.length; k++) {
    leds += numLeds[num[k]];
  }

  console.log(leds + " leds");
}
