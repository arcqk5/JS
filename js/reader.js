document.querySelector('button').addEventListener('click', function() {
    let file = document.getElementById('file').files[0];
    let reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function() {
        console.log(reader.result);
    }
    reader.onerror = function() {
        console.log(reader.error);
    }
})