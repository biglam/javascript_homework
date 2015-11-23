var num1 = document.getElementById('num1');
var num2 = document.getElementById('num2');


document.getElementById('form_event').addEventListener("submit", function(e) {
  e.preventDefault();
  var result = 0;
  var operator = document.getElementById('operator').value;
  switch(operator){
    case '+':
    result = (parseInt(num1.value) + parseInt(num2.value));
    break;
    case '-':
    result = (parseInt(num1.value) - parseInt(num2.value));
    break;
    case '*':
    result = (parseInt(num1.value) * parseInt(num2.value));
    break;
    case '/':
    result = (parseInt(num1.value) / parseInt(num2.value));
    break;
    case '**':
    result = Math.pow(parseInt(num1.value), parseInt(num2.value));
    break;
    case 'sqrt':
    result = Math.sqrt(parseInt(num1.value));
    break;
    case '%':
    result = (parseInt(num1.value) % parseInt(num2.value));
    break;
    case 'log':
    result = Math.log(num1.value);
    break;
    }
    alert(result);
  });


// }