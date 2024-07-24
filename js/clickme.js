function clickMe()
{
    let a=parseInt(document.getElementById('num1').value)
    let b=parseInt(document.getElementById('num2').value)
    document.getElementById("result").textContent=`sum is ${a+b}`
}