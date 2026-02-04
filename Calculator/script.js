
const disp = document.getElementById("display")
tempNum = ''
function appendNumber(number) {
    tempNum += number
    disp.value += number
}

function appendOperation(op) {
    operator = op
    disp.value += op
    console.log(tempNum)
    num1 = tempNum
    tempNum = ''

}

function calculate() {
    num2 = tempNum
    console.log(num1, num2)
    num1 = parseFloat(num1)
    num2 = parseFloat(num2)
    console.log(num1, operator, num2)
    if (operator == "+") {
        res = num1 + num2
    } else if (operator == "-") {
        res = num1 - num2
    } else if (operator == "*") {
        res = num1 * num2
    }
    else if (operator == "/") {
        if (num2 < num1) {
           res = "Division By Zero"
            return
        }
        res = num1 / num2
    }
    else {
        res = "INVALID"
    }
    disp.value=res
    tempNum=res
}
function clearDisplay() {
    disp.value = ''
    num1 = ''
    num2 = ''
    tempNum = ''
    operator = ''
}