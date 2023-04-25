let button = document.getElementById('btn');

button.addEventListener('click', function(){
    let word = document.getElementById('str').value;
    let count = word.replace(/\s/g, '').length;
    let outputDiv = document.getElementById('output');

    outputDiv.innerHTML = `<h1>${count}</h1>`
});
