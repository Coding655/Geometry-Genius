/* Triangle Calculations */
function getInputValueById(inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldValue = inputField.value;
    const inputFieldString = parseFloat(inputFieldValue);
    inputField.value = '';
    return inputFieldString;
}
function getInnerTextValueById (textId){
    const textField = document.getElementById(textId);
    const textFieldInnerText = textField.innerText;
    const textFieldString = parseFloat(textFieldInnerText);
    return textFieldString;
}
function setTextValueById (textId, newText){
    const textElement = document.getElementById(textId);
    textElement.innerText = newText;
}
/* Area Calculations */
function calculationArea(){

}


document.getElementById('triangle-btn').addEventListener('click', function(){
    const triangleInputLeftValue = getInputValueById('triangle-base');
    const triangleInputRightValue = getInputValueById('triangle-height');
    if(isNaN(triangleInputLeftValue) || isNaN(triangleInputRightValue)){
        alert('Use Numbers');
        return;
    }
    const totalTriangleValue = 0.5 * triangleInputLeftValue * triangleInputRightValue;
    const triangleTextValue = getInnerTextValueById('triangle-innerText');
    const totalTriangleAmount = totalTriangleValue + triangleTextValue;
    setTextValueById('triangle-innerText', totalTriangleAmount);
    

})

document.getElementById('rectangle-btn').addEventListener('click', function(){
    const rectangleInputLeftValue = getInputValueById('input-left-value');
    const rectangleInputRightValue = getInputValueById('input-right-value');
    if(isNaN(rectangleInputLeftValue) || isNaN(rectangleInputRightValue)){
        alert('Use Numbers');
        return;
    }
    const totalRectangleValue = rectangleInputLeftValue * rectangleInputRightValue;
    const rectangleInnerText = getInnerTextValueById('rectangle-innerText');
    const rectangleTotalAmount = totalRectangleValue + rectangleInnerText;
    setTextValueById('rectangle-innerText', rectangleTotalAmount);
})
document.getElementById('parallelogram-btn').addEventListener('click', function(){
    const parallelogramInputLeftValue = getInputValueById('para-input-left');
    const parallelogramInputRightValue = getInputValueById('pera-input-right');
    if(isNaN(parallelogramInputLeftValue) || isNaN(parallelogramInputRightValue)){
        alert('Use Numbers');
        return;
    }
    const parallelogramValue = parallelogramInputLeftValue * parallelogramInputRightValue;
    const parallelogramInnerText = getInnerTextValueById('para-text');
    const parallelogramTotalAmount = parallelogramValue + parallelogramInnerText;
    setTextValueById('para-text', parallelogramTotalAmount);
})
document.getElementById('rhombus-btn').addEventListener('click', function(){
   const  rhombusInputLeftValue = getInputValueById('rhombus-input-left');
    const rhombusInputRightValue = getInputValueById('rhombus-input-right');
    if(isNaN(rhombusInputLeftValue) || isNaN(rhombusInputRightValue)){
        alert('Use Numbers');
        return;
    }
    const rhombusValue =  rhombusInputLeftValue  *rhombusInputRightValue;
    const rhombusInnerText =  getInnerTextValueById ('rhombus-innerText');
    const rhombusTotalAmount = 0.5 *  rhombusValue + rhombusInnerText;
    setTextValueById('rhombus-innerText', rhombusTotalAmount);
})
document.getElementById('pentagon-btn').addEventListener('click', function(){
    const PentagonInputLeftValue = getInputValueById('pentagon-input-left');
    const PentagonInputRightValue = getInputValueById('pentagon-input-right');
    if(isNaN(PentagonInputLeftValue) || isNaN(PentagonInputRightValue)){
        alert('Use Numbers');
        return;
    }
    const PentagonValue =  PentagonInputLeftValue  * PentagonInputRightValue;
    const PentagonInnerText =  getInnerTextValueById ('pentagon-innerText');
    const PentagonTotalAmount = (0.5 *  PentagonValue)  + PentagonInnerText;
    setTextValueById('pentagon-innerText', PentagonTotalAmount);
})
function setOneClick(){
    const ellipseLeftInputValue = getInputValueById('ellipse-input-left');
    const ellipseRightInputValue = getInputValueById('ellipse-input-right');
    if(isNaN(ellipseLeftInputValue) || isNaN(ellipseRightInputValue)){
        alert('Use Numbers');
        return;
    }
    const ellipseValue = ellipseLeftInputValue * ellipseRightInputValue;
    const ellipseInnerText =  getInnerTextValueById('ellipse-innerText');
    const totalEllipseAmount = (3.1416 * ellipseValue) + ellipseInnerText;
    setTextValueById('ellipse-innerText', totalEllipseAmount);
}