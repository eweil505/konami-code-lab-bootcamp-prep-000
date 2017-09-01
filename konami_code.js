const code = [38, 38, 40, 40, 37, 39, 37, 39, 16, 66, 16, 65]

function init() {
  let index = 0;
  document.body.addEventListener('keydown', function(e) {
    const key = (e.which || e.detail);
    console.log(key);
    if (key === code[index]) {
      index++;
      console.log(`index: ${index}`);
      console.log(`code.length: ${code.length}`);
      if (index === code.length) {
        alert("You are the code master!");
        index = 0;
      }
    } else {
      index = 0;
    }
  })
}
