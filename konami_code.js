const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  let index = 0;
  document.body.addEventListener('keydown', function(e) {
    const key = (e.detail || e.which);
    console.log(key);
    if (key === code[index]) {
      index++;
      console.log(`index: ${index}`);
      console.log(`code.length - 1: ${code.length}`);
      if (index === code.length) {
        alert("You are the code master!");
        index = 0;
      }
    } else {
      index = 0;
    }
  })
}
