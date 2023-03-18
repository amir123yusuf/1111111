document.querySelector('button').addEventListener('click', myClick);

function myClick() {
    let a = document.querySelector('#textInput').value;
    console.log(a);
}

document.getElementById("clearButton").onclick = function() {
    document.getElementById("textInput").value = "";
  }