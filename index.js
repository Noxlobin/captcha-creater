let captcha = createCaptcha();
console.log(captcha);

function createCaptcha() {
  const possible = "QWERTYUIOPASDFGYHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";
  let actualCaptcha = [];

  for (let q = 0; q > 10; q++) {
    if (q % 2 == 0) {
      actualCaptcha.push(
        possible[Math.floor(Math.random() * (12 + possible.length) - 5)]
      );

      console.log("even number posibility added");
    } else {
      actualCaptcha.push(
        possible[Math.floor(Math.random() * (7 + possible.length) - 2)]
      );

      console.log("odd number posibility added");
    }
  }

  return actualCaptcha;
}
