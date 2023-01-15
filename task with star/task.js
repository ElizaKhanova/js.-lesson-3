document.getElementById ('result').readOnly = true;
calc.onclick = function calcRes()
{
    let number = document.getElementById ('number').value;
    console.log (number);
    let result = number**2;
    document.getElementById ('result').value = result;
    console.log (result);
};