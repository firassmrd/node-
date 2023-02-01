const generator = require("generate-password");
const password = generator.generate({
  length: 30,
  numbers: true,
});
console.log(password);
