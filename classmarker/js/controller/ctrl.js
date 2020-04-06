window.addEventListener('load',init);

function init(){
    document.getElementById('id').focus();
    document.getElementById('add').addEventListener('click', add);
}

function add(){
    var id = document.getElementById('id').value;
    var name = document.getElementById('name').value;
    var optionA = document.getElementById('a').value;
    var optionB = document.getElementById('b').value;
    var optionC = document.getElementById('c').value;
    var optionD = document.getElementById('d').value;
    var ans = document.getElementById('ans').value;
    var score = document.getElementById('score').value;
    var questions = new Questions(id, name, optionA, optionB, optionC, optionD, ans, score);
    var quesArr = questionOperations.add(questions);
    console.log(quesArr);
    document.querySelector('#total').innerText = quesArr.length;
    document.querySelector('#questions').innerText = '';
    quesArr.forEach(quesObj=>{
        console.log(quesObj);
        printTable(quesObj);
    });
}

function printTable(quesObj){
    var tbody = document.querySelector('#questions');
    var tr = tbody.insertRow();
    var index = 0;
    for (const key in quesObj) {
        var td = tr.insertCell(index);
        td.innerText = quesObj[key];
        console.log(quesObj[key]);
        index++;
    }
}