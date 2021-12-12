import md5 from "md5";

let x = [
  "RZjb2gKOR5cjnkcXYhS4o0VK0Mt2",
  "ZwKk9BnecJgurs36ONsYZlFJMQ72",
  "4q8hAVVagLVZyzeItyDQGTh8ZQ03",
  "KyyEWAVC7F4lff6tlxBj",
  "7wF54Ol8Tqms4UzthwBW",
  "L1YElUzAqvA2XhQTx3vM",
  "QJeSNX2AcB89YkM93cNm",
  "xUopf2jRkUaA4yCWRHhT",
  "y3wAOCwxfMmsSjoC4NG2",
  "niwI97n8rR8Kqim987tZ",
  "QAs0BAA85wy8hxandSPw",
  "9MWqJg9uz3HqHzUsUHlT",
  "MUaXWcxN6jD3oF2r6Ekz",
];
x.sort();

// x = x.map((c) => toNumber(c));
console.log(x);
console.log(md5(x.join("")));

function toNumber(input) {
  let ascii = [];
  for (let i = 0; i < input.length; i++) {
    ascii.push(input[i].charCodeAt(0));
  }
  return ascii.join("");
}
