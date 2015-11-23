var num1 = document.getElementById('num1');
var num2 = document.getElementById('num2');


document.getElementById('form_event').addEventListener("submit", function(e) {
  e.preventDefault();
  var result = 0;
  var operator = document.getElementById('operator').value;
  var firstnum = parseInt(num1.value);
  var secondnum = parseInt(num2.value);
  switch(operator){
    case '+':
    result = (firstnum + secondnum);
    break;
    case '-':
    result = (firstnum - secondnum);
    break;
    case '*':
    result = (firstnum * secondnum);
    break;
    case '/':
    result = (firstnum / secondnum);
    break;
    case '**':
    result = Math.pow(firstnum, secondnum);
    break;
    case 'sqrt':
    result = Math.sqrt(firstnum);
    break;
    case '%':
    result = (firstnum % secondnum);
    break;
    case 'log':
    result = Math.log(num1.value);
    break;
    }
    alert(result);
  });


// }