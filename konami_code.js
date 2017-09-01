const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
let index = 0;

function init(e) {
    const key = (e.detail || e.which);
    console.log(key);
    if (key === code[index]) {
      index++;
      if (index === code.length) {
        alert("You are the code master!");
        index = 0;
      }
    } else {
      index = 0;
    }
}

document.body.addEventListener('keydown', init)