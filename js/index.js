function getInputValueById(inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldValue = inputField.value;
    const inputFieldString = parseFloat(inputFieldValue);
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


document.getElementById('triangle-btn').addEventListener('click', function(){
    const triangleInputLeftValue = getInputValueById('triangle-base');
    const triangleInputRightValue = getInputValueById('triangle-height');
    const totalTriangleValue = 0.5 * triangleInputLeftValue * triangleInputRightValue;
    const triangleTextValue = getInnerTextValueById('triangle-innerText');
    const totalTriangleAmount = totalTriangleValue + triangleTextValue;
    setTextValueById('triangle-innerText', totalTriangleAmount);

})