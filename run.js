var numBtns = document.getElementsByClassName('btn_num')
var operatorBtns = document.getElementsByClassName('btn_operator')

var btnDecimal = document.querySelector('.calc_decimal')
var btnClear = document.getElementById('calc_Clear')
var display = document.getElementById('display')

var displayVal = '0'
var pendingVal;
var evalStringArry = []


var updateDisplayVal = (clickObj) => {
  var btnText = clickObj.target.innerText
  
  if(displayVal === '0'){
    displayVal = ''
  }
  displayVal += btnText
  display.innerText = displayVal
}


var performOperation = (clickObj) => {
  var operator = clickObj.target.innerText

  switch(operator){
    case '+':
      pendingVal = displayVal;
      displayVal = '0'
      display.innerText = displayVal
      evalStringArry.push(pendingVal)
      evalStringArry.push('+')
      break

    case '-':
      pendingVal = displayVal;
      displayVal = '0'
      display.innerText = displayVal
      evalStringArry.push(pendingVal)
      evalStringArry.push('-')
      break

    case '×':
      pendingVal = displayVal;
      displayVal = '0'
      display.innerText = displayVal
      evalStringArry.push(pendingVal)
      evalStringArry.push('*')
      break

    case '÷':
      pendingVal = displayVal;
      displayVal = '0'
      display.innerText = displayVal
      evalStringArry.push(pendingVal)
      evalStringArry.push('/')
      break

    case '%':
      evalStringArry.push(displayVal)
      var per = eval(displayVal/100)
      displayVal = per
      display.innerText = displayVal
      evalStringArry = []
      break

    case '+/-':
      evalStringArry.push(displayVal)
      var neg = -parseFloat(displayVal)
      displayVal = neg
      display.innerText = displayVal
      evalStringArry = []
      break

    case '=':
      evalStringArry.push(displayVal)
      var evaluation = eval(evalStringArry.join(' ')) // ['a', '+', 'a'] = 'a + a'
      displayVal = evaluation + ''
      display.innerText = displayVal
      evalStringArry = []
      break

    default:
      break
  }
}

for(var i=0; i < numBtns.length; i++){
  numBtns[i].addEventListener('click', updateDisplayVal, false)
}

for(var i=0; i < operatorBtns.length; i++){
  operatorBtns[i].addEventListener('click', performOperation, false)
}


btnDecimal.addEventListener('click', ()=>{
  if(!displayVal.includes('.')){
    displayVal += '.'
    display.innerText = displayVal
  }
})

btnClear.addEventListener('click', ()=>{
  displayVal = '0'
  pendingVal = undefined
  evalStringArry = []
  display.innerText = displayVal
})