// Author:Maithri
// Date:09/08/2018
// All_clear() will reset text box empty
function All_clear() {
    document.getElementById('values').value = "";
    document.getElementById('answer').value = "";
}


// sum() which is result of all the operations
// answer which will give final output value
function sum() {
    var answer = calculate(document.getElementById("values").value);
    document.getElementById("answer").value = answer;

}

//calculate(input) function takes input as parameter
//input will contain expression 
function calculate(input) {
    var number_array = [];//which contain input in array form
    var number = "";//number will stores numbers in expression
    var operand1;
    var operand2;
    var operator;
    // converting string to array
    // pattern is used to match find whether it is operator or number
    var input_length=input.length;
    console.log(input_length);
    var pattern = /[0-9.]/;
    for (var i = 0; i < input_length; i++) {

        if (input[i].match(pattern)) {
            number += input[i];
        }
        else {
            if (number == '' && input[i] == '-') {
                number = '-';
            }
            else {
                number_array.push(number, input[i]);
                number = '';
            }
        }
    }
    number_array.push(number);
   
    // finding ans for each operation and returning result to array
    while (number_array.length > 1) {
        operand1 = number_array.shift();
        operator = number_array.shift();
        operand2 = number_array.shift();

        operand1 = parseFloat(operand1);
        operand2 = parseFloat(operand2);
        //  calculation based upon operator
        switch (operator) {
            case '*': result = operand1 * operand2;
                      number_array.unshift(result);
                      break;
            case '-': result = operand1 - operand2;
                      number_array.unshift(result);
                      break;
            case '/': result = operand1 / operand2;
                      if (operand2 == 0)
                        return "devided by 0 error";
                      number_array.unshift(result);
                      break;
            case '+': result = operand1 + operand2;
                      number_array.unshift(result);
                      break;
            case '%': result = operand1 % operand2;
                      number_array.unshift(result);
                      break;
        }
    }
    return number_array;
}